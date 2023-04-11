var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './generalInformation.html',
        './help.html',
        './home.html',
        './login.html',
        './machineIdentification.html',
        './requestMaintenance.html',

        './assets/css/reset.css',
        './assets/css/style.css',
        './assets/css/machineIdentification.css',
        './assets/css/requestMaintenance.css',
        './assets/css/login.css',
        './assets/css/help.css',

        './assets/img/dashboarg.png',
        './assets/img/dictation.png',
        './assets/img/hamburger.png',
        './assets/img/help.png',
        './assets/img/manutencao.png',
        './assets/img/manutencaoCorretiva.png',
        './assets/img/manutencaoPreventiva.png',
        './assets/img/manuntencaoSensitiva.png',
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