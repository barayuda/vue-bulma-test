import PhotoRepository from "./photosRepository";

const repositories = {
    photos: PhotoRepository
}

export const DataFactory = {
    get: name => repositories[name]
}