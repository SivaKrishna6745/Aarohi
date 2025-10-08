import { cn } from '@/lib/cn';
import { Loader2 } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
    loading?: boolean;
    children: React.ReactNode;
    className?: string;
    fullWidth?: boolean;
}

const variantClasses: Record<Variant, string> = {
    primary: 'bg-aarohi-magenta text-white hover:bg-aarohi-magenta/70',
    secondary: 'bg-aarohi-teal text-white hover:bg-aarohi-teal/80',
    ghost: 'bg-transparent text-aarohi-magenta hover:bg-aarohi-magenta/30',
    outline:
        'border-2 border-aarohi-magenta/80 text-aarohi-magenta bg-transparent hover:bg-aarohi-magenta/80 hover:text-white',
    destructive: 'bg-red-500/80 text-white hover:bg-red-700/80',
};

const sizeClasses: Record<Size, string> = {
    sm: 'px-4 py-2 text-md rounded-sm',
    md: 'px-6 py-3 text-lg rounded-md',
    lg: 'px-8 py-4 text-xl rounded-lg',
};

export const Button = ({
    variant = 'primary',
    size = 'md',
    loading = false,
    children = <></>,
    className = '',
    fullWidth = false,
    ...restProps
}: ButtonProps) => {
    return (
        <button
            type="button"
            className={cn(
                variantClasses[variant],
                sizeClasses[size],
                'outline-none cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed',
                className,
                fullWidth && 'w-full'
            )}
            disabled={loading}
        >
            {loading ? <Loader2 /> : children}
        </button>
    );
};
