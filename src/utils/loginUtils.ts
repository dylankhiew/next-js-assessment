import { app } from "@/typings";

// Used to dynamically generate the trailing bar style depending on the fufillment criteria
export const generateTrailingBarStyle = (passwordFufillment: number): app.TrailingBarStyle | undefined => {
  if (passwordFufillment >= 3) {
    return {
      width: '100%',
      backgroundColor: 'green',
    }
  }

  if (passwordFufillment >= 2) {
    return {
      width: '66%',
      backgroundColor: 'orange',
    }
  }

  if (passwordFufillment >= 1) {
    return {
      width: '33%',
      backgroundColor: 'red',
    }
  }

  return undefined;
};

// Used to check the password strength to update the PasswordContext
export const checkPasswordStrength = (password: string): app.PasswordStrength => {
  let hasEnoughLength = false;
  let hasUppercaseAndLowercase = false;
  let hasSymbol = false;
  let qualifiedEntries = 0;

  // Check length
  if (password.length >= 8) {
    hasEnoughLength = true;
    qualifiedEntries++;
  }

  // Check if uppercase and lowercase are present
  if (/[A-Z]/.test(password)) {
    hasUppercaseAndLowercase = true;
    qualifiedEntries++;
  }

  // Check if symbol is present
  if (/[\d\W]/.test(password)) {
    hasSymbol = true;
    qualifiedEntries++;
  }

  return {
    qualifiedEntries,
    isPasswordStrong: hasEnoughLength && hasUppercaseAndLowercase && hasSymbol,
  };
};