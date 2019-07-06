import PhotoRepository from "./photosRepository";
import AboutRepository from "./aboutRepository";

const repositories = {
    photos: PhotoRepository,
    about: AboutRepository
}

export const DataFactory = {
    get: name => repositories[name]
}