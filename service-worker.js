var cacheName = 'PRVNTV-V1';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([
        './index.html',
        './generalinformation.html',
        './help.html',
        './home.html',
        
        './machineIdentification.html',
        './requestMaintenance.html',

        './assets/css/reset.css',
        './assets/css/style.css',
        './assets/css/machineIdentification.css',
        './assets/css/requestMaintenance.css',
        './assets/css/index.css',
        './assets/css/help.css',

        './assets/img/logoLogin.svg',
        './assets/img/logo.svg',
        './assets/img/dashboard.svg',
        './assets/img/digitaCod.svg',
        './assets/img/menuHamburger.png',
        './assets/img/ajuda.svg',
        './assets/img/manutencao.svg',
        './assets/img/manutencaoCorretiva.svg',
        './assets/img/manutencaoPreventiva.svg',
        './assets/img/manutencaoSensitiva.svg',
        './assets/img/maquina.svg',
        './assets/img/qrCode.svg',
        './assets/img/upload.png',
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());
});