export namespace app {
  interface PasswordStrength {
    qualifiedEntries: number;
    isPasswordStrong: boolean;
  }

  type PasswordContextType = {
    passwordStrength: PasswordStrength;
    setPasswordStrength: (value: app.PasswordStrength) => void;
  };

  interface TrailingBarStyle {
    width: string;
    backgroundColor: string;
  }
}