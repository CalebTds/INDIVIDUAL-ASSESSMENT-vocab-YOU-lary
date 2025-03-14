import { updateItem, getItems } from '../api/ItemsData';
import { showItems } from '../pages/items';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN ITEM
    if (e.target.id.includes('submit-item')) {
      console.warn('CLICKED SUBMIT ITEM', e.target.id);
    }

    // TODO: CLICK EVENT FOR EDITING AN ITEM
    if (e.target.id.includes('update-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        store_id: document.querySelector('#store_id').value,
        sale: document.querySelector('#sale').checked,
        firebaseKey,
};

      updateItem(payload).then(() => {
        getItems().then(showItems);
      });
    }
    // FIXME: ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING A STORE
    if (e.target.id.includes('submit-store')) {
      console.warn('CLICKED SUBMIT STORE');
    }
    // FIXME:ADD CLICK EVENT FOR EDITING A STORE
});
};

export default formEvents;
