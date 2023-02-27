import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import { Bitter } from 'next/font/google';
import styled from 'styled-components';
import { useContext } from 'react';
import { app } from '@/typings';
import RiskGraphContext from '@/context/riskGraphContext';

const bitter = Bitter({
  subsets: ['latin'],
  weight: '700',
});

interface RiskGraphLabelProps {
  title: string;
  color: string;
}

const Label = styled.div`
  height: 50px;
  width: 100px;
  border-radius: 5px;
  justify-content: center;
  display: flex;
  align-items: center;
  color: white;
  margin-left: 2px;
  margin-right: 2px;
`;


export default function RiskGraphLabel({
  title,
  color,
}: RiskGraphLabelProps): JSX.Element {
  const { setLastPlacementCoordinates } = useContext<app.RiskGraphContextType>(RiskGraphContext);

  const handleOnStop = (_e: DraggableEvent, data: DraggableData) => {
    const lastPlacementCoordinates: app.LastPlacementCoordinates = {
      x: data.x,
      y: data.y,
    };
    setLastPlacementCoordinates(lastPlacementCoordinates);
  };

  return (
    <Draggable onStop={handleOnStop}>
      <Label style={{ backgroundColor: color }}>
        <h3 className={bitter.className}>
          {title}
        </h3>
      </Label>
    </Draggable>
  )
}