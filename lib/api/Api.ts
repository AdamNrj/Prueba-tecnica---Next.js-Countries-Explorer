const apiBase = process.env.NEXT_PUBLIC_API_URL ?? "https://restcountries.com/v3.1";

interface ApiError extends Error {
  response?: {
    status: number;
    data: unknown;
  };
}

export async function api<T>(path: string, options: RequestInit = {}): Promise<T> {
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

    const error: ApiError = new Error(errorBody?.detail ?? `API error (${res.status})`);
    error.response = {
      status: res.status,
      data: errorBody,
    };

    throw error;
  }

  return res.json() as Promise<T>;
}
