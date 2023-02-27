import { app } from '@/typings';
import { useContext, useEffect, useState } from 'react';
import { IMAGES } from 'public/images';
import styled from 'styled-components';
import { Bitter } from 'next/font/google';

import RiskGraphContext from '@/context/riskGraphContext';

import Header from '../components/Header';
import RiskGraphMiddleArea from '../components/RiskGraphMiddleArea';
import RiskGraphLabel from '../components/RiskGraphLabel';
import { RISK_GRAPH_LABELS } from './constants/riskGraphConstants';

const bitterBold = Bitter({
  subsets: ['latin'],
  weight: '700',
});

const LabelArea = styled.div`
  height: 64px;
  padding-left: 4px;
  width: 100%;
  background-color: #D3D3D3;
  border-radius: 5px;
  border-color: black;
  border: 1px;
  border-width: 1px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FloatingBanner = styled.div`
  position: absolute;
  width: 500px;
  height: 50px;
  background-color: black;
  bottom: 12px;
  border-radius: 10px;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const FloatingBannerText = styled.h3`
  color: white;
`;

export default function RiskGraphScreen(): JSX.Element {
  const { lastPlacementCoordinates: { x, y } } = useContext<app.RiskGraphContextType>(RiskGraphContext);

  const [shouldShowBanner, setShouldShowBanner] = useState<boolean>(false);

  useEffect(() => {
    if (x !== 0 && y !== 0) {
      setShouldShowBanner(true);
      setTimeout(() => setShouldShowBanner(false), 5000);
    }
  }, [x, y]);

  const renderLabel = (item: app.RiskGraphLabel) => (
    <RiskGraphLabel {...item} />
  );

  const renderFloatingBanner = () => {
    const bannerTitle = `Item has been placed on coordinates X (${x.toFixed(2)}), Y (${y.toFixed(2)})`;
    if (shouldShowBanner) {
      return (
        <FloatingBanner>
          <FloatingBannerText className={bitterBold.className}>
            {bannerTitle}
          </FloatingBannerText>
        </FloatingBanner>
      );
    }
  };

  return (
    <>
      <Header />
      <LabelArea>
        {RISK_GRAPH_LABELS.map(renderLabel)}
      </LabelArea>
      <RiskGraphMiddleArea element={IMAGES.RISK_GRAPH_SCREEN.TABLE} />
      {renderFloatingBanner()}
    </>
  );
}