import { useState, useEffect } from "react";
import { EventApi } from "../api/EventApi";
import { EventCard } from "./EventCard";

export function EventList() {
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

    if (loading) return <p className="text-center">Loading events...</p>;
    if (error) return <p className="text-center text-red-600">{error}</p>;

    return (
        <div className="grid gap-4 max-w-3xl mx-auto p-4">
            {events.map(event => (
                <EventCard key={event.id} {...event} />
            ))}
        </div>
    )
}