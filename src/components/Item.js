const Item = ({ id, item, quantity, isPacked, onDeleteItem }) => {
  return (
    <li
      onClick={() => onDeleteItem(id)}
      style={
        isPacked
          ? {
              backgroundColor: "green",
              color: "white",
              textDecoration: "line-through",
            }
          : {
              backgroundColor: "#f1f1f1",
              color: "black",
              textDecoration: "normal",
            }
      }
    >
      <span>
        {quantity} {item}
      </span>
    </li>
  );
};

export default Item;
