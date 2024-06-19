import { forwardRef, useEffect, useRef } from "react";

const SelectInput = forwardRef(
    (
        {
            options = [],
            className = "",
            isFocused = false,
            placeholder = "",
            ...props
        },
        ref
    ) => {
        const selectRef = ref ? ref : useRef();

        useEffect(() => {
            if (isFocused) {
                selectRef.current.focus();
            }
        }, [isFocused]);

        return (
            <select
                {...props}
                className={
                    "border-gray-300 mb-2 h-[48px] bg-gray-100 dark:bg-light-gray dark:text-gray-50 dark:border-gray-600 placeholder:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm " +
                    className
                }
                ref={selectRef}
            >
                {placeholder && (
                    <option value="" disabled selected hidden>
                        {placeholder}
                    </option>
                )}
                {options.map((option) => {
                    if (typeof option === "string") {
                        return (
                            <option key={option} value={option.toLowerCase()}>
                                {option}
                            </option>
                        );
                    }
                    return (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    );
                })}
            </select>
        );
    }
);

export default SelectInput;
