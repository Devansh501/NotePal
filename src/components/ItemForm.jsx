import { useState } from "react";

function ItemForm({ onSubmit, currentItem }) {
  const [name, setName] = useState(currentItem ? currentItem.name : "");
  const [description, setDescription] = useState(currentItem ? currentItem.description : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: currentItem ? currentItem.id : Date.now(),
      name,
      description,
    };
    onSubmit(newItem);
    setName("");
    setDescription("");
  };

  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-3/4 md:w-1/4 m-auto outline-none rounded-lg px-2 py-2 text-lg"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={8}
        className="w-3/4 md:w-2/4 m-auto outline-none rounded-2xl px-3 text-md py-3"
      />
      <button type="submit"
        className="w-1/4 md:w-1/12 m-auto"
      >{currentItem ? "Update" : "Add"}</button>
    </form>
  );
}

export default ItemForm;
