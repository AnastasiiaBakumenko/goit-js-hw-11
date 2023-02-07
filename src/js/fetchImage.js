// const axios = require('axios').default;
import axios from 'axios';
export default class FetchImage {
  #BASE_URL = 'https://pixabay.com';
  #URL = 'api/';
  #KEY = '33369895-08f083aac748bf074ebfa9156';
  #PER_PAGE = 40;

  constructor() {
    this.instance = axios.create({
      baseURL: this.#BASE_URL,
      timeout: 1000,
    });
    this.curentPage = 1;
    this.curentTextQuery = '';
  }

  getParamReguest(textQuery) {
    return {
      key: this.#KEY,
      image_type: 'photo',
      pretty: true,
      orientation: 'horizontal',
      safesearch: true,
      per_page: this.#PER_PAGE,
      page: this.curentPage,
      q: this.curentTextQuery,
    };
  }

  getImage() {
    return this.instance.get(this.#URL, {
      params: this.getParamReguest(),
    });
  }
}