import axios from 'axios';
import type{ GIFResponse } from '../interfaces/gif.response';

const apiKey = "F8oqZLKt7K5L0suOWY9OUcd03gg7EIaJ";


export const giphyApi = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  params: {
    api_key: apiKey,
  }
});

// export default giphyApi;



// giphyApi.get<GIFResponse>('/random')
//   .then( resp => console.log(resp.data.data.images.downsized_large.url))
//   .catch( err => console.log(err));