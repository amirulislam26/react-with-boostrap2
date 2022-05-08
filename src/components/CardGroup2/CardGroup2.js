import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card2/Card2';

const CardGroup2 = () => {
    const products = [
        { id: 1, name: 'Laptop pro', Price: 100000 },
        { id: 2, name: 'Watch', Price: 10000 },
        { id: 3, name: 'iPhone', Price: 900000 },
    ]
    return (
        <div>
            <CardGroup>
                {
                    products.map(product => <Card2
                        key={product.id}
                        product={product}
                    ></Card2>)
                }
            </CardGroup>
        </div>
    );
};

export default CardGroup2;