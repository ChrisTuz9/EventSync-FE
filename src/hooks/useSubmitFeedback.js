import { useState } from "react";
import { FeedbackApi } from "../api/FeedbackApi";
import { toast } from "react-toastify";

export function useSubmitFeedback({ eventId, onSuccess }) {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message.trim()) return;
        setLoading(true);

        try {
            await FeedbackApi.submitFeedback(eventId, { message });
        } catch (err) {
            toast.error(err?.response?.data?.message || err.message || "Failed to submit feedback.");
        } finally {
            setLoading(false);
        }

        setMessage("");
        onSuccess?.();
    };

    return {
        message,
        setMessage,
        loading,
        handleSubmit,
    };
}