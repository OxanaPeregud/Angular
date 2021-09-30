export class Feedback {
  firstname: string | undefined;
  lastname: string | undefined;
  telNumber: number | undefined;
  email: string | undefined;
  agree: boolean | undefined;
  contactType: string | undefined;
  message: string | undefined;
}

export const ContactType = ['None', 'Tel', 'Email'];
