export type FieldType =
  | 'text'
  | 'number'
  | 'textarea'
  | 'date'
  | 'daterange'
  | 'list'
  | 'radio'
  | 'checkbox';

export type FormatType = 'commaSeparated' | 'dashSeparated';

export type AccessTypes = 'view' | 'create' | 'edit' | 'delete';

export interface UserInfo {
  username: string;
  access: AccessTypes[];
}

export interface ColumnDef {
  fieldName: string;
  displayName: string;
  format?: FormatType;
}

export interface FormFieldConfig {
  fieldName: string;
  displayName: string;
  type: FieldType;
  description?: string;
  mandatory?: boolean;
  validation?: string;
  format?: FormatType;
  access?: AccessTypes[];
  options?: string[];
  value?: any;
  order?: number;
  beforeSubmitService?: (value: any) => void;
  afterSubmitService?: (value: any) => void;
}
