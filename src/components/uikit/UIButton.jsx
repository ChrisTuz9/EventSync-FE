import clsx from "clsx"

/**
 * @param {{
 * children: any
 * className: string,
 * size: 'md' | 'lg',
 * variant: 'primary' | 'outline' | 'ghost'
 * shape?: 'rounded' | 'circle'
 * }} props 
 */
export function UIButton({ children, className, size, variant, shape = 'rounded', disabled }) {
    const buttonClassName = clsx(
        "transition-colors leading-tight",
        className,
        {
            md: "px-6 py-2 text-sm ",
            lg: "px-5 py-2",
        }[size],
        {
            primary: "bg-teal-600 hover:bg-teal-500 text-white text-2xl",
            outline: "border border-teal-600 text-teal-600 hover:border-teal-500 hover:text-teal-500",
            ghost: "bg-white text-teal-600 hover:bg-gray-100 hover:text-teal-500"
        }[variant],
        {
            rounded: size === "lg" ? "rounded-lg" : "rounded",
            circle: "rounded-full flex items-center justify-center",
        }[shape]
    )

    return (
        <button className={buttonClassName} disabled={disabled}>
            {children}
        </button>
    )
}