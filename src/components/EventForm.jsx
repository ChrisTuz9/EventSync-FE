import { useEventForm } from "../hooks/useEventForm";
import { UIButton } from "./uikit/UIButton";
import { UILabeledInput } from "./uikit/UILabeledInput";

export function EventForm({ onSuccess }) {
    const {
        title,
        setTitle,
        description,
        setDescription,
        loading,
        handleSubmit,
    } = useEventForm({ onSuccess });

    return (
        <form
            className="max-w-md mx-auto p-4 m-4 border shadow-md"
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
        </form>
    )
}