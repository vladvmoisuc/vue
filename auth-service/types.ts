export interface User {
  email: string;
  name?: string;
  password: string;
  active: boolean;
  createdAt: number;
  activationSecret: string;
}

export interface Email {
  from?: string;
  to: string;
  subject: string;
  html: string;
}
