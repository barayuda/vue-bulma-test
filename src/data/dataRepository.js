import axios from "axios";

const baseDomain = "https://jsonplaceholder.typicode.com/";
const photosBaseURL = `${baseDomain}`;

const aboutBaseURL = "https://swapi.co/api/films/1/?format=json";

const heroBaseURL = "https://api.chucknorris.io/jokes/random";

export const PhotosAxios = axios.create({
    baseURL: photosBaseURL
});

export const AboutAxios = axios.create({
    baseURL: aboutBaseURL
});

export const HeroAxios = axios.create({
    baseURL: heroBaseURL
});