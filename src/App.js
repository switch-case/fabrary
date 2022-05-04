import * as React from 'react';
import { Input } from 'antd';
import { cards } from 'fab-cards';
import FabCard from './card.js';
import { Typography } from 'antd';
import { Suspense, lazy } from 'react';

const onSearch = value => console.log(value);

const fabCards = cards.slice(0, 10);
const { Search } = Input;
const { Title } = Typography;
console.log(fabCards)

// Attemping lazy loading
// const FabCards = React.lazy(() => {fabCards.map((card) => 
//   <FabCard 
//     card={card}
//     key={card.identifier}
//   ></FabCard>
//   )});

export default function App() {
  
  return (
    <div className="container">
      <Title>Welcome to the FABrary</Title>
      <Search 
        placeholder="Search for cards"
        enterButton
        onSearch = { onSearch }
        allowClear
      ></Search>
      <div className="fab-card-container">
        {fabCards.map((card) => 
        <FabCard 
          card={card}
          key={card.identifier}
        ></FabCard>
        )}
      </div>
    </div>
  );
}
