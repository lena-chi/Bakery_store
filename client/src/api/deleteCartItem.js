export const deleteCartItem = async (objId) => {
  const cart = await fetch(`/cart/${objId}`, {
    method: 'DELETE',
    headers: { Authorization: JSON.parse(localStorage.getItem('token')) },
  })
    .then((res) => res.json());

  return cart;
};
