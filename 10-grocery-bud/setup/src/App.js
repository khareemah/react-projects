import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const getLocalStorage = () => {
    const list = JSON.parse(localStorage.getItem('list')) || [];
    return list;
  };
  const [item, setItem] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    className: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) {
      showAlert('please add an item', 'danger', true);
    } else if (item && isEditing) {
      const newList = list.map((groceryItem) => {
        if (groceryItem.id === editId) {
          groceryItem = { ...groceryItem, item };
        }
        return groceryItem;
      });
      setList(newList);
      setItem('');
      setEditId(null);
      setIsEditing(false);
      showAlert('item edited', 'success', true);
    } else {
      const newItem = { id: new Date().getTime().toString(), item };
      showAlert('Item Added', 'success', true);
      setList([...list, newItem]);
      setItem('');
    }
  };

  const showAlert = (message, className, show = false) => {
    return setAlert({ message, className, show });
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  const clearList = () => {
    setList([]);
    showAlert('list deleted', 'danger', true);
  };

  const deleteItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    showAlert('item deleted', 'danger', true);
  };

  const editItem = (id) => {
    const itemToEdit = list.find((item) => id === item.id);
    setIsEditing(true);
    setEditId(id);
    setItem(itemToEdit.item);
  };

  return (
    <>
      <section className="section-center">
        <form action="#" className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}
          <h3>grocery bud</h3>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="e.g. eggs"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              {isEditing ? 'edit' : 'submit'}
            </button>
          </div>
          {list.length > 0 && (
            <List
              list={list}
              clearList={clearList}
              deleteItem={deleteItem}
              editItem={editItem}
            />
          )}
        </form>
      </section>
    </>
  );
}

export default App;
