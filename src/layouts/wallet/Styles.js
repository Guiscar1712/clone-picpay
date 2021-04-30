import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.View`
    background: #000;
    flex: 1;
`;

export const Header = styled(LinearGradient)`
    height: 300px;
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
