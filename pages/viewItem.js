import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewItem = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <img src=${obj.image} alt=${obj.title} style="width: 300px;">
     <div class="mt-5">
       <i id="edit-item-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-item--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>
   </div>
   <div class="text-white ms-5 details">
     <h5>${obj.title} by ${obj.storeObject.first_name} ${obj.storeObject.last_name} ${obj.storeObject.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
     Store Email: <a href="mailto:${obj.storeObject.email}">${obj.storeObject.email}</a>
     <p>${obj.description || ''}</p>
     <hr>
     <p>${obj.sale ? `<span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> 
       $${obj.price}` : `$${obj.price}`}</p>      
      </div>
    </div>`;

  renderToDOM('#view', domString);
};

export default viewItem;
