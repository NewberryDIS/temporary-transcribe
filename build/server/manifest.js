const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","newberryn.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.0cfcae03.js","app":"_app/immutable/entry/app.4401eb72.js","imports":["_app/immutable/entry/start.0cfcae03.js","_app/immutable/chunks/index.c29d431c.js","_app/immutable/chunks/singletons.d82add08.js","_app/immutable/chunks/index.54bd3c82.js","_app/immutable/entry/app.4401eb72.js","_app/immutable/chunks/index.c29d431c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-c5e95e3b.js'),
			() => import('./chunks/1-4fa24679.js'),
			() => import('./chunks/2-ed320696.js'),
			() => import('./chunks/3-49315a25.js'),
			() => import('./chunks/4-97688fc5.js'),
			() => import('./chunks/5-87c534de.js'),
			() => import('./chunks/6-84bd9cd7.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/items",
				pattern: /^\/api\/items\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-fa4c90d7.js')
			},
			{
				id: "/api/pages",
				pattern: /^\/api\/pages\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-2e3ac167.js')
			},
			{
				id: "/api/page",
				pattern: /^\/api\/page\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-7fea4869.js')
			},
			{
				id: "/api/submit",
				pattern: /^\/api\/submit\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server-f804d82c.js')
			},
			{
				id: "/api/transcribe",
				pattern: /^\/api\/transcribe\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-ce4e703a.js')
			},
			{
				id: "/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/[item]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"item","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/[item]/[page]",
				pattern: /^\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"item","optional":false,"rest":false,"chained":false},{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
