defmodule MetaboardWeb.PageController do
  use MetaboardWeb, :controller

  @spec index(Plug.Conn.t(), map()) :: Plug.Conn.t()
  def index(conn, _params) do
    html(conn, File.read!("priv/static/index.html"))
  end
end
