export type FormStatus = 'success' | 'error' | '';

export type ContactFormState = {
  status: FormStatus;
  message: string;
};

export type ButtonVariant = 'normal' | 'arrow' | 'arrow_white' | 'outline' | 'outline_black' | 'filled_black';
