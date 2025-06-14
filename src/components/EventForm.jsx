import { useState } from "react";
import { UIButton } from "./uikit/UIButton";
import { UILabeledInput } from "./uikit/UILabeledInput";
import { EventApi } from "../api/EventApi";

export function EventForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            await EventApi.createEvent({ title, description });
            setMessage("Event created successfully!");
            setTitle("");
            setDescription("");
        } catch (err) {
            setMessage(err?.response?.data?.message || err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form 
            className="max-w-md mx-auto p-4 m-4 shadow-md"
            onSubmit={handleSubmit}
        >
            <h1 className="text-2xl font-semibold text-teal-600 mb-2">Create new event</h1>
            <UILabeledInput
                label={"Event title:"}
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <UILabeledInput
                label={"Event description:"}
                as="textarea"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <UIButton 
                type="submit"
                size="md" 
                variant="primary"
                disabled={loading}
            >
                {loading ? "Submitting..." : "Submit"}
            </UIButton>
            {message && (
                <p className="mt-2 text-sm text-center text-gray-700">{message}</p>
            )}
        </form>
    )
}