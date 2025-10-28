export interface User {
  id: string;
  name: string;
  email: string;
  organization: string;
}

export interface Invoice {
  id: string;
  issueDate: string;
  supplier: string;
  taxId: string;
  documentType: string;
  status: 'Recibido' | 'En Proceso' | 'Completado' | 'Error';
  currency: string;
  subtotal: number;
  tax: number;
  total: number;
  rpaStatus: 'Pendiente' | 'Enviado' | 'Procesado' | 'Error';
}

export interface WorkflowStep {
  id: string;
  label: string;
  description: string;
  completed: boolean;
}
