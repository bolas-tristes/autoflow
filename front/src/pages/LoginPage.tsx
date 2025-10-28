import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '../components/TextField';
import { useAuth } from '../context/AuthContext';

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = (form.get('email') as string) ?? '';
    const password = (form.get('password') as string) ?? '';

    try {
      setLoading(true);
      setError(null);
      await login(email, password);
      navigate('/', { replace: true });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-semibold">¡Bienvenido de nuevo!</h2>
        <p className="text-sm text-slate-400">
          Ingresa con tus credenciales para acceder al tablero y continuar con el flujo de automatización.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <TextField
          name="email"
          type="email"
          label="Correo electrónico"
          placeholder="tucorreo@automat.com"
          autoComplete="email"
          required
        />
        <TextField
          name="password"
          type="password"
          label="Contraseña"
          placeholder="••••••••"
          autoComplete="current-password"
          required
        />
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button
          type="submit"
          className="w-full rounded-md bg-autoflow-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-autoflow-500/30 transition hover:bg-autoflow-400 disabled:cursor-not-allowed disabled:bg-autoflow-500/60"
          disabled={loading}
        >
          {loading ? 'Iniciando sesión...' : 'Ingresar'}
        </button>
      </form>
      <div className="flex justify-between text-sm text-slate-400">
        <Link className="text-autoflow-300 hover:text-autoflow-200" to="/forgot-password">
          ¿Olvidaste tu contraseña?
        </Link>
        <Link className="text-autoflow-300 hover:text-autoflow-200" to="/register">
          Crear cuenta
        </Link>
      </div>
    </section>
  );
}

export default LoginPage;
