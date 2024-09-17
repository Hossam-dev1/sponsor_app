export interface TableColumn {
  key: string;
  subKey?: string;
  label: string; // Column label (e.g., 'Name', 'Email')
  type: 'index' | 'text' | 'date' | 'img' | 'multi-value' | 'array'; // Column type ('index' or 'text')
}
