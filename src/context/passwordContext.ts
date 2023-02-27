import { app } from '@/typings';
import React from 'react';

export const INITIAL_CONTEXT: app.PasswordContextType = {
  passwordStrength: {
    qualifiedEntries: 0,
    isPasswordStrong: false,
  },
  setPasswordStrength: () => {},
};

const PasswordContext = React.createContext<app.PasswordContextType>(INITIAL_CONTEXT);

export default PasswordContext;