import { useState, useEffect } from "react";
import { EventApi } from "../api/EventApi";

export function useEvents() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const response = await EventApi.getAllEvents();
                setEvents(response.data);
            } catch (err) {
                setError(err?.response?.data?.message || err.message || "Something went wrong")
            } finally {
                setLoading(false);
            }
        }

        fetchEvents();
    }, []);

    return { events, loading, error };
}