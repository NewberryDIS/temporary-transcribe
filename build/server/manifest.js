const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","newberryn.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.1d5d6b38.js","app":"_app/immutable/entry/app.4239d36f.js","imports":["_app/immutable/entry/start.1d5d6b38.js","_app/immutable/chunks/index.c29d431c.js","_app/immutable/chunks/singletons.2b04dd4b.js","_app/immutable/chunks/index.54bd3c82.js","_app/immutable/entry/app.4239d36f.js","_app/immutable/chunks/index.c29d431c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-19e09728.js'),
			() => import('./chunks/1-a48eb2c1.js'),
			() => import('./chunks/2-0942a4af.js'),
			() => import('./chunks/4-c783d4b2.js'),
			() => import('./chunks/5-e9a41108.js'),
			() => import('./chunks/6-85236b55.js')
		],
		routes: [
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
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/[item]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"item","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/[item]/[page]",
				pattern: /^\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"item","optional":false,"rest":false,"chained":false},{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set(["/","/api/items"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
