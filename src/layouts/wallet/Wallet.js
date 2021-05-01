import React from 'react';

import { Switch } from 'react-native'

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  VisibleButtom,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceLabel,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardInfo,
  CardDetails,
  CardTitle,
  Img,
  AddButtom,
  AddLabel,
  UseTicketButtom,
  UseTicketLabel,
  UseTicketContainer
} from './Styles';

import imgCredit from '../../images/credit-card.png'

import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';

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

      <UseBalance>
        <UseBalanceLabel>Usar saldo ao pagar</UseBalanceLabel>
        <Switch />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>
          Forma de pagamento
        </PaymentMethodsTitle>
      </PaymentMethods>

      <Card>
        <CardBody>
          <CardDetails>
            <CardTitle>
              Cadastre seu cartão de crédito
            </CardTitle>
            <CardInfo>
              Cadastre seu cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay
            </CardInfo>
          </CardDetails>
          <Img source={imgCredit} resizeMode="contain" ></Img>
        </CardBody>
        <AddButtom>
          <AntDesign name="pluscircleo" size={30} color="#0DB060" />
          <AddLabel>
            Adicionar cartão de crédito
          </AddLabel>
        </AddButtom>
      </Card>
      <UseTicketContainer>
        <UseTicketButtom>
          <MaterialCommunityIcons name="ticket-outline" size={20} color="#0DB060" />
          <UseTicketLabel>Usar código promocional</UseTicketLabel>
        </UseTicketButtom>
      </UseTicketContainer>
    </Wrapper>
  );
}