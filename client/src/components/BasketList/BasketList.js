import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import BasketListItem from '../BasketListItem/BasketListItem';
import styles from './BasketList.module.scss';
import { getCartFromDatabase } from '../../api/getCartFromDatabase';
import { addCartItemsFromData } from '../../store/slices/cartItemsSlices';

// import { setUpdatedCartItemsFromLocal } from '../../store/slices/cartItems';

// В корзине только айди и количество. Нужно состыковать с сервером.
//  Корзина отправляется, сервер отдает вседетали попродукту.

function BasketList() {
  const isUserLoggedIn = useSelector((state) => state.userLogin.isUserLogged);
  // const dispatch = useDispatch();
  const cartItems = useSelector(
    (state) => state.cartItems.cartItems,
    shallowEqual,
  );
  // console.log(cartItems);
  // const [cartItems, setCartItems] = useState([]);
  // useEffect(() => {
  //   if (!isUserLoggedIn) {
  //     async function getCart() {
  //       const arr = await getCartFromDatabase();
  //       console.log(arr);
  //       addCartItemsFromData(arr);
  //     }
  //     getCart();
  //   }
  // }, []);

  // return (
  //   <div>BASKET</div>
  // );
  let cartProducts;
  if (cartItems) {
    cartProducts = cartItems.map((cartItem) => (
      <BasketListItem key={cartItem._id} item={cartItem} />
    ));
  } else { cartProducts = null; }

  return (
    <div className={styles.basketList}>
      {cartProducts}
    </div>
  );
}

export default BasketList;
