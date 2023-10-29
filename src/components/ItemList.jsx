import Item from "./Item";

function ItemList({ items, onDelete, onEdit, editingItem, onSave }) {
  return (
    <div className="flex gap-4 flex-wrap">

      {/* Map the complete list of items to the created card component */}
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDelete={onDelete}
          onEdit={onEdit}
          editing={editingItem === item}
          onSave={onSave}
        />
      ))}
    </div>
  );
}

export default ItemList;
