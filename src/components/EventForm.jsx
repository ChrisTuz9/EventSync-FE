import { UIButton } from "./uikit/UIButton";
import { UILabeledInput } from "./uikit/UILabeledInput";

export function EventForm() {
    return (
        <form className="max-w-md mx-auto p-4 m-4 shadow-md">
            <h1 className="text-2xl font-semibold text-teal-600 mb-2">Create new event</h1>
            <UILabeledInput
                label={"Event title:"}
                type="text"
                required
            />
            <UILabeledInput
                label={"Event description:"}
                as="textarea"
                rows={4}
            />
            <UIButton size="md" variant="primary">
                Submit
            </UIButton>
        </form>
    )
}