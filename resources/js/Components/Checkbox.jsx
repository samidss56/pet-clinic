export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-primary-red text-secondary-red shadow-sm focus:ring-primary-red ' +
                className
            }
        />
    );
}
