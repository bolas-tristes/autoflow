import { useMemo, useState } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable
} from '@tanstack/react-table';
import classNames from 'classnames';
import type { Invoice } from '../types';

interface InvoiceTableProps {
  data: Invoice[];
}

const statusColors: Record<Invoice['status'], string> = {
  Recibido: 'bg-emerald-500/15 text-emerald-300',
  'En Proceso': 'bg-amber-500/15 text-amber-300',
  Completado: 'bg-autoflow-500/15 text-autoflow-200',
  Error: 'bg-red-500/15 text-red-300'
};

const rpaColors: Record<Invoice['rpaStatus'], string> = {
  Pendiente: 'bg-slate-500/20 text-slate-200',
  Enviado: 'bg-amber-500/20 text-amber-200',
  Procesado: 'bg-emerald-500/15 text-emerald-300',
  Error: 'bg-red-500/15 text-red-300'
};

function InvoiceTable({ data }: InvoiceTableProps) {
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns = useMemo<ColumnDef<Invoice>[]>(
    () => [
      {
        header: 'Folio',
        accessorKey: 'id'
      },
      {
        header: 'Fecha',
        accessorKey: 'issueDate'
      },
      {
        header: 'Proveedor',
        accessorKey: 'supplier'
      },
      {
        header: 'RFC / ID',
        accessorKey: 'taxId'
      },
      {
        header: 'Tipo',
        accessorKey: 'documentType'
      },
      {
        header: 'Estatus SAT',
        accessorKey: 'status',
        cell: ({ getValue }) => (
          <span className={classNames('rounded-full px-2.5 py-1 text-xs font-semibold', statusColors[getValue() as Invoice['status']])}>
            {getValue<string>()}
          </span>
        )
      },
      {
        header: 'Subtotal',
        accessorKey: 'subtotal',
        cell: ({ getValue, row }) => (
          <span>
            {new Intl.NumberFormat('es-MX', {
              style: 'currency',
              currency: row.original.currency
            }).format(getValue<number>())}
          </span>
        )
      },
      {
        header: 'IVA',
        accessorKey: 'tax',
        cell: ({ getValue, row }) => (
          <span>
            {new Intl.NumberFormat('es-MX', {
              style: 'currency',
              currency: row.original.currency
            }).format(getValue<number>())}
          </span>
        )
      },
      {
        header: 'Total',
        accessorKey: 'total',
        cell: ({ getValue, row }) => (
          <span className="font-semibold text-slate-100">
            {new Intl.NumberFormat('es-MX', {
              style: 'currency',
              currency: row.original.currency
            }).format(getValue<number>())}
          </span>
        )
      },
      {
        header: 'RPA',
        accessorKey: 'rpaStatus',
        cell: ({ getValue }) => (
          <span className={classNames('rounded-full px-2.5 py-1 text-xs font-semibold', rpaColors[getValue() as Invoice['rpaStatus']])}>
            {getValue<string>()}
          </span>
        )
      }
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      sorting
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: 'auto'
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-semibold">Comprobantes recibidos</h3>
          <p className="text-sm text-slate-400">
            Filtra por proveedor, estado o folio para localizar los documentos que formarán parte del flujo RPA.
          </p>
        </div>
        <input
          value={globalFilter ?? ''}
          onChange={(event) => setGlobalFilter(event.target.value)}
          placeholder="Buscar por proveedor, RFC o folio..."
          className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-autoflow-400 focus:outline-none focus:ring-2 focus:ring-autoflow-400/30 md:w-72"
        />
      </div>
      <div className="overflow-hidden rounded-xl border border-white/10">
        <table className="min-w-full divide-y divide-white/10 text-sm">
          <thead className="bg-white/5">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="cursor-pointer select-none px-4 py-3 text-left font-semibold uppercase tracking-wide text-slate-300"
                  >
                    <div className="flex items-center gap-2">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {{
                        asc: '↑',
                        desc: '↓'
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-white/5">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="bg-slate-900/40 transition hover:bg-slate-800/60">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3 text-slate-200">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap gap-3 text-xs text-slate-400">
        <span className="rounded-full border border-white/10 px-3 py-1">
          Total documentos: <strong>{data.length}</strong>
        </span>
        <span className="rounded-full border border-white/10 px-3 py-1">
          Para RPA inmediato:{' '}
          <strong>{data.filter((invoice) => invoice.rpaStatus === 'Pendiente').length}</strong>
        </span>
      </div>
    </div>
  );
}

export default InvoiceTable;
