defmodule Metaboard.Repo.Migrations.CreateBoards do
  use Ecto.Migration
  alias Metaboard.Board.BoardTypes

  def change do
    create table(:boards, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :name, :string, null: false
      add :code, :string, null: false
      add :type, :string, null: false, default: BoardTypes.leaderboard
      add :disabled_at, :utc_datetime

      add :items, {:array, :map}, null: false, default: []

      add :user_id, references(:users, [
        column: :id,
        on_delete: :delete_all
      ])

      timestamps()
    end

    create unique_index(:boards, [:code])
    create index(:boards, [:name])
  end
end
