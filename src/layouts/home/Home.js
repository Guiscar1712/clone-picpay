import React from 'react';
import { Wrapper, Header, Balance, BalanceTitle, BalanceContainer, Container } from './Styles';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import Suggestion from '../../component/suggestions/Suggestion'
import Activies from '../../component/activies/Activies'
import Tips from '../../component/tips/Tips'
import Banner from '../../component/banner/Banner'

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />
          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>
          <AntDesign name="gift" size={30} color="#10c86e" />
          {/* <MaterialCommunityIcons name="brightness-percent" size={30} color="#10c86e" /> */}
        </Header>
        <Suggestion />
        <Activies />
        <Tips/>
        <Banner/>
      </Container>
    </Wrapper>
  );
}