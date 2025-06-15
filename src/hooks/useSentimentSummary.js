import { useState, useEffect } from "react";
import { EventApi } from "../api/EventApi";

export function useSentimentSummary(eventId) {
    const [summary, setSummary] = useState({
        positiveCount: 0,
        neutralCount:  0,
        negativeCount: 0,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchSummary() {
            setLoading(true);
            setError(null);
            try {
                const response = await EventApi.getSentimentSummary(eventId);
                setSummary(response.data);
            } catch (err) {
                setError(err?.response?.data?.message || err.message || "Failed to load sentiment summary.")
            } finally {
                setLoading(false);
            }
        }

        fetchSummary();
    }, [eventId])

    return {
        summary,
        loading,
        error,
    }
}