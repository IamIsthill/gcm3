import { useCallback, useState } from "react";

interface ISaveAnswer {
  Q1: string | null;
  Q2: string | null;
  Q3: string | null;
}

export function useSaveAnswer() {
  const [loading, setLoading] = useState(false);

  // Ensure we have one instance of the function across rerenders
  const saveAnswer = useCallback(async (payload: ISaveAnswer) => {
    try {
      setLoading(true);

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/answers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed");

      return true;
    } catch {
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, saveAnswer };
}
