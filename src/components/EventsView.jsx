import { EventForm } from "./EventForm";
import { EventList } from "./EventList";

export function EventsView() {
  return (
    <div className="flex max-w-6xl mx-auto h-screen p-4 gap-6">
      <div className="w-1/3">
        <EventForm />
      </div>
      <div className="w-2/3 h-full overflow-y-auto">
        <EventList />
      </div>
    </div>
  );
}
