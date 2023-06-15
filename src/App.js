import { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Card from './components/UI/Card';
import { cartActions } from './components/Store';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const dispatch = useDispatch();
  const cardShow = useSelector(state => state.cart.cardShow);
  const cartItems = useSelector(state => state.cart.cartItems);
  const [successShow, setSuccessShow] = useState(false);
  const [errorShow, setErrorShow] = useState(false);
  const [processShow, setProcessShow] = useState(false);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      dispatch(cartActions.replaceCart(storedCartItems));
    }
  }, [dispatch]);

  useEffect(() => {
    const storeCartItems = async () => {
      setErrorShow(false);
      setSuccessShow(false);
      setProcessShow(true);

      try {
        await fetch(
          'https://redux-d8c83-default-rtdb.firebaseio.com/cart.json',
          {
            method: 'PUT',
            body: JSON.stringify({ cartItems }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        setSuccessShow(true);
      } catch (error) {
        setErrorShow(true);
      }

      setProcessShow(false);
    };

    storeCartItems();
  }, [cartItems]);

  return (
    <Fragment>
      {successShow && (
        <div className="bg-success">
          <Card className="text-light bg-success w-100 h4">
            Success! Sent cart data successfully!
          </Card>
        </div>
      )}
      {errorShow && (
        <div className="bg-danger">
          <Card className="text-light bg-danger h4">
            Error! Sending data failed!
          </Card>
        </div>
      )}
      {processShow && (
        <div className="bg-primary">
          <Card className="text-light bg-primary h4">
            Sending... Sending cart data!
          </Card>
        </div>
      )}
      <Layout>
        {cardShow && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
