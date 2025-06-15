import { useSentimentSummary } from "../hooks/useSentimentSummary";
import { FeedbackField } from "./FeedbackField";
import { SentimentSummary } from "./SentimentSummary";

export function EventCard({ id, title, description }) {
    const { summary, loading, error, refreshSummary } = useSentimentSummary(id);

    return (
        <div className="border rounded p-4 shadow-sm bg-white">

            <h2 className="text-lg font-semibold textr-teal-700">
                {title}
            </h2>
            <p className="text-gray-700 mt-1">
                {description}
            </p>
            <SentimentSummary
                summary={summary}
                loading={loading}
                error={error} />
            <FeedbackField
                eventId={id} 
                onSuccess={refreshSummary}
            />
        </div>
    )
}