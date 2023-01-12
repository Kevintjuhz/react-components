import classNames from "classnames";

function Button({
                    children,
                    primary,
                    secondary,
                    success,
                    warning,
                    danger,
                    outline,
                    rounded,
                    ...rest
                }) {
    const classes = classNames(rest.className, 'flex items-center px-3 py-1.5 border', {
        'border-blue-500 hover:border-blue-400 bg-blue-500 hover:bg-blue-400 text-white': primary,
        'border-gray-900 hover:border-gray-600 bg-gray-900 hover:bg-gray-600 text-white': secondary,
        'border-green-500 hover:border-green-400 bg-green-500 hover:bg-green-400 text-white': success,
        'border-yellow-400 hover:border-yellow-300 bg-yellow-400 hover:bg-yellow-300 text-white': warning,
        'border-red-500 hover:border-red-400 bg-red-500 hover:bg-red-400 text-white': danger,
        'rounded-full': rounded,
        'bg-white hover:!bg-white': outline,
        'text-blue-500 hover:text-blue-400': outline && primary,
        'text-gray-900 hover:text-gray-600': outline && secondary,
        'text-green-500 hover:text-green-400': outline && success,
        'text-yellow-400 hover:text-yellow-300': outline && warning,
        'text-red-500 hover:text-red-400': outline && danger,

    });

    return (
        <button {...rest} className={classes}>
            {children}
        </button>
    );
}

Button.propTypes = {
    checkVariationValue: ({primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!success)
            + Number(!!warning)
            + Number(!!danger);

        if (count > 1) {
            return new Error("Only one variation of button allowed");
        }
    }
};

export default Button;