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
    "url": "build/main.c2f2161b.css"
  },
  {
    "url": "build/main.6464aa74.js"
  },
  {
    "url": "build/polyfills.889b55a9.js"
  },
  {
    "url": "build/vendor.c28d4703.js"
  },
  {
    "url": "index.html",
    "revision": "a2b5cb3220d63def8830dc2e48d3e559"
  },
  {
    "url": "manifest.json",
    "revision": "16df6fc97fdd1818fa5b22094674fff3"
  }
]);
