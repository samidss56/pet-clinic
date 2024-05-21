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
<<<<<<< HEAD
                "border-gray-300 mb-2 h-[48px] bg-gray-100 placeholder:text-gray-300 focus:border-primary-red focus:ring-primary-red rounded-md shadow-sm" +
=======
                "border-gray-300 mb-2 h-[48px] bg-gray-100 dark:bg-light-gray dark:text-gray-50 dark:border-gray-600 placeholder:text-gray-300 focus:border-primary-red focus:ring-primary-red rounded-md shadow-sm" +
>>>>>>> a0ab76f (feat, refactor: owner layout added, controller and view files renamed, routes refactored, guest layout refactored, appointments page ui design in owner role, select input component refactored, navbar refactored, input component refactored, color pallete added to tailwind config)
                className
            }
            ref={input}
        />
    );
});
