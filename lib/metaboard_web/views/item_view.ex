defmodule MetaboardWeb.ItemView do
  use MetaboardWeb, :view

  def render("item.json", %{item: item}) do
    %{
      id: item.id,
      name: item.name,
      score: item.score,
    }
  end
end
