import { UIButton } from "./UIButton";

/**
 * @param {{
 * as: 'input' | 'textarea'
 * }} props 
 */
export function UIInputWithSubmit({ as = "input", submitButtonChildren, buttonShape, disabled, ...props }) {
    const Tag = as;

    return (
        <div className="flex gap-2 my-2">
            <Tag
                className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...props}
            />
            <UIButton size="md" variant="ghost" shape={buttonShape} disabled={disabled}>
                {submitButtonChildren}
            </UIButton>
        </div>
    )
}