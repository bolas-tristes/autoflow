import type { Invoice, WorkflowStep } from '../types';

export const sampleInvoices: Invoice[] = [
  {
    id: 'INV-0001',
    issueDate: '2024-09-14',
    supplier: 'Factura Express SA',
    taxId: 'FE9900112233',
    documentType: 'Factura',
    status: 'Recibido',
    currency: 'MXN',
    subtotal: 12450,
    tax: 1992,
    total: 14442,
    rpaStatus: 'Pendiente'
  },
  {
    id: 'INV-0002',
    issueDate: '2024-09-16',
    supplier: 'Servicios Contables MX',
    taxId: 'SCM88001122',
    documentType: 'Factura',
    status: 'En Proceso',
    currency: 'MXN',
    subtotal: 3500,
    tax: 560,
    total: 4060,
    rpaStatus: 'Enviado'
  },
  {
    id: 'INV-0003',
    issueDate: '2024-09-20',
    supplier: 'Tecnologías Automatizadas',
    taxId: 'TA7600332211',
    documentType: 'Recibo de Honorarios',
    status: 'Completado',
    currency: 'USD',
    subtotal: 820,
    tax: 0,
    total: 820,
    rpaStatus: 'Procesado'
  },
  {
    id: 'INV-0004',
    issueDate: '2024-09-22',
    supplier: 'Suministros Industriales del Norte',
    taxId: 'SIN9911223344',
    documentType: 'Factura',
    status: 'Error',
    currency: 'MXN',
    subtotal: 9800,
    tax: 1568,
    total: 11368,
    rpaStatus: 'Error'
  }
];

export const onboardingWorkflow: WorkflowStep[] = [
  {
    id: 'step-1',
    label: 'Crear organización',
    description: 'Ingresa los datos fiscales de Automatat y configura el RFC.',
    completed: true
  },
  {
    id: 'step-2',
    label: 'Conectar Factura Express',
    description: 'Agrega la API Key para sincronizar los comprobantes electrónicos.',
    completed: false
  },
  {
    id: 'step-3',
    label: 'Configurar cola RPA',
    description: 'Define el robot y el canal donde recibirá las instrucciones.',
    completed: false
  }
];
