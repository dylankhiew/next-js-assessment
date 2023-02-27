import PasswordContext, { INITIAL_PASSWORD_CONTEXT } from '@/context/passwordContext'
import RiskGraphContext, { INITIAL_RISK_GRAPH_CONTEXT } from '@/context/riskGraphContext'

import { app } from '@/typings';
import type { AppProps } from 'next/app'
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [passwordStrength, setPasswordStrength] = useState<app.PasswordStrength>(
    INITIAL_PASSWORD_CONTEXT.passwordStrength,
  );
  const [lastPlacementCoordinates, setLastPlacementCoordinates] = useState<app.LastPlacementCoordinates>(
    INITIAL_RISK_GRAPH_CONTEXT.lastPlacementCoordinates,
  );

  return (
    <PasswordContext.Provider value={{ passwordStrength, setPasswordStrength }}>
      <RiskGraphContext.Provider value={{ lastPlacementCoordinates, setLastPlacementCoordinates }}>
        <Component {...pageProps} />
      </RiskGraphContext.Provider>
    </PasswordContext.Provider>
  )
}
