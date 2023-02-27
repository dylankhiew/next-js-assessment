import { app } from "@/typings";
import { checkPasswordStrength, generateTrailingBarStyle } from "../src/utils/loginUtils";

describe('Util :: loginUtils', () => {
  describe('generateTrailingBarStyle', () => {
    it('should return low strength when theres only 1 condition is fufilled', () => {
      const lowStrengthResult: app.TrailingBarStyle = {
        width: '33%',
        backgroundColor: 'red',
      };
      expect(generateTrailingBarStyle(1)).toEqual(lowStrengthResult);
    });
  
    it('should return medium strength when only 2 condition are fufilled', () => {
      const mediumStrengthResult: app.TrailingBarStyle = {
        width: '66%',
        backgroundColor: 'orange',
      };
      expect(generateTrailingBarStyle(2)).toEqual(mediumStrengthResult);
    });

    it('should return high strength when all 3 conditions are fufilled', () => {
      const mediumStrengthResult: app.TrailingBarStyle = {
        width: '100%',
        backgroundColor: 'green',
      };
      expect(generateTrailingBarStyle(3)).toEqual(mediumStrengthResult);
    });
  });

  describe('checkPasswordStrength', () => {
    it('should return false and 1 qualifiedEntries when user has at least 8 characters', () => {
      const password = 'testtest';
      const weakStrengthPasswordResult: app.PasswordStrength = {
        qualifiedEntries: 1,
        isPasswordStrong: false,
      };
      expect(checkPasswordStrength(password)).toEqual(weakStrengthPasswordResult);
    });
  
    it('should return false and 2 qualifiedEntries when user has uppercase/lowercase and 8 characters', () => {
      const password = 'Testtest';
      const mediumStrengthPasswordResult: app.PasswordStrength = {
        qualifiedEntries: 2,
        isPasswordStrong: false,
      };
      expect(checkPasswordStrength(password)).toEqual(mediumStrengthPasswordResult);
    });

    it('should return true and 3 qualifiedEntries when user has uppercase/lowercase, 8 characters, and symbol', () => {
      const password = 'Testtest@';
      const strongStrengthPasswordResult: app.PasswordStrength = {
        qualifiedEntries: 3,
        isPasswordStrong: true,
      };
      expect(checkPasswordStrength(password)).toEqual(strongStrengthPasswordResult);
    });

    it('should return false and 0 qualifiedEntries when user did not fufill any requirements', () => {
      const password = 'test';
      const noStrengthPasswordResult: app.PasswordStrength = {
        qualifiedEntries: 0,
        isPasswordStrong: false,
      };
      expect(checkPasswordStrength(password)).toEqual(noStrengthPasswordResult);
    });
  });
});