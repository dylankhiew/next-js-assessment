export namespace app {
  //#region LOGIN SCREEN
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

  interface RiskGraphLabel {
    title: string;
    color: string;
  }
  //#endregion LOGIN SCREEN

  //#region RISK GRAPH SCREEN
  interface LastPlacementCoordinates {
    x: number;
    y: number;
  }

  type RiskGraphContextType = {
    lastPlacementCoordinates: LastPlacementCoordinates;
    setLastPlacementCoordinates: (value: app.LastPlacementCoordinates) => void;
  };
  //#endregion RISK GRAPH SCREEN
}