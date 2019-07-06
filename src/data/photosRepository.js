import { PhotosAxios } from "./dataRepository";

const resource = "photos";

export default {
  get() {
    return PhotosAxios.get(`${resource}`);
  },

  getPhoto(photoId) {
    return PhotosAxios.get(`${resource}/${photoId}`);
  }

}