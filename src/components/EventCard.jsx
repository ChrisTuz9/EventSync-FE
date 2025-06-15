import { FeedbackField } from "./FeedbackField";
import { SentimentSummary } from "./SentimentSummary";

export function EventCard({ id, title, description }) {
    return (
        <div className="border rounded p-4 shadow-sm bg-white">
            
            <h2 className="text-lg font-semibold textr-teal-700">
                {title}
            </h2>
            <p className="text-gray-700 mt-1">
                {description}
            </p>
            <SentimentSummary eventId={id}/>
            <FeedbackField eventId={id}/>
        </div>
    )
}