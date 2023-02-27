import { Bitter } from 'next/font/google';
import { HTMLInputTypeAttribute, useContext, useState } from 'react';
import styled from 'styled-components';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { app } from '@/typings';
import PasswordContext from '@/context/passwordContext';
import { checkPasswordStrength } from '@/utils/loginUtils';

const bitter = Bitter({
  subsets: ['latin'],
  weight: '700',
});

type InputValue = string | number | readonly string[] | undefined;

interface TextInputProps {
  inputType: HTMLInputTypeAttribute;
  title: string;
  value?: InputValue;
  disabled?: boolean;
}

const TitleContainer = styled.div`
  width: 100%;
`;

const Title = styled.h3`
  font-size: 10px;
  text-align: left;
`;

const InputContainer = styled.div`
  width: 100%;
  border-width: 0.5;
  flex-direction: row;
  display: flex;
  border-color: #808080;
  border-radius: 1px;
  border-style: solid;
`;

const Input = styled.input`
  border: 0;
  height: 30px;
  padding-left: 8px;
  padding-right: 8px;
  width: 80%;
`;

const IconContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  align-content: center;
`

export default function TextInput({
  inputType,
  title,
  value,
  disabled,
}: TextInputProps): JSX.Element {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const { passwordStrength, setPasswordStrength } = useContext<app.PasswordContextType>(PasswordContext);

  const renderEyeIcon = () => {
    if (inputType === 'password') {
      return (
        <IconContainer onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
          {isPasswordVisible ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
        </IconContainer>
      );
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (inputType === 'password') {
      const passwordStrength = checkPasswordStrength(event.target.value);
      console.log('got update', passwordStrength);
      setPasswordStrength(passwordStrength);
    }
  };

  return (
    <>
      <TitleContainer>
        <Title className={bitter.className}>{title}</Title>
      </TitleContainer>
      <InputContainer>
        <Input
          type={isPasswordVisible ? 'text' : inputType}
          disabled={disabled}
          value={value}
          onChange={handleChange}
        />
        {renderEyeIcon()}
      </InputContainer>
    </>
  )
}