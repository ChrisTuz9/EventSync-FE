import { useState } from "react";
import { EventApi } from "../api/EventApi";
import { toast } from "react-toastify";

export function useEventForm({ onSuccess }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await EventApi.createEvent({ title, description });
            toast.success("Event created successfully!");
            setTitle("");
            setDescription("");
            onSuccess?.(res.data);
        } catch (err) {
            toast.error(err?.response?.data?.message || err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    return {
        title,
        setTitle,
        description,
        setDescription,
        loading,
        handleSubmit,
    };
};