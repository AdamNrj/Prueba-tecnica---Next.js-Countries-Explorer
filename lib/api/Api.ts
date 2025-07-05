const apiBase =
  process.env.NEXT_PUBLIC_API_URL ?? "https://restcountries.com/v3.1";

export async function api<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const isServer = typeof window === "undefined";
  const accessToken = !isServer ? localStorage.getItem("accessToken") : null;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    ...(options.headers || {}),
  };

  const res = await fetch(`${apiBase}${path}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}));
    const error = new Error(
      errorBody?.detail ?? `API error (${res.status})`
    ) as any;

    error.response = {
      status: res.status,
      data: errorBody,
    };

    throw error;
  }

  return res.json();
}
