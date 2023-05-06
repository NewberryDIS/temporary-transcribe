const load = async ({ fetch }) => {
  const response = await fetch("/api/items");
  const items = await response.json();
  return { data: items };
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
const component = async () => (await import('./_page.svelte-41b8943b.js')).default;
const universal_id = "src/routes/+page.ts";
const imports = ["_app/immutable/nodes/3.4b1c33a3.js","_app/immutable/chunks/index.c29d431c.js","_app/immutable/chunks/stores.ce99d9d4.js","_app/immutable/chunks/index.54bd3c82.js","_app/immutable/chunks/progressbar.8fbbfb9d.js"];
const stylesheets = ["_app/immutable/assets/3.9778b866.css","_app/immutable/assets/progressbar.f0f95f03.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=3-49315a25.js.map
