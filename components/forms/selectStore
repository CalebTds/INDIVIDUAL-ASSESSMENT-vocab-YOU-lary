import { getStores } from '../../api/StoreData';
import renderToDOM from '../../utils/renderToDom';

const selectStore = (storeId) => {
  let domString = `<label for="store">Select a Store</label>
    <select class="form-control" id="store_id" required>
    <option value="">Select a Store</option>`;

  getStores().then((StoresArray) => {
    StoresArray.forEach((store) => {
      domString += `
          <option 
            value="${store.firebaseKey}" 
            ${storeId === store.firebaseKey ? 'selected' : ''}>
              ${store.name}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-store', domString);
  });
};

export default selectStore;
