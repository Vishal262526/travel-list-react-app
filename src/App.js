import Header from "./components/Header";
import "./App.css";
import Form from "./components/Form";
import Stats from "./components/Stats";
import PackingList from "./components/PackingList";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FilterList from "./components/FilterDropdown";
import FilterDropdown from "./components/FilterDropdown";

const initialData = [
  { id: 1, title: "Sabun", quantity: 3, packed: true },
  { id: 2, title: "Shirts", quantity: 10, packed: false },
  { id: 3, title: "Charger and Phone", quantity: 5, packed: false },
  { id: 4, title: "Enough Food", quantity: 5, packed: false },
];

const App = () => {
  const [itemList, setItemList] = useState(initialData);
  const [sortBy, setSortBy] = useState("All");

  const addItem = (item) => {
    setItemList((prevItem) => [...prevItem, item]);
    toast("Item Added Successfully");
  };

  const handeDeleteitem = (id) => {
    setItemList((prevItem) =>
      prevItem.filter((curentitem) => curentitem.id !== id)
    );
  };

  const handleFilterChange = (value) => {
    setSortBy(value);
    console.log(sortBy);
  };

  return (
    <>
      <Header />
      <Form onAddItem={addItem} />
      <PackingList
        sortBy={sortBy}
        onDeleteItem={handeDeleteitem}
        itemList={itemList}
      />
      <FilterDropdown onFilterChange={handleFilterChange} />
      <Stats items={itemList} />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        theme="dark"
      />
    </>
  );
};

export default App;
