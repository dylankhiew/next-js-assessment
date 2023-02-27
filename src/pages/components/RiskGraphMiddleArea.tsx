import { ReactNode } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const MiddleArea = styled.div`
  width: 100%;
  max-height: 100%;
  border-width: 1px;
  border-color: black;
`;

interface RiskGraphMiddleAreaProps {
  element: string | ReactNode;
}

export default function RiskGraphMiddleArea({
  element,
}: RiskGraphMiddleAreaProps): JSX.Element {
  const renderMiddleArea = () => {
    if (typeof element === 'string') {
      return (
        <Image
          src={element}
          alt={'Image for risk graph screen'}
          width={1000}
          height={500}
          style={{ width: "100%", height: "100%" }}
        />
      );
    }

    return element;
  }
  return (
    <MiddleArea>
      {renderMiddleArea()}
    </MiddleArea>
  )
}