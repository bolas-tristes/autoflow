import classNames from 'classnames';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const sizeClasses: Record<NonNullable<LogoProps['size']>, string> = {
  sm: 'h-9',
  md: 'h-12',
  lg: 'h-16'
};

function Logo({ size = 'md', className }: LogoProps) {
  return (
    <div className={classNames('flex items-center gap-3 text-slate-100', className)}>
      <img
        src="/logo.svg"
        alt="AutoFlow"
        className={classNames('w-auto drop-shadow-lg', sizeClasses[size])}
      />
      <div className="leading-tight">
        <p className="text-lg font-semibold tracking-wide">AutoFlow</p>
        <p className="text-xs uppercase tracking-[0.35em] text-autoflow-200">Automation Suite</p>
      </div>
    </div>
  );
}

export default Logo;
