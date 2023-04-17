export const getCartFromDatabase = async () => {
  const cart = await fetch('/cart', {
    method: 'GET',
    headers: { Authorization: JSON.parse(localStorage.getItem('token')) },
  })
    .then((res) => res.json())
    .then((data) => data.products)
    .catch((err) => console.log(err));

  return cart.map(({
    product: {
      currentPrice, imageUrls: [image], itemNo, name, quantity, _id,
    }, cartQuantity,
  }) => ({
    currentPrice, image, itemNo, name, quantity, _id, cartQuantity,
  }));
};
