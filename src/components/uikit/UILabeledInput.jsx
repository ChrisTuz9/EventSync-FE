/**
 * @param {{
 * as: 'input' | 'textarea'
 * }} props 
 */
export function UILabeledInput({ label, as = "input", ...props }) {
    const Tag = as;

    return (
        <div className="mb-4">
            <label className="block mb-1">
                {label}
            </label>
            <Tag
                className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...props}
            />
        </div>
    )
}