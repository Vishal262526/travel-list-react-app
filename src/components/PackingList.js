import Item from "./Item";

const PackingList = ({ itemList, onDeleteItem, sortBy }) => {
  let filteredList;
  if (sortBy === "All") filteredList = itemList;
  else if (sortBy === "Packed")
    filteredList = itemList.filter((item) => item.packed);
  else filteredList = itemList.filter((item) => !item.packed);

  return (
    <ul className="packing-list">
      {filteredList.map((item) => (
        <Item
          onDeleteItem={onDeleteItem}
          key={item.id}
          id={item.id}
          isPacked={item.packed}
          quantity={item.quantity}
          item={item.title}
        />
      ))}
    </ul>
  );
};

export default PackingList;
