import dataRepository from "./dataRepository";

const resource = "photos";

export default {
  get() {
    return dataRepository.get(`${resource}`);
  },

  getPhoto(photoId) {
    return dataRepository.get(`${resource}/${photoId}`);
  }

  
}