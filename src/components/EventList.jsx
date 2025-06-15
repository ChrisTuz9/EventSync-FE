import { EventCard } from "./EventCard";

export function EventList({events, loading, error}) {
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