import { useState } from "react";
import { FeedbackApi } from "../api/FeedbackApi";
import { toast } from "react-toastify";

export function useSubmitFeedback(eventId) {
    const [loading, setLoading] = useState(false);

    async function submitFeedback(message) {
        setLoading(true);

        try {
            await FeedbackApi.submitFeedback(eventId, { message });
        } catch (err) {
            toast.error(err?.response?.data?.message || err.message || "Failed to submit feedback.");
        } finally {
            setLoading(false);
        }
    }

    return {
        submitFeedback,
        loading,
    };
}