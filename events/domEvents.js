import { getItems, deleteItem, getSingleItem } from '../api/ItemsData';
import { showItems } from '../pages/items';
import { getStores } from '../api/StoreData';
import { showStores } from '../pages/stores';
import { getItemDetails, deleteStoreItemsRelationship } from '../api/InventoryData';
import addItemForm from '../components/forms/addItemForm';
import viewItem from '../pages/viewItem';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING AN ITEM
    if (e.target.id.includes('delete-item')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ITEM', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');
        deleteItem(firebaseKey).then(() => {
          getItems().then(showItems);
        });
      }
    }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING AN ITEM
    if (e.target.id.includes('add-item-btn')) {
      console.warn('ADD ITEM');
    }

    // TODO: CLICK EVENT EDITING/UPDATING AN ITEM
    if (e.target.id.includes('edit-item-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleItem(firebaseKey).then((itemObj) => addItemForm(itemObj));
    // getSingleItem(firebaseKey).then(addItemForm); // using the callback method
    }
    // TODO: CLICK EVENT FOR VIEW ITEM DETAILS
    if (e.target.id.includes('view-item-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getItemDetails(firebaseKey).then(viewItem);
    }
    // FIXME: ADD CLICK EVENT FOR DELETING A STORE
    if (e.target.id.includes('delete-store-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteStoreItemsRelationship(firebaseKey).then(() => {
          getStores().then(showStores);
        });
      }
    }

    // FIXME: ADD CLICK EVENT FOR SHOWING FORM FOR ADDING A STORE
    if (e.target.id.includes('add-store-btn')) {
      console.warn('ADD STORE');
    }
    // FIXME: ADD CLICK EVENT FOR EDITING A STORE
  });
};

export default domEvents;
