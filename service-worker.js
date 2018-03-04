importScripts('workbox-sw.prod.v2.1.2.js');

const workboxSW = new self.WorkboxSW({
    clientsClaim: true,
    skipWaiting: true,
  });
workboxSW.precache([
  {
    "url": "assets/fonts/ionicons.woff2",
    "revision": "311d81961c5880647fec7eaca1221b2a"
  },
  {
    "url": "assets/fonts/roboto-bold.woff2",
    "revision": "28d80f43ae4cc35f19e1f1a6ab670f25"
  },
  {
    "url": "assets/fonts/roboto-light.woff2",
    "revision": "a826ff848e9f52b1732fed7d154afa97"
  },
  {
    "url": "assets/fonts/roboto-medium.woff2",
    "revision": "b2c9c262e089411e20689ed393c00796"
  },
  {
    "url": "assets/fonts/roboto-regular.woff2",
    "revision": "e6b9d54811307f98da62eae992ae05ba"
  },
  {
    "url": "build/main.css",
    "revision": "760e5c07bcad2db068bd6a3545ec435c"
  },
  {
    "url": "build/main.js",
    "revision": "aab103dfdcb5724262b9a6a7267eb473"
  },
  {
    "url": "build/polyfills.js",
    "revision": "443c697fc904cd88a651d09cf5c2fe2b"
  },
  {
    "url": "build/vendor.js",
    "revision": "8961bee599b80e648e41322b40a26ca9"
  },
  {
    "url": "index.html",
    "revision": "ea2f5ff0979b9d9e36e394c56dd0d717"
  },
  {
    "url": "manifest.json",
    "revision": "16df6fc97fdd1818fa5b22094674fff3"
  }
]);
