import { sampleInvoices } from '../data/invoices';

function RpaStatusCard() {
  const totals = sampleInvoices.reduce(
    (acc, invoice) => {
      acc[invoice.rpaStatus] = (acc[invoice.rpaStatus] ?? 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-autoflow-900/70 via-slate-900/70 to-slate-950 p-6 shadow-xl shadow-black/40">
      <h3 className="text-lg font-semibold">Estatus RPA</h3>
      <p className="mt-1 text-sm text-autoflow-100/80">Visualiza el avance del robot y gestiona reintentos cuando sea necesario.</p>
      <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
        {Object.entries(totals).map(([status, count]) => (
          <div key={status} className="rounded-xl border border-white/5 bg-white/5 px-4 py-3">
            <dt className="text-xs uppercase tracking-wide text-slate-400">{status}</dt>
            <dd className="mt-2 text-2xl font-semibold text-slate-100">{count}</dd>
          </div>
        ))}
      </dl>
      <button className="mt-6 w-full rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20">
        Ver bitácora de ejecuciones
      </button>
    </section>
  );
}

export default RpaStatusCard;
