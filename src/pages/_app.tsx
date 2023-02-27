import PasswordContext, { INITIAL_CONTEXT } from '@/context/passwordContext'
import { app } from '@/typings';
import type { AppProps } from 'next/app'
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [passwordStrength, setPasswordStrength] = useState<app.PasswordStrength>(INITIAL_CONTEXT.passwordStrength);

  return (
    <PasswordContext.Provider value={{ passwordStrength, setPasswordStrength }}>
      <Component {...pageProps} />
    </PasswordContext.Provider>
  )
}
