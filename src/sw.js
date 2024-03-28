importScripts(
    //nao vou usar nas aulas porque queremos aprender as apis do pwa diretamente
    //vou deixar aqui como sugestao porque metade dos pwas existentes usam workbox
    //'https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js'
);

const app_version="0.0.1"

self.addEventListener('fetch', event => {
  if (event.request.url.endsWith('.png')) {
      console.log("PngImgRequested: " + event.request.url);
  }
});
