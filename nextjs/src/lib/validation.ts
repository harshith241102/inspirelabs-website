/* Server-side form validation */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

export function validateFormData(
  data: Record<string, unknown>,
  requiredFields: string[]
): ValidationResult {
  const errors: Record<string, string> = {};

  for (const field of requiredFields) {
    const value = data[field];
    if (!value || (typeof value === "string" && value.trim() === "")) {
      errors[field] = `${field} is required`;
    }
  }

  // Email format check
  if (data.email && typeof data.email === "string") {
    if (!EMAIL_REGEX.test(data.email)) {
      errors.email = "Invalid email format";
    }
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

/* Honeypot check - returns true if submission is likely a bot */
export function isHoneypotFilled(
  data: Record<string, unknown>,
  honeypotField: string
): boolean {
  const value = data[honeypotField];
  return typeof value === "string" && value.trim() !== "";
}
