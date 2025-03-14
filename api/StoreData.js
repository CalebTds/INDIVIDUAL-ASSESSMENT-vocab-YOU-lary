import client from '../utils/client';

const endpoint = client.databaseURL;

// FIXME:  GET ALL STORES
const getStores = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/stores.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// FIXME: CREATE STORE
const createAuthor = () => {};

// FIXME: GET SINGLE STORE
const getSingleStore = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/stores/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

// FIXME: DELETE STORE
const deleteSingleStore = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/stores/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
// FIXME: UPDATE STORE
const updateAuthor = () => {};

// TODO: GET A SINGLE ITEM'S STORE
const getStoresItems = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items.json?orderBy="author_id"&equalTo=${firebaseKey}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getStores,
  createAuthor,
  getSingleStore,
  deleteSingleStore,
  updateAuthor,
  getStoresItems,
};
