import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.View`
    background: #000;
    flex: 1;
`;

export const Header = styled(LinearGradient)`
    height: 250px;
`;

export const HeaderContainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`;

export const BalanceContainer = styled.View`
    margin: 10px 0;
    flex-direction: row;
    align-items: center;
`;

export const Value = styled.Text`
    color: #fff;
    font-size: 38px;
    font-weight: 200;
`;

export const Bold = styled.Text`
    color: #fff;
    font-weight: bold;
`;

export const VisibleButtom = styled.TouchableOpacity`
    margin-left: 10px;
    background: #52E78C;
`;

export const Info = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
`;

export const Actions = styled.View`
    margin-top: 45px;
    flex-direction: row;
    align-items: center;
`;

export const Action = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 170px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 25px;
    margin: 0 10px;
`;

export const ActionLabel = styled.Text`
    color: #fff;
    font-size: 20px;
    margin-left: 10px;
`;

export const UseBalance = styled.View`
    flex-direction: row;
    background: #1C1C1E;
    height: 60px;
    padding: 0 16px;
    align-items: center;
    justify-content: space-between;
`;

export const UseBalanceLabel = styled.Text`
    color: #fff;
    font-size: 20px;
    margin-left: 10px;
`;

export const PaymentMethods = styled.View`
    padding: 0 16px;
    margin-top: 25px;
`;

export const PaymentMethodsTitle = styled.Text`
    color: #8E8E93;
    text-transform: uppercase;
    font-size: 14px;
    margin-left: 10px;
`;

export const Card = styled.View`
    background: #1E232A;
    padding: 15px;
    border-radius: 8px;
    margin-top: 10px;
`;

export const CardBody = styled.View`
    flex-direction: row;
`;

export const CardDetails = styled.View`
    flex: 1;
    margin-right: 20px;
`;

export const CardTitle = styled.Text`
    color: #fff;
    font-size: 18px;
    margin-left: 10px;
`;

export const CardInfo = styled.Text`
    color: rgba(255, 255, 255, 0.6);
    margin-top: 10px;
    font-size: 14px;
    margin-left: 10px;
`;

export const Img = styled.Image`
    width: 70px;
`;

export const AddButtom = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-top: 25px;
`;

export const AddLabel = styled.Text`
    color: #0DB060;
    font-size: 18px;
    font-weight: bold;
    margin-left: 15px;
`;

export const UseTicketContainer = styled.View`
    align-items: center;
`;

export const UseTicketLabel = styled.Text`
    color: #0DB060;
    text-decoration-line: underline;
    font-size: 16px;
    font-weight: bold;
    margin-left: 15px;
`;

export const UseTicketButtom = styled.TouchableOpacity`
    flex-direction: row;
    margin-top: 25px;
`;
