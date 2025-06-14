import { UIButton } from "./UIButton";

/**
 * @param {{
 * as: 'input' | 'textarea'
 * }} props 
 */
export function UIInputWithSubmit({ as = "input", submitButtChildren, buttonShape, ...props }) {
    const Tag = as;

    return (
        <div className="flex my-2">
            <Tag
                className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...props}
            />
            <UIButton size="md" variant="ghost" shape={buttonShape}>
                {submitButtChildren}
            </UIButton>
        </div>
    )
}