import { useState } from "react";

type FetchOptions<T> = {
    method?: string;
    body?: T | null;
};

export function useFetch<TResponse = unknown, TBody = unknown>(url: string) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<TResponse | null>(null);

    const request = async (options: FetchOptions<TBody> = {}) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url, {
                method: options.method || "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                body: options.body ? JSON.stringify(options.body) : null,
            });

            const result = (await response.json()) as TResponse;
            setData(result);
            return result;
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Erro na requisição");
            }
        } finally {
            setLoading(false);
        }
    };

    return { request, data, loading, error };
}
