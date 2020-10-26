defmodule MetaboardWeb.BoardView do
  use MetaboardWeb, :view
  alias MetaboardWeb.{BoardView, ItemView}

  def render("index.json", %{boards: boards}) do
    %{data: render_many(boards, BoardView, "basic.json")}
  end

  def render("create.json", %{board: board}) do
    %{data: render_one(board, BoardView, "basic.json")}
  end

  def render("update.json", %{board: board}) do
    %{data: render_one(board, BoardView, "basic.json")}
  end

  def render("show.json", %{board: board}) do
    %{data: render_one(board, BoardView, "expanded.json")}
  end

  def render("basic.json", %{board: board}) do
    %{
      id: board.id,
      created_at: board.inserted_at,
      updated_at: board.updated_at,
      name: board.name,
      type: board.type,
      code: board.code,
    }
  end

  def render("expanded.json", %{board: board}) do
    %{
      id: board.id,
      created_at: board.inserted_at,
      updated_at: board.updated_at,
      name: board.name,
      type: board.type,
      code: board.code,
      items: render_items(board.items)
    }
  end

  defp render_items([_ | _] = items) do
    render_many(items, ItemView, "item.json")
  end

  defp render_items(_items), do: []
end
