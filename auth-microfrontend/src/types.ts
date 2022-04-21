export interface Field {
  label?: string;
  type?: string;
  id: string;
}

export interface FormData {
  heading: string;
  fields: Array<Field>;
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
}

export interface CallToActionData {
  heading: string;
  buttonLabel: string;
}

export interface Data {
  form: {
    [key: string]: string;
  };
}

export type Fields = Array<Field>;
