import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyItems = () => {
  const domString = '<h1>No Items</h1>';
  renderToDOM('#store', domString);
};

const showItems = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-book-btn">Add An Item</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
            <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-item-btn--${item.firebaseKey}"></i>
            <i id="edit-item-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-item-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export { showItems, emptyItems };
