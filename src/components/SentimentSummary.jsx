import { useSentimentSummary } from "../hooks/useSentimentSummary";

export function SentimentSummary({ eventId }) {
    const {summary, loading, error} = useSentimentSummary(eventId);

    if (loading) return <p>Loading sentiment summary…</p>;
    if (error) return <p className="text-red-600">Error: {error}</p>;

    return (
        <div className="flex items-center gap-3 text-gray-700 my-2">
            <div className="flex items-center gap-1">
                <span role="img" aria-label="positive" >😍</span> {summary.positiveCount}
            </div>
            <div className="flex items-center gap-1">
                <span role="img" aria-label="neutral" >😐</span> {summary.neutralCount}
            </div>
            <div className="flex items-center gap-1">
                <span role="img" aria-label="negative" >😡</span> {summary.negativeCount}
            </div>
        </div>
    )
}