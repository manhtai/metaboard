defmodule Metaboard.Boards do

  import Ecto.Query

  alias Metaboard.Repo
  alias Metaboard.Boards.Board

  @spec list_boards(binary(), map) :: [Board.t()]
  def list_boards(user_id, params) do
    Board
    |> where(user_id: ^user_id)
    |> where(^filter_where(params))
    |> order_by(desc: :updated_at)
    |> Repo.all()
  end

  @spec filter_where(map) :: Ecto.Query.DynamicExpr.t()
  def filter_where(params) do
    Enum.reduce(params, dynamic(true), fn
      {"q", value}, dynamic ->
        dynamic([p], ^dynamic and ilike(p.name, ^"%#{value}%"))

      {_, _}, dynamic ->
        # Not a where parameter
        dynamic
    end)
  end

  @spec get_board!(binary()) :: Board.t() | nil
  def get_board!(id) do
    Board |> Repo.get!(id)
  end

  @spec get_board!(binary(), integer) :: Board.t() | nil
  def get_board!(id, user_id) do
    Board |> Repo.get_by!([id: id, user_id: user_id])
  end

  @spec get_board_by_code(binary()) :: Board.t() | nil
  def get_board_by_code(code) do
    Board |> Repo.get_by([code: code])
  end

  @spec boardcast_to_channel!(Board.t()) :: Board.t()
  def boardcast_to_channel!(board) do
    topic = "board:" <> board.code
    MetaboardWeb.Endpoint.broadcast!(
      topic,
      "shout",
      MetaboardWeb.BoardView.render("expanded.json", board: board)
    )
  end

  @spec create_board(map()) :: {:ok, Board.t()} | {:error, Ecto.Changeset.t()}
  def create_board(attrs \\ %{}) do
    %Board{}
    |> Board.changeset(attrs)
    |> Board.set_fixed_name_if_blank()
    |> Board.set_random_code_if_blank()
    |> Repo.insert()
  end

  @spec update_board(Board.t, map()) :: {:ok, Board.t()} | {:error, Ecto.Changeset.t()}
  def update_board(%Board{} = board, attrs) do
    board
    |> Board.changeset(attrs)
    |> Repo.update()
  end

end
