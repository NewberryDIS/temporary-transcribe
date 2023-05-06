import { c as create_ssr_component, a as subscribe, o as set_store_value, h as each, v as validate_component, l as add_attribute, e as escape } from './index3-9819b4e5.js';
import { p as pageTitle } from './stores-fdece1d9.js';
import { C as ClickableTile$1, P as Progressbar } from './progressbar-f9ada82e.js';
import './index2-c5b5abb6.js';

const css = {
  code: ".bx--tile{padding:0}.tile-liner.svelte-1ixttid.svelte-1ixttid{height:100%;display:flex;flex-direction:column;justify-content:space-between;align-items:stretch}.tile-liner.svelte-1ixttid section.svelte-1ixttid{flex:1}.grid.svelte-1ixttid.svelte-1ixttid{display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:16px}header.svelte-1ixttid.svelte-1ixttid{height:200px;overflow:hidden}img.svelte-1ixttid.svelte-1ixttid{position:relative;top:-5%;left:-5%;width:120%}.title.svelte-1ixttid.svelte-1ixttid{font-size:1.1rem;font-weight:bold}.pagecount.svelte-1ixttid.svelte-1ixttid{font-size:0.8rem}.desc.svelte-1ixttid.svelte-1ixttid{font-size:0.9rem}.title.svelte-1ixttid.svelte-1ixttid,.pagecount.svelte-1ixttid.svelte-1ixttid,.desc.svelte-1ixttid.svelte-1ixttid{margin:8px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $pageTitle, $$unsubscribe_pageTitle;
  $$unsubscribe_pageTitle = subscribe(pageTitle, (value) => $pageTitle = value);
  let { data } = $$props;
  const items = data.data.sort((a, b) => {
    return a.featured === b.featured ? parseInt(a.percentComplete) - parseInt(b.percentComplete) : a.featured ? -1 : 1;
  });
  set_store_value(pageTitle, $pageTitle = "Newberry Transcribe", $pageTitle);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_pageTitle();
  return `<div class="grid svelte-1ixttid">${each(items, (item) => {
    return `${validate_component(ClickableTile$1, "ClickableTile").$$render($$result, { href: "/" + item.id }, {}, {
      default: () => {
        return `<div class="tile-liner svelte-1ixttid"><header class="svelte-1ixttid"><img${add_attribute("src", item.image.replace("/original/", "/square_thumbnails/"), 0)} alt="" class="svelte-1ixttid"></header>
				<section class="svelte-1ixttid"><h3 class="title svelte-1ixttid">${escape(item.title)}</h3>
					<p class="pagecount svelte-1ixttid">${escape(item.pagecount)} pages.</p>
					<p class="desc svelte-1ixttid">${escape(item.description)}</p></section>
				<footer>${validate_component(Progressbar, "Progressbar").$$render($$result, { val: item.percentComplete }, {}, {})}
				</footer></div>
		`;
      }
    })}`;
  })}
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-41b8943b.js.map
