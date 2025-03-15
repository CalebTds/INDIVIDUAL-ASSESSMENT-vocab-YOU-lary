import { signOut } from '../utils/auth';
import { showItems } from '../pages/items';
import { getItems, itemsOnSale } from '../api/ItemsData';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // TODO: ITEMS ON SALE
  document.querySelector('#sale-items').addEventListener('click', () => {
    itemsOnSale().then(showItems);
  });

  // TODO: ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    getItems().then(showItems);
  });

  // FIXME: STUDENTS Create an event listener for the Stores
  // 1. When a user clicks the stores link, make a call to firebase to get all stores
  // 2. Convert the response to an array because that is what the makeStores function is expecting
  // 3. If the array is empty because there are no stores, make sure to use the emptyStores function
  document.querySelector('#stores').addEventListener('click', () => {
    console.warn('CLICKED STORES');
  });

  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE ITEMS
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE

      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
