export const sendCartItemToDatabase = async (productId) => {
  console.log(productId);
  const cartArray = await fetch(`/cart/${productId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: JSON.parse(localStorage.getItem('token')),
    },
  })
    .then((res) => res.json())
    .then((data) => data.products)
    .catch((err) => console.log(err));

  return cartArray.map(({
    product: {
      currentPrice, imageUrls: [image], itemNo, name, quantity, _id,
    }, cartQuantity,
  }) => ({
    currentPrice, image, itemNo, name, quantity, _id, cartQuantity,
  }));
};
