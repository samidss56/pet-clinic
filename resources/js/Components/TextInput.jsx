import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                "border-gray-300 mb-2 h-[48px] bg-gray-100 text-gray-800 placeholder:text-gray-300 focus:border-primary-red focus:ring-primary-red rounded-md shadow-sm" +
                className
            }
            ref={input}
        />
    );
});
