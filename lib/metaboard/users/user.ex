defmodule Metaboard.Users.User do
  use Ecto.Schema
  use Pow.Ecto.Schema
  import Ecto.Changeset

  alias Metaboard.Boards.Board

  schema "users" do
    field(:password_reset_token, :string)
    field(:email_confirmation_token, :string)
    field(:email_confirmed_at, :utc_datetime)

    has_many(:boards, Board, foreign_key: :user_id)

    pow_user_fields()

    timestamps()
  end

  def changeset(user_or_changeset, attrs) do
    user_or_changeset
    |> pow_changeset(attrs)
  end

  @spec email_verification_changeset(Ecto.Schema.t() | Ecto.Changeset.t(), map()) ::
          Ecto.Changeset.t()
  def email_verification_changeset(user_or_changeset, attrs) do
    user_or_changeset
    |> cast(attrs, [:email_confirmation_token, :email_confirmed_at])
    |> validate_required([])
  end

  @spec password_reset_changeset(Ecto.Schema.t() | Ecto.Changeset.t(), map()) ::
          Ecto.Changeset.t()
  def password_reset_changeset(user_or_changeset, attrs) do
    user_or_changeset
    |> cast(attrs, [:password_reset_token])
    |> validate_required([])
  end

  @spec password_changeset(Ecto.Schema.t() | Ecto.Changeset.t(), map()) ::
          Ecto.Changeset.t()
  def password_changeset(user_or_changeset, attrs) do
    user_or_changeset
    |> pow_password_changeset(attrs)
    |> password_reset_changeset(attrs)
  end
end
