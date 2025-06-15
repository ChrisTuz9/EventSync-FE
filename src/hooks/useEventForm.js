import { useState } from "react";
import { EventApi } from "../api/EventApi";
import { toast } from "react-toastify";

export function useEventForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [loading, setLoading] = useState(false);

    const submit = async () => {
        setLoading(true);

        try {
            await EventApi.createEvent({ title, description });
            toast.success("Event created successfully!");
            setTitle("");
            setDescription("");
        } catch (err) {
            toast.error(err?.response?.data?.message || err.message || "Something went wrong");
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
        submit,
    };
}