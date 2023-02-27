import PasswordContext from '@/context/passwordContext';
import { app } from '@/typings';
import { generateTrailingBarStyle } from '@/utils/loginUtils';
import { Bitter } from 'next/font/google';
import { useContext } from 'react';
import styled from 'styled-components';

const bitter = Bitter({
  subsets: ['latin'],
  weight: '400',
});

const bitterBold = Bitter({
  subsets: ['latin'],
  weight: '700',
});

const MainContainer = styled.div`
  width: 100%;
`;

const PointText = styled.div`
  font-size: 10px;
`;

const PointTitle = styled.h5`
  margin-bottom: 8px;
`;

const StrengthBar = styled.div`
  width: 100%;
  height: 6px;
  background-color: lightgray;
  border-radius: 4px;
  margin-bottom: 8px;
`;

const TrailingBar = styled.div`
  height: 6px;
  border-radius: 4px;
`;

export default function LoginPasswordStrengthIndicator(): JSX.Element {
  const { passwordStrength } = useContext<app.PasswordContextType>(PasswordContext);
  const passwordFufillment = passwordStrength.qualifiedEntries;

  const customStyle = generateTrailingBarStyle(passwordFufillment);

  return (
    <MainContainer>
      <PointTitle className={bitterBold.className}>
        Password strength:
      </PointTitle>
      <StrengthBar>
        <TrailingBar style={customStyle} />
      </StrengthBar>
      <PointText className={bitter.className}>
        • Minimum 8 characters
      </PointText>
      <PointText className={bitter.className}>
        • Mix of uppercase and lowercase letter
      </PointText>
      <PointText className={bitter.className}>
        • Include one or more number or symbol
      </PointText>
    </MainContainer>
  );
}