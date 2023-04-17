export function getDataUser= async() => {
  const dataUser = await fetch(
    'http://127.0.0.1:5005/customers/customer',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: JSON.parse(localStorage.getItem('token')),
      },
    },
  )
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
  return dataUser;
}
