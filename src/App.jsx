import { useState, useEffect } from "react";
import ItemList from "./components/ItemList";
import ItemForm from "./components/ItemForm";

function App() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleEditItem = (item) => {
    setEditingItem(item);
  };

  const handleSaveItem = (updatedItem) => {
    const updatedItems = items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setItems(updatedItems);
    setEditingItem(null);
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  return (
    <div className="w-full h-full px-5">
      <h1 className="mt-4 w-3/4 m-auto text-center mb-4 font-mono font-extrabold">NotePal</h1>
      
      <div className="space-y-4">
        
        {/* Input Form for adding Notes */}
        <div className="w-full">
          <ItemForm onSubmit={handleAddItem} />
        </div>

         {/* NoteList with reusable components of notes */}
        <div className="">
          <ItemList
          items={items}
          onDelete={handleDeleteItem}
          onEdit={handleEditItem}
          editingItem={editingItem}
          onSave={handleSaveItem}
        />
        </div>
      </div>

    </div>
  );
}

export default App;
