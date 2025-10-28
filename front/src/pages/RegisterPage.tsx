import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '../components/TextField';
import { useAuth } from '../context/AuthContext';

function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = (form.get('name') as string) ?? '';
    const email = (form.get('email') as string) ?? '';
    const password = (form.get('password') as string) ?? '';

    try {
      setLoading(true);
      setError(null);
      await register({ name, email, password });
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
        <h2 className="text-3xl font-semibold">Crea tu cuenta AutoFlow</h2>
        <p className="text-sm text-slate-400">
          Configura tu organización y comienza el onboarding en menos de 5 minutos.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <TextField
          name="name"
          label="Nombre completo"
          placeholder="Tu nombre"
          autoComplete="name"
          required
        />
        <TextField
          name="email"
          type="email"
          label="Correo corporativo"
          placeholder="tu.nombre@automat.com"
          autoComplete="email"
          required
        />
        <TextField
          name="password"
          type="password"
          label="Contraseña"
          placeholder="••••••••"
          autoComplete="new-password"
          minLength={8}
          required
          hint="Debe contener al menos 8 caracteres."
        />
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button
          type="submit"
          className="w-full rounded-md bg-autoflow-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-autoflow-500/30 transition hover:bg-autoflow-400 disabled:cursor-not-allowed disabled:bg-autoflow-500/60"
          disabled={loading}
        >
          {loading ? 'Creando cuenta...' : 'Crear cuenta'}
        </button>
      </form>
      <p className="text-center text-sm text-slate-400">
        ¿Ya tienes una cuenta?{' '}
        <Link className="text-autoflow-300 hover:text-autoflow-200" to="/login">
          Inicia sesión
        </Link>
      </p>
    </section>
  );
}

export default RegisterPage;
