import InvoiceTable from '../components/InvoiceTable';
import RpaStatusCard from '../components/RpaStatusCard';
import UploadPanel from '../components/UploadPanel';
import WorkflowTimeline from '../components/WorkflowTimeline';
import { sampleInvoices } from '../data/invoices';

function DashboardPage() {
  const totalAmount = sampleInvoices.reduce((acc, invoice) => acc + invoice.total, 0);
  const pending = sampleInvoices.filter((invoice) => invoice.status === 'Recibido').length;
  const errors = sampleInvoices.filter((invoice) => invoice.status === 'Error').length;

  return (
    <div className="space-y-8">
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/30">
          <p className="text-xs uppercase tracking-wide text-slate-400">Total facturado</p>
          <p className="mt-3 text-3xl font-semibold text-slate-100">
            {new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(totalAmount)}
          </p>
          <p className="mt-2 text-sm text-slate-500">Incluye comprobantes en MXN y conversión a tasa FIX para USD.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/30">
          <p className="text-xs uppercase tracking-wide text-slate-400">Pendientes de validar</p>
          <p className="mt-3 text-3xl font-semibold text-autoflow-200">{pending}</p>
          <p className="mt-2 text-sm text-slate-500">Documentos listos para revisión y envío al robot.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/30">
          <p className="text-xs uppercase tracking-wide text-slate-400">Errores detectados</p>
          <p className="mt-3 text-3xl font-semibold text-red-300">{errors}</p>
          <p className="mt-2 text-sm text-slate-500">Requieren intervención manual antes de continuar.</p>
        </div>
      </section>

      <UploadPanel />

      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <InvoiceTable data={sampleInvoices} />
        <div className="space-y-6">
          <RpaStatusCard />
          <WorkflowTimeline />
        </div>
      </section>
    </div>
  );
}

export default DashboardPage;
