import { useState } from "react";
import { EventApi } from "../api/EventApi";

export function useEventForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const submit = async () => {
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
    };

    return {
        title,
        setTitle,
        description,
        setDescription,
        loading,
        message,
        submit,
    };
}