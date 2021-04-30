import React from 'react';

import { Wrapper, Header, HeaderContainer, Title, BalanceContainer, Value, Bold, VisibleButtom, Info, Actions, Action, ActionLabel } from './Styles';

import { Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

export default function Wallet() {
  return (
    <Wrapper>
      <Header colors={['#52E78C', '#1AB563']}>
        <HeaderContainer>
          <Title>Saldo PicPay</Title>
          <BalanceContainer>
            <Value>
              R$ <Bold>0,00</Bold>
            </Value>
            <VisibleButtom>
              <Feather name="eye" color="#fff" size={30} />
            </VisibleButtom>
          </BalanceContainer>
          <Info>
            Seu saldo está rendendo 100% do CDI
          </Info>
          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" color="#fff" size={35}/>
              <ActionLabel>Adicionar</ActionLabel>
            </Action>
            <Action>
              <FontAwesome name="bank" color="#fff" size={25}/>
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>
    </Wrapper>
  );
}