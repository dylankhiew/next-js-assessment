import { app } from '@/typings';
import React from 'react';

export const INITIAL_RISK_GRAPH_CONTEXT: app.RiskGraphContextType = {
  lastPlacementCoordinates: {
    x: 0,
    y: 0,
  },
  setLastPlacementCoordinates: () => {},
};

const RiskGraphContext = React.createContext<app.RiskGraphContextType>(INITIAL_RISK_GRAPH_CONTEXT);

export default RiskGraphContext;