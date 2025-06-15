import { useState } from "react";
import { useSubmitFeedback } from "../hooks/useSubmitFeedback";
import { SendIcon } from "./icons/SendIcon";
import { UIInputWithSubmit } from "./uikit/UIInputWithSubmit";

export function FeedbackField({ eventId, onSuccess }) {
    const { submitFeedback, loading } = useSubmitFeedback(eventId);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message.trim()) return;
        await submitFeedback(message);
        setMessage("");
        onSuccess?.();
    };

    return (
        <form className="mt-2" onSubmit={handleSubmit}>
            <UIInputWithSubmit
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        handleSubmit;
                    }
                }}
                placeholder="Write a feedback..."
                submitButtonChildren={<SendIcon className="w-5 h-5"/>}
                buttonShape="circle"
                disabled={loading}
            />
        </form>
    )
}