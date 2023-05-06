const load = async ({ fetch, params }) => {
  const pageresponse = await fetch(`/api/pages?itemid=${params.item}`);
  const pages = await pageresponse.json();
  return pages;
};

var _layout_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
const component = async () => (await import('./layout.svelte-d40a71d3.js')).default;
const universal_id = "src/routes/[item]/+layout.ts";
const imports = ["_app/immutable/nodes/2.cd465db6.js","_app/immutable/chunks/index.c29d431c.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _layout_ts as universal, universal_id };
//# sourceMappingURL=2-0942a4af.js.map
