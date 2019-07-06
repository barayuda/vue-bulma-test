import PhotoRepository from "./photosRepository";
import AboutRepository from "./aboutRepository";
import HeroRepository from "./heroRepository";

const repositories = {
    photos: PhotoRepository,
    about: AboutRepository,
    subtitle: HeroRepository
}

export const DataFactory = {
    get: name => repositories[name]
}