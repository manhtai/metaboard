defmodule MetaboardWeb.BoardController do
  use MetaboardWeb, :controller

  alias Metaboard.Users.User
  alias Metaboard.Boards
  alias Metaboard.Boards.Board

  @spec index(Plug.Conn.t(), map) :: Plug.Conn.t()
  def index(conn, %{}) do
    with %User{id: user_id} <- conn.assigns.current_user do
      boards = Boards.list_boards(user_id)
      render(conn, "index.json", boards: boards)
    end
  end

  @spec create(Plug.Conn.t(), map) :: Plug.Conn.t()
  def create(conn, %{"board" => board_params}) do
    with %User{id: user_id} <- conn.assigns.current_user do
      params =
        board_params
        |> Map.merge(%{
          "user_id" => user_id,
        })

      with {:ok, %Board{} = board} <- Boards.create_board(params) do
        conn
        |> put_status(:created)
        |> render("show.json", board: board)
      end
    end
  end

  @spec show(Plug.Conn.t(), map) :: Plug.Conn.t()
  def show(conn, %{"id" => id}) do
    board = Boards.get_board!(id)
    render(conn, "show.json", board: board)
  end

  @spec update(Plug.Conn.t(), map) :: Plug.Conn.t()
  def update(conn, %{"id" => id, "board" => board_params}) do
    with %User{id: user_id} <- conn.assigns.current_user do
      board = Boards.get_board!(id, user_id)

      with {:ok, %Board{} = board} <- Boards.update_board(board, board_params) do
        conn
        |> put_status(:created)
        |> render("show.json", board: board)
      end
    end
  end
end
