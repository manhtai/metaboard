defmodule Metaboard.Boards.Item do
  use Ecto.Schema
  import Ecto.Changeset

  embedded_schema do
    field(:name, :string)
    field(:score, :float)
  end


  def changeset(item, attrs) do
    item
    |> cast(attrs, [:name, :score])
    |> validate_required([:name, :score])
  end
end
