import { useState } from "react";

type FetchOptions<T> = {
    method?: string;
    body?: T | null;
};

export function useFetch<T>(url: string) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<any>(null);

    const request = async (options: FetchOptions<T> = {}) => {
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

            const result = await response.json();
            setData(result);
            return result;
        } catch (err: any) {
            setError(err.message || "Erro na requisição");
        } finally {
            setLoading(false);
        }
    };

    return { request, data, loading, error };
}
