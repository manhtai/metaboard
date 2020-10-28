defmodule MetaboardWeb.BoardController do
  use MetaboardWeb, :controller

  alias Ecto.Changeset
  alias Metaboard.Users.User
  alias Metaboard.Boards
  alias Metaboard.Boards.Board
  alias MetaboardWeb.ErrorHelpers

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

      case Boards.create_board(params) do
        {:ok, %Board{} = board} ->
          conn
          |> put_status(:created)
          |> render("show.json", board: board)
        {:error, changeset} ->
          errors = Changeset.traverse_errors(changeset, &ErrorHelpers.translate_error/1)
          conn
          |> put_status(400)
          |> json(%{error: %{status: 400, message: "Couldn't create board", errors: errors}})
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

      case Boards.update_board(board, board_params) do
        {:ok, %Board{} = board} ->
          Boards.boardcast_to_channel!(board)

          conn
          |> put_status(:ok)
          |> render("show.json", board: board)
        {:error, changeset} ->
          errors = Changeset.traverse_errors(changeset, &ErrorHelpers.translate_error/1)
          conn
          |> put_status(400)
          |> json(%{error: %{status: 400, message: "Couldn't update board", errors: errors}})
      end
    end
  end
end
