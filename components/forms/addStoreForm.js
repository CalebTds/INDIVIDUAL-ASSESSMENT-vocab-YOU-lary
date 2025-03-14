import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addStoreForm = () => {
  clearDom();
  const domString = `
    <form id="submit-store" class="mb-4">
      <div class="form-group">
        <label for="image">Store Name</label>
        <input type="text" class="form-control" id="store_name" placeholder="Store Name" required>
      </div>
      <div class="form-group">
        <label for="title">Email</label>
        <input type="email" class="form-control" id="email" aria-describedby="Email" placeholder="Enter Email" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit Store</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addStoreForm;
