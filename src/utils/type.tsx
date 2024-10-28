export interface TableHeaderType {
  accessor: string;
  title: string;
  minWidth: number;
  isSortable?: boolean;
  textAlign?: 'center' | 'left';
}

export interface TableProps {
  headers: TableHeaderType[];
  body: any[];
}
