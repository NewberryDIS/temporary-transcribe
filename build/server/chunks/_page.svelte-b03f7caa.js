import { c as create_ssr_component, a as subscribe, o as set_store_value, h as each, v as validate_component, l as add_attribute, e as escape } from './index3-9819b4e5.js';
import { C as ClickableTile$1, P as Progressbar } from './progressbar-f9ada82e.js';
import { p as pageTitle } from './stores-fdece1d9.js';
import './index2-c5b5abb6.js';

const css = {
  code: ".bx--tile{padding:0}.grid.svelte-1umlp0i{display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:16px}header.svelte-1umlp0i{height:200px;overflow:hidden}section.svelte-1umlp0i{padding:8px}img.svelte-1umlp0i{position:relative;top:-5%;left:-5%;width:120%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $pageTitle, $$unsubscribe_pageTitle;
  $$unsubscribe_pageTitle = subscribe(pageTitle, (value) => $pageTitle = value);
  let { data } = $$props;
  const { pages } = data;
  set_store_value(pageTitle, $pageTitle = data.item.title, $pageTitle);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_pageTitle();
  return `<div class="grid svelte-1umlp0i">${each(pages, (page, idx) => {
    return `${validate_component(ClickableTile$1, "ClickableTile").$$render($$result, { href: "/" + page.itemid + "/" + page.id }, {}, {
      default: () => {
        return `<header class="svelte-1umlp0i"><img${add_attribute("src", "https://digital.newberry.org/transcribe/omeka/files/square_thumbnails/" + page.omekafn, 0)} alt="" class="svelte-1umlp0i"></header>
			<section class="svelte-1umlp0i">page ${escape(idx + 1)}</section>
			<footer>${validate_component(Progressbar, "Progressbar").$$render($$result, { val: !!page.transcription }, {}, {})}</footer>
		`;
      }
    })}`;
  })}
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b03f7caa.js.map
