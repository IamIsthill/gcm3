import { useState } from "react";

export function useSaveAnswer() {
  const [loading, setLoading] = useState(false);

  async function saveAnswer(payload: {
    Q1: string | null;
    Q2: string | null;
    Q3: string | null;
  }) {
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
  }

  return { loading, saveAnswer };
}
