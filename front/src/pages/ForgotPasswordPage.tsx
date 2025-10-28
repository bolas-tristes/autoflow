import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '../components/TextField';

function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSent(true);
    setLoading(false);
  }

  return (
    <section className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-semibold">Recupera el acceso</h2>
        <p className="text-sm text-slate-400">
          Ingresa tu correo y enviaremos un enlace temporal para restablecer tu contraseña.
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
        <button
          type="submit"
          className="w-full rounded-md bg-autoflow-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-autoflow-500/30 transition hover:bg-autoflow-400 disabled:cursor-not-allowed disabled:bg-autoflow-500/60"
          disabled={loading}
        >
          {loading ? 'Enviando enlace...' : 'Enviar enlace de recuperación'}
        </button>
        {sent && (
          <p className="rounded-md border border-autoflow-500/40 bg-autoflow-500/10 px-3 py-2 text-sm text-autoflow-100">
            Hemos enviado el enlace a tu correo. Revisa la bandeja principal y SPAM.
          </p>
        )}
      </form>
      <p className="text-center text-sm text-slate-400">
        ¿Recordaste tu contraseña?{' '}
        <Link className="text-autoflow-300 hover:text-autoflow-200" to="/login">
          Volver al inicio de sesión
        </Link>
      </p>
    </section>
  );
}

export default ForgotPasswordPage;
