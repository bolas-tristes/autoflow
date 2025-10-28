function UploadPanel() {
  return (
    <section className="grid gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-black/30 md:grid-cols-2">
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Ingesta de comprobantes</h3>
        <p className="text-sm text-slate-400">
          Sube un archivo XLSX o conecta tu API de Factura Express. El sistema valida columnas, normaliza la información y la guarda en tu repositorio fiscal.
        </p>
        <div className="flex flex-wrap gap-3 text-xs text-slate-400">
          <span className="rounded-full border border-autoflow-400/40 px-3 py-1 text-autoflow-200">
            Columnas esperadas: Folio, RFC, Tipo, Fecha, Total
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1">
            Última sincronización API: hace 6 minutos
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <button className="rounded-md border border-dashed border-autoflow-400/60 bg-autoflow-500/10 px-4 py-3 text-sm font-medium text-autoflow-100 transition hover:bg-autoflow-500/15">
          Cargar Excel desde tu equipo
        </button>
        <button className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10">
          Conectar con Factura Express
        </button>
        <p className="text-xs text-slate-500">
          Una vez procesado el archivo, podrás revisar los comprobantes antes de enviarlos al robot RPA.
        </p>
      </div>
    </section>
  );
}

export default UploadPanel;
