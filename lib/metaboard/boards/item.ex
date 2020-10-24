defmodule Metaboard.Boards.Item do
    use Ecto.Schema

    embedded_schema do
        field(:order, :integer)
        field(:name, :string)
        field(:score, :integer)
    end
end
