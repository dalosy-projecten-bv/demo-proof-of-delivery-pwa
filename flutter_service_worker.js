'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "9766d9752073b46ec01fecaef7c0fc3c",
"/": "9766d9752073b46ec01fecaef7c0fc3c",
"main.dart.js": "816f116bb53d8496cadf7fadc2bf255f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "df2734eb28212704d4f513ddbb660cfc",
"assets/LICENSE": "b902a89ecb1fe09f693228d0268edbae",
"assets/AssetManifest.json": "97a6f5efdeb2d805df199f5368a610bb",
"assets/sounds/beep_notice.wav": "baad61e0a8ad5fa925a9fa37981bf994",
"assets/sounds/beep.wav": "2b6d49ea214857c14d394a6f809f1cbc",
"assets/sounds/beep_error.wav": "843d85b5d826505368a0ddb33faaa3ff",
"assets/FontManifest.json": "67d7fa419e6a1fe24808049a9bfd2eb8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/Lato-Bold.ttf": "85d339d916479f729938d2911b85bf1f",
"assets/fonts/Lato-Black.ttf": "e631d2735799aa943d93d301abf423d2",
"assets/fonts/Oswald-Bold.ttf": "d038c0b02104103a209a27fcb5dae9c8",
"assets/fonts/Lato-Regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/fonts/Oswald-Regular.ttf": "be8f058831aaadba761f4f93e29a8669",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/1.5x/x.png": "6812f5b6a815a17317d611faee254646",
"assets/assets/1.5x/log_out.png": "0388047f5cbbe39a4068b7b359448919",
"assets/assets/1.5x/img_unloading.png": "8f2f668d77a710fba79ab6ec41d3058f",
"assets/assets/1.5x/left.png": "b2b2086d3c6aca27363e5cbdb13b0f73",
"assets/assets/1.5x/error.png": "2921ee2fabbfd1d89831055096426dfe",
"assets/assets/1.5x/logo.png": "b63b1fa4f173e70cd5cfeb28ac07af75",
"assets/assets/1.5x/options.png": "2b3d17cf67e2ac0f18a0495ebac3255b",
"assets/assets/1.5x/img_loading.png": "02f3cbdf642799618fc7925b9ed0691a",
"assets/assets/1.5x/img_pickup.png": "5d9fc6eba94e362abba33f8a6c0fecf4",
"assets/assets/1.5x/logo_small.png": "601024d5985684f6c01c2fab75929562",
"assets/assets/1.5x/message.png": "5785e87ecfddfe5a54d45cd8bbeef2a8",
"assets/assets/1.5x/right.png": "d8ea1c2a43d2b97b0f1ada3e1d48d033",
"assets/assets/x.png": "4bbd226475cf02caa3e8697daacb6b63",
"assets/assets/2.0x/x.png": "c897c2848a51a1fc7ea3b2e88abab690",
"assets/assets/2.0x/log_out.png": "3743eb8b67169983e9019a585f989467",
"assets/assets/2.0x/img_unloading.png": "a470bbbbd7ff3d5a7315a00c338e6ff9",
"assets/assets/2.0x/left.png": "390fbf06113b219c22c0370175fbe3e9",
"assets/assets/2.0x/error.png": "73c6da2039468f2ab1f29a8a5da2cdf8",
"assets/assets/2.0x/logo.png": "8966d66fc196c41af35dcde13bfb6560",
"assets/assets/2.0x/options.png": "913592425bde18b1b0df3ba728e6397e",
"assets/assets/2.0x/img_loading.png": "d42d010dd32f138f0216aa09657af923",
"assets/assets/2.0x/img_pickup.png": "b9004cbf926b61c2aa359f5effd5aacc",
"assets/assets/2.0x/logo_small.png": "5343175b67485fd5e32872034282156a",
"assets/assets/2.0x/message.png": "2702a0d81526a5b7d88f16e3890c69f3",
"assets/assets/2.0x/right.png": "6cffc6ed05a5cd6007a78d584d0dda2b",
"assets/assets/log_out.png": "8f68799fce68f858c5b42f94977f50f7",
"assets/assets/3.0x/x.png": "736d8b881192434fc3222ac14da32684",
"assets/assets/3.0x/log_out.png": "b74c18117cecaaf9af6197e859c22974",
"assets/assets/3.0x/img_unloading.png": "fa75a235db59ad83ac605ce29fa51748",
"assets/assets/3.0x/left.png": "7166eeb5f84fb83f46bd338f4835b0dd",
"assets/assets/3.0x/error.png": "866fc2073e16643bcc123e66d1acb7ab",
"assets/assets/3.0x/logo.png": "cc9c8fcc576d6e7bbb314e6d6c9dc453",
"assets/assets/3.0x/options.png": "321f59026a50d33e1eeafb5d33481722",
"assets/assets/3.0x/img_loading.png": "f5cf92edb948ab667b3b9b835d328828",
"assets/assets/3.0x/img_pickup.png": "0a9ef845641dad8c7902d096766b84e6",
"assets/assets/3.0x/logo_small.png": "7c9330a242bfd0145d28d537906744b4",
"assets/assets/3.0x/message.png": "0e55aed14c15e5221d3386ce156eae80",
"assets/assets/3.0x/right.png": "91d6eccab5988cbb852dbf5c40256767",
"assets/assets/img_unloading.png": "0e281e2baf3013d57e77072905108b64",
"assets/assets/4.0x/x.png": "78417280a66858e328bd50366226d292",
"assets/assets/4.0x/log_out.png": "99fd81ad1c42f798c4005be410b82816",
"assets/assets/4.0x/img_unloading.png": "e78c0eb05b674974c51b1f7bb99107c3",
"assets/assets/4.0x/left.png": "064c71dc00853f6b78a889e531bd64fe",
"assets/assets/4.0x/error.png": "deb8450e0a13de733ca4f753903f9c01",
"assets/assets/4.0x/logo.png": "1dadcd5607a7d536a8d18352e243c65b",
"assets/assets/4.0x/options.png": "1b998e71adaa7b3fe43099f2fecb4ef6",
"assets/assets/4.0x/img_loading.png": "fe435d4eedd12765b51e0e00b7e4262a",
"assets/assets/4.0x/img_pickup.png": "1f3d915e70fd6fc6db272c179758cd9d",
"assets/assets/4.0x/logo_small.png": "a062e8a6413165e41e48e73fc6af86b7",
"assets/assets/4.0x/message.png": "09ae6d3f037049fa06f15b58d7ee3c12",
"assets/assets/4.0x/right.png": "19fb4cbde9e19711ef080d30e4e918a9",
"assets/assets/left.png": "7eb8df973823074c9c859bdca0648a14",
"assets/assets/error.png": "7a4f0bad6e90c5f5a49bd7f615a2f1da",
"assets/assets/logo.png": "6bb02fae4759999440f5194947d9dde8",
"assets/assets/options.png": "8e0d067e38c919e03d245a8ee1e846ef",
"assets/assets/img_loading.png": "dd585ca0719c29e5627b187a75100bed",
"assets/assets/img_pickup.png": "8088b3f886e2c873d0ea30dc59b9d83c",
"assets/assets/logo_small.png": "d04d58c63e6808a77de7ed181743b9d7",
"assets/assets/message.png": "6a33a663f347a1702e53ce68cfe86394",
"assets/assets/right.png": "023bf8aa1081bbceb628c07be6afca9f"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
