import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ onAddItem }) => {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== "") {
      setTitle("");
      setQuantity(1);

      const newItem = {
        id: Date.now(),
        title,
        quantity,
        packed: false,
      };

      onAddItem(newItem);
    } else {
      toast("Please Enter Item ", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  console.log(quantity);
  console.log(title);

  return (
    <div className="add-form">
      <h2>What do your need for your trip</h2>
      <form onSubmit={handleSubmit}>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {[...Array(20).keys()].map((e) => (
            <option key={e + 1} value={e + 1}>
              {e + 1}
            </option>
          ))}
        </select>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Item...."
          type="text"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Form;
