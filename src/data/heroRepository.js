import { HeroAxios } from "./dataRepository";

export default {
  get() {
    return HeroAxios.get();
  }
}