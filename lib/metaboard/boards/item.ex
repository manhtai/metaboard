defmodule Metaboard.Boards.Item do
  use Ecto.Schema

  @primary_key {:id, :string, autogenerate: false}
  embedded_schema do
    field(:name, :string)
    field(:score, :integer)
  end
end
