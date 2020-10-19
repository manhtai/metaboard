defmodule MetaboardWeb.PageController do
  use MetaboardWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
