import { Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Logo from './Logo';

function DashboardLayout() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-4">
            <Logo size="sm" />
            <div>
              <p className="text-sm uppercase tracking-widest text-autoflow-200">Panel de control</p>
              <p className="text-base font-medium">Organización: {user?.organization}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium">{user?.name}</p>
              <p className="text-xs text-slate-400">{user?.email}</p>
            </div>
            <button
              onClick={logout}
              className="rounded-md border border-white/20 px-3 py-1.5 text-sm font-medium text-autoflow-100 transition hover:border-autoflow-400 hover:text-autoflow-200"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
