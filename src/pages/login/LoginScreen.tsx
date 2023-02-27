import PasswordContext from '@/context/passwordContext';
import { app } from '@/typings';
import { Bitter } from 'next/font/google';
import Image from 'next/image';

import { useRouter } from 'next/router';
import { IMAGES } from 'public/images';
import { useContext } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import LoginPasswordStrengthIndicator from '../components/LoginPasswordStrengthIndicator';
import TextInput from '../components/TexInput';

const bitter = Bitter({
  subsets: ['latin'],
  weight: '700',
});

const LoginScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
  height: 100vh;
`;

const LoginBackgroundImage = styled(Image)`
  filter: brightness(0.5);
  z-index: -1000;
`;

const LoginFormContainer = styled.div`
  flex: 1;
  display: flex;
  background-color: white;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  justify-items: center;
  align-content: center;
  flex-direction: column;
  max-width: 250px;
  min-height: 40%;
  padding-left: 48px;
  padding-right: 48px;
`;

const LoginLogoImage = styled(Image)`
  margin: 16px;
`;

const ButtonContainer = styled.div`
  width: 100%;
`;

const Button = styled.div`
  margin-top: 16px;
  flex: 1;
  height: 40px;
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 20px;
  justify-items: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  margin-bottom: 16px;
  text-decoration: none;
`;

const ButtonText = styled.p`
  font-size: 16px;
  color: white;
  text-transform: uppercase;
`;

export default function LoginScreen(): JSX.Element {
  const { passwordStrength } = useContext<app.PasswordContextType>(PasswordContext);
  const router = useRouter();

  const isButtonDisabled = passwordStrength.qualifiedEntries < 3;
  const buttonColor = isButtonDisabled ? 'gray' : 'tomato';

  const handleOnClick = () => {
    if (!isButtonDisabled) {
      router.push('/risk-graph');
    }
  };

  return (
    <LoginScreenContainer>
      <LoginBackgroundImage
        src={IMAGES.LOGIN_SCREEN.BACKGROUND}
        alt="Login background"
        fill
        objectFit="cover"
      />
      <Header />
      <LoginFormContainer>
        <LoginLogoImage
          src={IMAGES.LOGIN_SCREEN.LOGO}
          alt="GIFT.ed Logo"
          height={50}
          width={50}
        />
        <h2 className={bitter.className}>
          Create your account
        </h2>
        <TextInput
          title="Full Name"
          inputType="text"
          value="John Smith"
          disabled
        />
        <TextInput
          title="E-mail"
          inputType="email"
          value="johnsmith@gift.ed"
          disabled
        />
        <TextInput
          title="Password"
          inputType="password"
        />
        <LoginPasswordStrengthIndicator />
        <ButtonContainer>
          <Button
            onClick={handleOnClick}
            style={{ backgroundColor: buttonColor }}
          >
            <ButtonText className={bitter.className}>
              Continue
            </ButtonText>
          </Button>
        </ButtonContainer>
      </LoginFormContainer>
    </LoginScreenContainer>
  );
}