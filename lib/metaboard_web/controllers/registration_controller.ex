defmodule MetaboardWeb.RegistrationController do
  use MetaboardWeb, :controller

  alias Plug.Conn

  @spec create(Conn.t(), map()) :: Conn.t()
  def create(conn, params)

  def create(conn, %{"user" => user_params}) do
    if registration_disabled?() do
      send_server_error(conn, 403, "Registration is disabled")
    else
      user = Enum.into(user_params, %{})

      case Pow.Plug.create_user(conn, user) do
        {:ok, _user, conn} ->
          conn |> send_api_token()

        {:error, reason, _conn} -> {:error, reason}
          conn |> send_user_create_errors(reason)
      end
    end
  end

  defp send_api_token(conn) do
    json(conn, %{
      data: %{
        token: conn.private[:api_auth_token],
        renew_token: conn.private[:api_renew_token]
      }
    })
  end

  defp send_user_create_errors(conn, errors) do
    conn
    |> put_status(500)
    |> json(%{error: %{status: 500, message: "Couldn't create user", errors: errors}})
  end

  defp send_server_error(conn, status_code, message) do
    conn
    |> put_status(status_code)
    |> json(%{error: %{status: status_code, message: message}})
  end

  @spec registration_disabled?() :: boolean()
  defp registration_disabled?() do
    case System.get_env("METABOARD_REGISTRATION_DISABLED") do
      x when x == "1" or x == "true" -> true
      _ -> false
    end
  end
end
