import classNames from 'classnames';
import { forwardRef, InputHTMLAttributes } from 'react';

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
  error?: string;
};

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, hint, error, className, type = 'text', ...props }, ref) => {
    return (
      <label className="block space-y-2">
        <span className="text-sm font-semibold text-slate-200">{label}</span>
        <input
          ref={ref}
          type={type}
          className={classNames(
            'w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none transition focus:border-autoflow-300 focus:ring-2 focus:ring-autoflow-500/40',
            error && 'border-red-500/60 focus:border-red-500 focus:ring-red-500/30',
            className
          )}
          {...props}
        />
        {hint && !error && <span className="block text-xs text-slate-400">{hint}</span>}
        {error && <span className="block text-xs text-red-400">{error}</span>}
      </label>
    );
  }
);

TextField.displayName = 'TextField';

export default TextField;
