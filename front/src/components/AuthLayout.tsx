import { Outlet } from 'react-router-dom';
import Logo from './Logo';

function AuthLayout() {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <aside className="relative hidden w-1/2 items-center justify-center overflow-hidden bg-gradient-to-br from-autoflow-900 via-autoflow-700 to-autoflow-500 p-16 text-slate-50 lg:flex">
        <div className="space-y-6 text-left">
          <Logo size="lg" />
          <h1 className="text-4xl font-semibold leading-snug">
            Automatiza la recepción y control de tus comprobantes fiscales.
          </h1>
          <p className="max-w-xl text-lg text-autoflow-50/80">
            AutoFlow conecta tu cuenta de Factura Express, organiza los comprobantes y alimenta el robot RPA para que el proceso sea 100% automático.
          </p>
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_60%)]" />
      </aside>
      <main className="flex w-full flex-col items-center justify-center px-6 py-12 lg:w-1/2">
        <div className="w-full max-w-md space-y-10">
          <Logo className="mx-auto lg:hidden" />
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AuthLayout;
