defmodule Metaboard.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :email, :string, null: false
      add :password_hash, :string

      add :email_confirmation_token, :string
      add :email_confirmed_at, :utc_datetime
      add :password_reset_token, :string

      timestamps()
    end

    create unique_index(:users, [:email])
  end
end
