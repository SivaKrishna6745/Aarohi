import { cn } from '@/lib/cn';

type Size = 'sm' | 'md' | 'lg';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    type: string;
    label?: string;
    error?: string;
    placeholder?: string;
    icon?: React.ReactNode;
    iconPosition?: string;
    wSize?: Size;
    disabled?: boolean;
    classNames?: string;
}

const sizeClasses: Record<Size, string> = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-1.5 text-md',
    lg: 'px-5 py-2 text-lg',
};

export const Input = ({
    id,
    type,
    label = '',
    error = '',
    placeholder = '',
    icon = <></>,
    iconPosition = 'left',
    wSize = 'md',
    disabled = false,
    classNames = '',
    ...restProps
}: InputProps) => {
    return (
        <div className="flex flex-col w-full">
            {label && (
                <label htmlFor={`input-${id}`} className="text-sm mb-1">
                    {label}
                </label>
            )}
            <div className="relative flex items-center w-full">
                {icon && (
                    <span
                        className={cn(
                            'absolute top-1/2 -translate-y-1/2',
                            iconPosition === 'left' ? 'left-3' : 'right-3'
                        )}
                    >
                        {icon}
                    </span>
                )}
                <input
                    id={`input-${id}`}
                    type={type}
                    placeholder={placeholder}
                    className={cn(
                        sizeClasses[wSize],
                        'outline-none border-2 border-gray-700 rounded-md focus:border-aarohi-magenta w-full',
                        error && 'border-red-500',
                        disabled && 'border-gray-500 cursor-not-allowed',
                        iconPosition === 'left' ? 'pl-12' : 'pr-12',
                        classNames
                    )}
                    disabled={disabled}
                    {...restProps}
                />
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
        </div>
    );
};
