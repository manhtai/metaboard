defmodule Metaboard.Boards do

  import Ecto.Query

  alias Metaboard.Repo
  alias Metaboard.Boards.Board

  @spec list_boards(binary()) :: [Board.t()]
  def list_boards(user_id) do
    Board |> where(user_id: ^user_id) |> Repo.all()
  end

  @spec get_board!(binary()) :: Board.t() | nil
  def get_board!(id) do
    Board |> Repo.get!(id)
  end

  @spec get_board!(binary(), integer) :: Board.t() | nil
  def get_board!(id, user_id) do
    Board |> Repo.get_by!([id: id, user_id: user_id])
  end

  @spec create_board(map()) :: {:ok, Board.t()} | {:error, Ecto.Changeset.t()}
  def create_board(attrs \\ %{}) do
    %Board{}
    |> Board.changeset(attrs)
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
