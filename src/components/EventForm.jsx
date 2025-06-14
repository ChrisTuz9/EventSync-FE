import { UILabeledInput } from "./uikit/UILabeledInput";

export function EventForm() {
    return (
        <form className="max-w-md mx-auto p-4 m-4 shadow-md">
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
        </form>
    )
}