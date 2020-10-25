defmodule Metaboard.Boards.Board do
  use Ecto.Schema
  import Ecto.Changeset
  alias Metaboard.Users.User
  alias Metaboard.Boards.BoardTypes
  alias Metaboard.Boards.Item
  alias Metaboard.Util

  @code_length 10

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
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
    |> cast(attrs, [:name, :code, :type, :user_id])
    |> cast_embed(:items)
    |> validate_required([:name, :type, :user_id])
    |> unique_constraint(:code)
  end

  @spec disabled_at_changeset(Ecto.Schema.t() | Ecto.Changeset.t(), map()) :: Ecto.Changeset.t()
  def disabled_at_changeset(board, attrs) do
    board
    |> cast(attrs, [:disabled_at])
    |> validate_required([])
  end

  def set_random_code_if_blank(changeset) do
    code = get_field(changeset, :code)
    if Util.blank?(code) do
      put_change(changeset, :code, get_unique_code())
    else
      changeset
    end
  end

  defp get_unique_code do
    code = Util.random_string(@code_length)
    changeset = change(%__MODULE__{}, code: code)
    changeset = unsafe_validate_unique(changeset, [:code], Metaboard.Repo)

    if is_code_unique(changeset) do
      code
    else
      get_unique_code()
    end
  end

  defp is_code_unique(%Ecto.Changeset{valid?: true}), do: true
  defp is_code_unique(_), do: false
end
