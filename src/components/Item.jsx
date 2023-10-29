import { useState } from "react";

function Item({ item, onDelete, onEdit, editing, onSave }) {
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);

  const handleSave = () => {
    onSave({ ...item, name, description });
  };

  return (
    <div className="shadow-lg px-4 py-5 w-fit bg-neutral-700 text-black rounded-lg">
      <h2 className="font-semibold text-lg mb-2">

        {/* Check if the Card item is being edited or not and then display contents according to that */}
        {editing ? (
          <input
          className="outline-none rounded-md p-2 bg-neutral-800"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          item.name
        )}
      </h2>


      <p className="mb-5">
        {editing ? (
          <textarea
          className="w-full outline-none rounded-md p-2 bg-neutral-800"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        ) : (
          item.description
        )}
      </p>

      
      {editing ? (
        <button className="px-2 py-2" onClick={handleSave}>Save</button>
      ) : (
        <>
          <button className="px-2 py-2 mr-2" onClick={() => onDelete(item.id)}>Delete</button>
          <button className="px-3 py-2" onClick={() => onEdit(item)}>Edit</button>
        </>
      )}
    </div>
  );
}

export default Item;
