import { cn } from '@/lib/cn';

type Variant = 'default' | 'outlined' | 'elevated';
type Size = 'sm' | 'md' | 'lg';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    classNames?: string;
    onClick?: () => void;
    variant?: Variant;
    clickable?: boolean;
    size?: Size;
}

const cardVariants: Record<Variant, string> = {
    default: 'bg-gray-900 border border-gray-800 rounded-lg',
    outlined: 'bg-transparent border-2 border-aarohi-magenta rounded-lg',
    elevated: 'bg-gray-900 shadow-lg rounded-lg',
};

const sizeClasses: Record<Size, string> = {
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6',
};

export const Card = ({
    children,
    classNames = '',
    onClick,
    variant = 'default',
    clickable = true,
    size = 'md',
    ...restProps
}: CardProps) => {
    const isClickable = Boolean(onClick) || clickable;

    return (
        <div
            className={cn(
                'flex flex-col gap-4 overflow-hidden',
                cardVariants[variant],
                sizeClasses[size],
                isClickable && 'cursor-pointer hover:bg-gray-800 transition-colors',
                classNames
            )}
            onClick={onClick}
            role={isClickable ? 'button' : undefined}
            tabIndex={isClickable ? 0 : undefined}
            onKeyDown={
                isClickable
                    ? (e) => {
                          if (e.key === 'Enter' || e.key === ' ') onClick?.();
                      }
                    : undefined
            }
            {...restProps}
        >
            {children}
        </div>
    );
};
