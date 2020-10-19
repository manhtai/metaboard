defmodule Metaboard.Repo do
  use Ecto.Repo,
    otp_app: :metaboard,
    adapter: Ecto.Adapters.Postgres
end
