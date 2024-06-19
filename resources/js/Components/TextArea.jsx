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
        <textarea
            {...props}
            type={type}
            className={
                "border-gray-300 bg-gray-100 mb-2 focus:border-primary-red focus:ring-primary-red rounded-md shadow-sm " +
                className
            }
            ref={input}
        />
    );
});
