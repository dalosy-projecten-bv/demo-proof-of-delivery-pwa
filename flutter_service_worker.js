'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "9766d9752073b46ec01fecaef7c0fc3c",
"/": "9766d9752073b46ec01fecaef7c0fc3c",
"main.dart.js": "7048e177f02fc739193a30bd4df44066",
"favicon.png": "66a5321977940c6ee37b2705cfdaa370",
"icons/Icon-192.png": "ef996e201fc4b99326e942b7660fc2a4",
"icons/Icon-512.png": "220d49884c35f064ccb79455e69aec71",
"manifest.json": "0f09b5b360060114cf305547943a5bb0",
"assets/AssetManifest.json": "97a6f5efdeb2d805df199f5368a610bb",
"assets/NOTICES": "d5b2eb8a0011a4f9c4828bd9a51ce185",
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

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
