defmodule Metaboard.Util do
  @spec random_string(integer) :: String.t
  def random_string(length) do
    :crypto.strong_rand_bytes(length)
    |> Base.url_encode64
    |> binary_part(0, length)
  end

  @spec blank?(String.t | nil) :: boolean
  def blank?(str_or_nil) do
    "" == str_or_nil |> to_string() |> String.trim()
  end
end
