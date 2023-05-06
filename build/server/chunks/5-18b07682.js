const load = async ({ fetch, params }) => {
  let response = await fetch(`/api/page?pageid=${params.page}&itemid=${params.item}`);
  let pageData = await response.json();
  if (pageData.page && pageData.page.transcription && pageData.page.transcription.indexOf("\\n") > -1) {
    pageData.page.transcription = pageData.page.transcription.replaceAll(/\\\\n/g, "\n");
  }
  return pageData;
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
const component = async () => (await import('./_page.svelte-933ae1bd.js')).default;
const server_id = "src/routes/[item]/[page]/+page.server.ts";
const imports = ["_app/immutable/nodes/5.730b582f.js","_app/immutable/chunks/index.c29d431c.js","_app/immutable/chunks/stores.ce99d9d4.js","_app/immutable/chunks/index.54bd3c82.js","_app/immutable/chunks/stores.642a58ee.js","_app/immutable/chunks/singletons.e89cd7c6.js","_app/immutable/chunks/WarningAltFilled.c4e6bd6f.js"];
const stylesheets = ["_app/immutable/assets/5.eb15ab0a.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=5-18b07682.js.map
