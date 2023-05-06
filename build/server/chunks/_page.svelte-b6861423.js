import { c as create_ssr_component, e as escape, b as compute_rest_props, v as validate_component, o as compute_slots, d as spread, f as escape_object, l as add_attribute, k as add_classes, m as missing_component, i as escape_attribute_value, a as subscribe, p as set_store_value, h as each } from './index3-c748cfb5.js';
import { p as pageTitle } from './stores-e22ff41f.js';
import './index2-6d65d64c.js';

const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "href", "inline", "icon", "disabled", "visited", "ref"]);
  let $$slots = compute_slots(slots);
  let { size = void 0 } = $$props;
  let { href = void 0 } = $$props;
  let { inline = false } = $$props;
  let { icon = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { visited = false } = $$props;
  let { ref = null } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.visited === void 0 && $$bindings.visited && visited !== void 0)
    $$bindings.visited(visited);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `
${disabled ? `<p${spread([escape_object($$restProps)], {
    classes: "bx--link " + (disabled ? "bx--link--disabled" : "") + " " + (inline ? "bx--link--inline" : "") + " " + (visited ? "bx--link--visited" : "")
  })}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}
    ${!inline && ($$slots.icon || icon) ? `<div${add_classes("bx--link__icon".trim())}>${slots.icon ? slots.icon({}) : `
          ${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
        `}</div>` : ``}</p>` : `<a${spread(
    [
      {
        rel: escape_attribute_value($$restProps.target === "_blank" ? "noopener noreferrer" : void 0)
      },
      { href: escape_attribute_value(href) },
      escape_object($$restProps)
    ],
    {
      classes: "bx--link " + (disabled ? "bx--link--disabled" : "") + " " + (inline ? "bx--link--inline" : "") + " " + (visited ? "bx--link--visited" : "") + " " + (size === "sm" ? "bx--link--sm" : "") + " " + (size === "lg" ? "bx--link--lg" : "")
    }
  )}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}
    ${!inline && ($$slots.icon || icon) ? `<div${add_classes("bx--link__icon".trim())}>${slots.icon ? slots.icon({}) : `
          ${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
        `}</div>` : ``}</a>`}`;
});
const Link$1 = Link;
const ClickableTile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["clicked", "light", "disabled", "href"]);
  let { clicked = false } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { href = void 0 } = $$props;
  if ($$props.clicked === void 0 && $$bindings.clicked && clicked !== void 0)
    $$bindings.clicked(clicked);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `${validate_component(Link$1, "Link").$$render(
    $$result,
    Object.assign(
      {},
      $$restProps,
      { disabled },
      {
        class: "bx--tile bx--tile--clickable " + (clicked && "bx--tile--is-clicked") + " " + (light && "bx--tile--light") + " " + $$restProps.class
      },
      { href }
    ),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const ClickableTile$1 = ClickableTile;
const css$1 = {
  code: "p.svelte-4g4pw0{border:1px solid var(--colorFour);text-align:center}",
  map: null
};
const Progressbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { val } = $$props;
  let percentage = 0;
  if (typeof val === "boolean") {
    percentage = val ? 100 : 0;
  } else if (typeof val === "object") {
    percentage = Math.round(val[0] / val[1] * 1e4) / 100;
  } else {
    percentage = val;
  }
  const completionText = percentage === 100 ? "Complete!" : percentage + "%";
  if ($$props.val === void 0 && $$bindings.val && val !== void 0)
    $$bindings.val(val);
  $$result.css.add(css$1);
  return `<p style="${"background: linear-gradient(90deg, var(--colorFour) 0%, var(--colorFour) " + escape(percentage, true) + "%, rgba(5,90,175,0) " + escape(percentage, true) + "%, rgba(0,212,255,0) 100%);"}" class="svelte-4g4pw0">${escape(completionText)}
</p>`;
});

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
//# sourceMappingURL=_page.svelte-b6861423.js.map
