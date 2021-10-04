const cacheData = "v1.0.0";
const urlToCache = [
	"/static/media/logo-sub.dd48f2b5.webp",
	"/static/media/logo.535f8c9a.webp",
	"/static/media/FAVORITES.5f6c2bf0.webp",
	"/static/media/ARCHIVED.2fc5a23b.webp",
	"/static/media/POSTS.25a58a28.webp",
	"/static/media/ERROR.f934a225.webp",
	"/static/media/DRAFTS.4610fe17.webp",
	"/static/media/canvasPlaceholder.50efc0cd.jpg",
	"/static/media/display.cb496c9e.jpg",
	"/static/media/invalidURL.6d77df73.jpg",
	"/static/media/logo-sub-dm.7dbd0669.webp",
	"/static/media/proxima-nova.d5175379.woff",
	"/static/media/aguafina-script.83ddfc7c.ttf",
	"/static/media/cedarville-cursive.f74f34a2.ttf",
	"/static/media/kristi.36bf0572.ttf",
	"/static/media/delius-swash-caps.49ce60ba.ttf",
	"/static/media/fondamento.b20f47f5.ttf",
	"/static/media/indie-flower.9bd64a34.ttf",
	"/static/media/just-me-again-down-here.840f6f06.ttf",
	"/static/media/patrick-hand.17a73bce.ttf",
	"/static/media/pinyon-script.49526d59.ttf",
	"/index.html",
	"/offline.html",
	"/static/media/NEWS.dd91f498.webp",
	"/static/media/1-min.e52de55d.jpg",
	"/static/media/2-min.448463af.jpg",
	"/static/media/3-min.5bd9dfb2.jpg",
	"/static/media/4-min.12510137.jpg",
	"/static/media/5-min.3c9e2b39.jpg",
	"/static/media/6-min.a1dbbf75.jpg",
	"/static/media/7-min.bdaa797c.jpg",
	"/static/media/8-min.61ed88ba.jpg",
	"/static/media/9-min.915cdca4.jpg",
	"/static/media/10-min.9c2615d9.jpg",
	"/static/media/11-min.f3f96bd9.jpg",
	"/static/media/12-min.6a438fb9.jpg",
	"/static/media/13-min.a131c2c1.jpg",
	"/static/media/14-min.05b04fc8.jpg",
	"/static/media/15-min.eb513be7.jpg",
	"/static/media/16-min.0c9e9895.jpg",
	"/static/media/17-min.34e24c64.jpg",
	"/static/media/18-min.ef263a1e.jpg",
	"/static/media/19-min.51db4dd9.jpg",
	"/static/media/20-min.35cc959c.jpg",
	"/static/media/21-min.b9a350fa.jpg",
	"/static/media/22-min.88da0549.jpg",
	"/static/media/23-min.d9d41135.jpg",
	"/static/media/24-min.f8c807ce.jpg",
	"/static/media/25-min.07200635.jpg",
	"/static/media/26-min.260b8679.jpg",
	"/static/media/27-min.a7c3daa1.jpg",
	"/static/media/28-min.e48e9cc3.jpg",
	"/static/media/29-min.636fbca3.jpg",
	"/static/media/30-min.8d0039f2.jpg",
	// Articles
	"https://res.cloudinary.com/quoteequotesid/image/upload/v1631695050/articles/article1.webp",
	"https://res.cloudinary.com/quoteequotesid/image/upload/v1633352203/articles/article2_ednuhv.jpg",
	"https://res.cloudinary.com/quoteequotesid/image/upload/v1633352207/articles/article3_zxseub.jpg",
	"https://res.cloudinary.com/quoteequotesid/image/upload/v1633353149/articles/article4_x5mgx1.jpg"
];

this.addEventListener("install", event => {
	event.waitUntil(caches.open(cacheData).then(cache => cache.addAll(urlToCache)));
});

this.addEventListener("fetch", event => {
	event.respondWith(
		caches
			.match(event.request)
			.then(res => {
				return res || fetch(event.request);
			})
			.catch(() => caches.match("offline.html"))
	);
});

this.addEventListener("activate", event => {
	event.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames
					.filter(cacheName => {
						return cacheName !== cacheData ? true : false;
					})
					.map(function (cacheName) {
						return caches.delete(cacheName);
					})
			);
		})
	);
});

this.addEventListener("push", event => {
	const data = event.data.json();

	this.registration.showNotification(data.title, {
		body: data.body,
		icon: "./maskable_icon.png",
		vibrate: [100, 50, 100],
		data: {
			dateOfArrival: Date.now(),
			primaryKey: 1,
			url: data.url
		},
		actions: [
			{ action: "open", title: "Open" },
			{ action: "close", title: "Close notification" }
		]
	});
});

this.addEventListener("notificationclick", e => {
	const notification = e.notification;
	const action = e.action;

	if (action === "open" || action === "") {
		this.clients.openWindow(notification.data.url);
		notification.close();
	} else {
		notification.close();
	}
});
