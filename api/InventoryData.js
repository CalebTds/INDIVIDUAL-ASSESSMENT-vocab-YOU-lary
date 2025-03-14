// for merged promises
// TODO: Get data for viewItem
const getItemDetails = (firebaseKey) => new Promise((resolve, reject) => {
// GET SINGLE ITEM
  getSingleItem(firebaseKey).then((itemObject) => { // returns single item object
    getSingleStore(itemObject.store_id) // we nest this promise so that we can use the item object
      .then((storeObject) => resolve({ ...itemObject, storeObject }));
}).catch(reject);
// GET STORE
// Create an object that has item data and an object named storeObject
});

const deleteStoreItemsRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getStoreItems(firebaseKey).then((storeItemsArray) => {
    const deleteItemPromises = storeItemsArray.map((book) => deleteItem(item.firebaseKey));

    Promise.all(deleteItemPromises).then(() => {
      deleteSingleStore(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export { getItemDetails, deleteStoreItemsRelationship }