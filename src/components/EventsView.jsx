import { useEvents } from "../hooks/useEvents";
import { EventForm } from "./EventForm";
import { EventList } from "./EventList";

export function EventsView() {
  const {events, loading, error} = useEvents();

  return (
    <div className="flex max-w-6xl mx-auto h-screen p-4 gap-6">
      <div className="w-1/3">
        <EventForm />
      </div>
      <div className="w-2/3 h-full overflow-y-auto">
        <EventList 
          events={events}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
}
