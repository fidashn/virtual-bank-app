import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import {
ServicesContainer,
ServicesH1,
ServicesWrapper,
ServicesCard,
ServicesIcon,
ServicesH2,
ServicesP
} from './ServicesElements'

const services = () => {
  return (
    <ServicesContainer>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
        <ServicesIcon src={Icon1}/>
        <ServicesH2>Reduce Expenses</ServicesH2>
        <ServicesP>We help reduce your fees and increase your overall revenue</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
        <ServicesH2>Virtual offices</ServicesH2>
        <ServicesP>You can access our online platform anywhere in the world.</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon3}/>
        <ServicesH2>Premium Benefits</ServicesH2>
        <ServicesP>Get 5% cash back on our special membership card</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default services;
