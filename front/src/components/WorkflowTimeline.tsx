import { onboardingWorkflow } from '../data/invoices';

function WorkflowTimeline() {
  return (
    <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-black/30">
      <h3 className="text-lg font-semibold">Onboarding asistido</h3>
      <p className="mt-1 text-sm text-slate-400">
        Avanza paso a paso para dejar la plataforma lista antes de instruir al robot RPA.
      </p>
      <ol className="mt-5 space-y-4">
        {onboardingWorkflow.map((step, index) => (
          <li key={step.id} className="flex gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-autoflow-400/40 bg-autoflow-500/10 text-sm font-semibold">
              {index + 1}
            </div>
            <div>
              <p className="font-medium text-slate-100">{step.label}</p>
              <p className="text-sm text-slate-400">{step.description}</p>
              <span className="mt-2 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-autoflow-200">
                {step.completed ? 'Completado' : 'Pendiente'}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default WorkflowTimeline;
