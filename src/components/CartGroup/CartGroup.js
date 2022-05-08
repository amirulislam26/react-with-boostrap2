import React from 'react';
import Card from '../Card/Card';

const CartGroup = () => {
    const products = [
        { id: 1, name: 'Laptop pro', Price: 100000 },
        { id: 2, name: 'Watch', Price: 10000 },
        { id: 3, name: 'iPhone', Price: 900000 },
    ]
    return (
        <div>
            <h2>This is my Carts</h2>
            <div class="card-group">
                {
                    products.map(product => <Card
                        key={product.id}
                        product={product}
                    ></Card>)
                }

            </div>
        </div>
    );
};

export default CartGroup;