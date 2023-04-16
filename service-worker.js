var cacheName = 'PRVNTV-V1';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([
        
        './generalInformation.html',
        './help.html',
        './Home.html',
        './index.html',
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
        './assets/img/dashboard.png',
        './assets/img/dictation.png',
        './assets/img/menuHamburger.png',
        './assets/img/help.png',
        './assets/img/manutencao.png',
        './assets/img/manutencaoCorretiva.png',
        './assets/img/manutencaoPreventiva.png',
        './assets/img/manutencaoSensitiva.png',
        './assets/img/maquina.png',
        './assets/img/qrCode.png',
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