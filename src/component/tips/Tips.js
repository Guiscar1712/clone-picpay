import React from 'react';

import { Container, Option, Title, Img } from './Styles';

import img1 from '../../images/08.png'
import img2 from '../../images/09.png'
import img3 from '../../images/10.png'
import img4 from '../../images/11.png'
import img5 from '../../images/12.png'

const items = [
    {
        key: String(Math.random()),
        img: img1,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#172c4a'
    },
    {
        key: String(Math.random()),
        img: img2,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#6a0159'
    },
    {
        key: String(Math.random()),
        img: img3,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#4139c8'
    },
    {
        key: String(Math.random()),
        img: img4,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#00ab4b'
    },
    {
        key: String(Math.random()),
        img: img5,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#ba2f76'
    }
];

export default function Tips() {
    return (
        <Container>
            {items.map((item) => (
            <Option key={item.key} bgColor={item.bgColor}>
                <Title>{item.title}</Title>
                <Img source={item.img} />
            </Option>
            ))}
        </Container>
    );
}