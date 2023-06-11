import ProductItem from './ProductItem';
import classes from './Products.module.css';

const products = [
  { prodId: 1, title: "MRF", price: 10000, description: "used by ViratKohli", quantity: 1 },
  { prodId: 2, title: "NewBalance", price:6000, description: "used by Smith", quantity: 1 },
  { prodId: 3, title: "GreatNicholous", price: 7000, description: "used by Warner", quantity: 1 },
  { prodId: 4, title: "Spartan", price: 9000, description: "used by Dhoni", quantity: 1 }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((prod) => {
          return <li key={prod.prodId}>
            <ProductItem
              key={prod.prodId}
              title={prod.title}
              price={prod.price}
              description={prod.description}
              quantity={prod.quantity}
              prodId={prod.prodId}
            />
          </li>
        })}

      </ul>
    </section>
  );
};
export default Products;
