function NavBar({ stockitems }) {
  const [cart, setCart] = React.useState([]);
  const [stock, setStock] = React.useState(stockitems);
  const { Button } = ReactBootstrap;

  const moveToCart = ({name, instock}) => {
    let itemAdded = false;
    let newStock = stock.map((item, index) => { 
      if (item.name === name && item.instock >= 1) {
        item.instock--;
        itemAdded = true;
      }
      return item;
    });
    if (itemAdded) {
      setCart([...cart, name]);
    }
    setStock(newStock);
  };
  const updatedList = stock.map((item, index) => {
    return (
      <Button onClick={() => moveToCart(item)} key={index}>
        {item.name}:{item.instock}
      </Button>
    );
  });

  const shoppingCart = cart.map((item, index) => {
    return (
      <Button key={index}>
        {item}
      </Button>
    );
  });

  return (
    <>
      <ul style={{ listStyleType: "none" }}>{updatedList}</ul>
      <h1>Shopping Cart</h1>
      <ul style={{ listStyleType: "none" }}>{shoppingCart}</ul>
    </>
  );
}

const menuItems = [
  { name: "apple", instock: 2 },
  { name: "pineapple", instock: 3 },
  { name: "pear", instock: 0 },
  { name: "peach", instock: 3 },
  { name: "orange", instock: 1 }
];

ReactDOM.render(
  <NavBar stockitems={menuItems} />,
  document.getElementById("root")
);
