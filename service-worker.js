"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/ffb.cop23/index.html","c4094563326b91c3c16443a125a90cf0"],["/ffb.cop23/static/css/main.d64d3319.css","7cebfe3e4b9f62dcedb7ddc6d8ae23a1"],["/ffb.cop23/static/js/main.9a5b3f5d.js","865f4a846e6412c8ec74ebc232b851fc"],["/ffb.cop23/static/media/buds.eb8bb35b.png","eb8bb35b8485383bbcdbe0c026151ab0"],["/ffb.cop23/static/media/centrepacifique03.72255238.gif","72255238b1e926a163c9b3d1ffb452fc"],["/ffb.cop23/static/media/ff-x.3ac2cda6.png","3ac2cda6e8d65191888c2f560f94526e"],["/ffb.cop23/static/media/klima-bold-web.1380d9b1.woff","1380d9b14e2fc96ac7f03228acda1b66"],["/ffb.cop23/static/media/klima-heavy-web.b2f105f7.woff","b2f105f777504f9e4380af49740e8361"],["/ffb.cop23/static/media/klima-regular-web.8746d42c.woff","8746d42c131008d389f3b4e50768d9db"],["/ffb.cop23/static/media/loading.182a51ce.gif","182a51ceaf906512372a1082213c88e7"],["/ffb.cop23/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/ffb.cop23/static/media/science.193a596c.png","193a596c84e3765777467823858126ef"],["/ffb.cop23/static/media/water_house_icon.f463101e.png","f463101e1e4aff8fce70657b177d7ce7"],["/ffb.cop23/static/media/wave_icon.eb6fafac.png","eb6fafacb3584c48bff6c8b84bdaf51a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/ffb.cop23/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});