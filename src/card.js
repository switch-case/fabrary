import * as React from 'react';
import { Card } from 'antd';

const { Meta } = Card;
export default function FabCard(props) {
  const card = props.card;
  return (
    <Card
      hoverable
      className="fab-card"
      cover={<img alt={`Image of the card ${card.name}`} src={`${card.imageUrl}`} />}
    >
      <Meta title={card.name} description={`${card.class} / ${card.talent}`}/>
    </Card>
  );
}
