defmodule MetaboardWeb.BoardChannel do
  use MetaboardWeb, :channel

  alias Metaboard.{Boards}

  @impl true
  def join("board:" <> board_code, _, socket) do
    case Boards.get_board_by_code(board_code) do
      %Boards.Board{} = board ->
        socket = assign(socket, :board_id, board.id)
        send(self(), :after_join)
        {:ok, socket}

      _ -> {:error, %{message: "Wrong code", code: 404}}
    end
  end

  @impl true
  def handle_in("ping", payload, socket) do
    {:reply, {:ok, payload}, socket}
  end

  @impl true
  def handle_info(:after_join, socket) do
    # Send first message after join
    with %{board_id: board_id} <- socket.assigns do
      board = Boards.get_board!(board_id)
      push(socket, "shout", MetaboardWeb.BoardView.render("expanded.json", board: board))
    end
    {:noreply, socket}
  end
end
