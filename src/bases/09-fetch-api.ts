import type { GIFResponse } from '../interfaces/gif.response';

const apiKey = "F8oqZLKt7K5L0suOWY9OUcd03gg7EIaJ";

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
  .then((resp) => resp.json())
  .then((body: GIFResponse ) => {
    console.log(body.data.images.downsized_medium.url );
  })
  .catch((err) => console.info(err));
