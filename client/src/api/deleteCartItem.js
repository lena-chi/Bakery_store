export const deleteCartItem = async (objId) => {
  const cart = await fetch(`/cart/${objId}`, {
    method: 'DELETE',
    headers: { Authorization: JSON.parse(localStorage.getItem('token')) },
  })
    .then((res) => res.json())
    .then((data) => data.products)
    .catch((err) => console.log(err));

  return cart.map.map(({
    product: {
      currentPrice, imageUrls: [image], itemNo, name, quantity, _id,
    }, cartQuantity,
  }) => ({
    currentPrice, image, itemNo, name, quantity, _id, cartQuantity,
  }));
};
