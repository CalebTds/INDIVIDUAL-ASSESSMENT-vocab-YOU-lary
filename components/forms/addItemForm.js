import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import selectStore from './selectStore';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addItemForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : 'submit-item'}" class="mb-4">
      <div class="form-group">
        <label for="title">Item Name</label>
        <input type="text" class="form-control" id="title" aria-describedby="itemName" placeholder="Enter Item Name" value="${obj.name || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="Item Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" value="${obj.image || ''}" required>
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="text" class="form-control" id="price" placeholder="Item Price" value="${obj.price || ''}" required>
      </div>
      <div class="form-group" id="select-store">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="sale" ${obj.sale ? 'checked' : ''}>
        <label class="form-check-label" for="sale">On Sale?</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit Item
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectStore(`${obj.store_id || ''}`);
};

export default { addItemForm };
