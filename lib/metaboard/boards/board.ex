defmodule Metaboard.Boards.Board do
  use Ecto.Schema
  import Ecto.Changeset

  alias Metaboard.Users.User
  alias Metaboard.Board.BoardTypes

  schema "boards" do
    field(:name, :string)
    field(:code, :string)
    field(:type, :string, default: BoardTypes.leaderboard)
    field(:disabled_at, :utc_datetime)

    embeds_many(:items, Item)

    belongs_to(:user, User, foreign_key: :user_id, references: :id, type: :integer)

    timestamps()
  end

  def changeset(board, attrs) do
    board
    |> cast(attrs, [:name, :code, :type, :items, :user_id])
    |> validate_required([:name, :code, :type, :user_id])
    |> unique_constraint(:code)
  end

  @spec disabled_at_changeset(Ecto.Schema.t() | Ecto.Changeset.t(), map()) :: Ecto.Changeset.t()
  def disabled_at_changeset(board, attrs) do
    board
    |> cast(attrs, [:disabled_at])
    |> validate_required([])
  end
end
