import {apiKey} from '../config/config';
import {api} from './api';

export class HttpServiceProvider {
  get(endpoint, query) {
    let finalEndpoint = `${endpoint}?api_key=${apiKey}&language=en-US`;
    query && (finalEndpoint += `&query=${query}`);

    return new Promise((resolve, reject) => {
      api
        .get(finalEndpoint)
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          resolve(err.response);
        });
    });
  }
}

let httpService = new HttpServiceProvider();

export {httpService};
