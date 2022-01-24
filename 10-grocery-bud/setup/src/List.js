import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = (props) => {
  const { list, clearList, deleteItem, editItem } = props;
  return (
    <div className="grocery-container">
      <div className="grocery-list">
        {list.map((groceryItem) => {
          const { item, id } = groceryItem;
          return (
            <article className="grocery-item" key={id}>
              <p className="title">{item}</p>
              <div className="btn-container">
                <button
                  className="edit-btn"
                  type="button"
                  onClick={() => editItem(id)}
                >
                  <FaEdit />
                </button>
                <button className="delete-btn" type="button">
                  <FaTrash onClick={() => deleteItem(id)} />
                </button>
              </div>
            </article>
          );
        })}
      </div>
      <button className="clear-btn" onClick={clearList}>
        clear list
      </button>
    </div>
  );
};

export default List;
