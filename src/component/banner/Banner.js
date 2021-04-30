import React from 'react';

import { Container, Details, Img, Title, Description } from './Styles';

import img from '../../images/13.png'


export default function Banner() {
    return (
        <Container>
            <Details>
                <Title>Cobre um amigo</Title>
                <Description>Mantenha suas parcerias em dia, use o PicPay para fazer uma cobrança.</Description>
            </Details>
            <Img source={img} ></Img>
        </Container>
    );
}