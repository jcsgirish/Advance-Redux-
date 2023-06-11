import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';

function App() {
  const cardshow= useSelector(state=>state.cart.cardshow)
  return (
    <Layout>
      {cardshow && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
