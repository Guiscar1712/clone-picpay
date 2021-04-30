import React from 'react';

import { 
    Header,
    Container,
    Title,
    Card,
    CardHeader,
    Avatar,
    Description,
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Value,
    Separator,
    Date,
    Actions,
    Option,
    OptionLabel 
} from './Styles'

import avatar from '../../images/avatar.png'

import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

export default function Activies() {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>
            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@guadalupe.delaila</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Guilherme Scaramella</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 1500,00</Value>
                        <Separator/>
                        <Feather name="lock" color="#fff" size={14}></Feather>
                        <Date>há uma semana</Date>
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#fff" />
                            <OptionLabel>2</OptionLabel>
                        </Option>
                        <Option>
                            <AntDesign name="hearto" size={14} color="#fff" />
                            <OptionLabel>1</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}