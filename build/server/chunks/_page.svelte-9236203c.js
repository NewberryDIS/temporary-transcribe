import { c as create_ssr_component, a as subscribe, p as set_store_value, v as validate_component, l as add_attribute, e as escape, b as compute_rest_props, n as getContext, d as spread, f as escape_object, k as add_classes, m as missing_component, i as escape_attribute_value, o as compute_slots } from './index3-c748cfb5.js';
import { p as pageTitle } from './stores-e22ff41f.js';
import { p as page } from './stores2-76d2f0f4.js';
import Projection from 'ol/proj/Projection.js';
import { W as WarningFilled$1 } from './WarningFilled-1bbf974e.js';
import './index2-6d65d64c.js';

const ButtonSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "size"]);
  let { href = void 0 } = $$props;
  let { size = "default" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `
${href ? `<a${spread(
    [
      { href: escape_attribute_value(href) },
      {
        rel: escape_attribute_value($$restProps.target === "_blank" ? "noopener noreferrer" : void 0)
      },
      { role: "button" },
      escape_object($$restProps)
    ],
    {
      classes: "bx--skeleton bx--btn " + (size === "field" ? "bx--btn--field" : "") + " " + (size === "small" ? "bx--btn--sm" : "") + " " + (size === "lg" ? "bx--btn--lg" : "") + " " + (size === "xl" ? "bx--btn--xl" : "")
    }
  )}>${escape("")}</a>` : `<div${spread([escape_object($$restProps)], {
    classes: "bx--skeleton bx--btn " + (size === "field" ? "bx--btn--field" : "") + " " + (size === "small" ? "bx--btn--sm" : "") + " " + (size === "lg" ? "bx--btn--lg" : "") + " " + (size === "xl" ? "bx--btn--xl" : "")
  })}></div>`}`;
});
const ButtonSkeleton$1 = ButtonSkeleton;
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hasIconOnly;
  let buttonProps;
  let $$restProps = compute_rest_props($$props, [
    "kind",
    "size",
    "expressive",
    "isSelected",
    "icon",
    "iconDescription",
    "tooltipAlignment",
    "tooltipPosition",
    "as",
    "skeleton",
    "disabled",
    "href",
    "tabindex",
    "type",
    "ref"
  ]);
  let $$slots = compute_slots(slots);
  let { kind = "primary" } = $$props;
  let { size = "default" } = $$props;
  let { expressive = false } = $$props;
  let { isSelected = false } = $$props;
  let { icon = void 0 } = $$props;
  let { iconDescription = void 0 } = $$props;
  let { tooltipAlignment = "center" } = $$props;
  let { tooltipPosition = "bottom" } = $$props;
  let { as = false } = $$props;
  let { skeleton = false } = $$props;
  let { disabled = false } = $$props;
  let { href = void 0 } = $$props;
  let { tabindex = "0" } = $$props;
  let { type = "button" } = $$props;
  let { ref = null } = $$props;
  const ctx = getContext("ComposedModal");
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0)
    $$bindings.kind(kind);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.expressive === void 0 && $$bindings.expressive && expressive !== void 0)
    $$bindings.expressive(expressive);
  if ($$props.isSelected === void 0 && $$bindings.isSelected && isSelected !== void 0)
    $$bindings.isSelected(isSelected);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  if ($$props.tooltipAlignment === void 0 && $$bindings.tooltipAlignment && tooltipAlignment !== void 0)
    $$bindings.tooltipAlignment(tooltipAlignment);
  if ($$props.tooltipPosition === void 0 && $$bindings.tooltipPosition && tooltipPosition !== void 0)
    $$bindings.tooltipPosition(tooltipPosition);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.skeleton === void 0 && $$bindings.skeleton && skeleton !== void 0)
    $$bindings.skeleton(skeleton);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  {
    if (ctx && ref) {
      ctx.declareRef(ref);
    }
  }
  hasIconOnly = icon && !$$slots.default;
  buttonProps = {
    type: href && !disabled ? void 0 : type,
    tabindex,
    disabled: disabled === true ? true : void 0,
    href,
    "aria-pressed": hasIconOnly && kind === "ghost" && !href ? isSelected : void 0,
    ...$$restProps,
    class: [
      "bx--btn",
      expressive && "bx--btn--expressive",
      (size === "small" && !expressive || size === "sm" && !expressive || size === "small" && !expressive) && "bx--btn--sm",
      size === "field" && !expressive || size === "md" && !expressive && "bx--btn--md",
      size === "field" && "bx--btn--field",
      size === "small" && "bx--btn--sm",
      size === "lg" && "bx--btn--lg",
      size === "xl" && "bx--btn--xl",
      kind && `bx--btn--${kind}`,
      disabled && "bx--btn--disabled",
      hasIconOnly && "bx--btn--icon-only",
      hasIconOnly && "bx--tooltip__trigger",
      hasIconOnly && "bx--tooltip--a11y",
      hasIconOnly && tooltipPosition && `bx--btn--icon-only--${tooltipPosition}`,
      hasIconOnly && tooltipAlignment && `bx--tooltip--align-${tooltipAlignment}`,
      hasIconOnly && isSelected && kind === "ghost" && "bx--btn--selected",
      $$restProps.class
    ].filter(Boolean).join(" ")
  };
  return `
${skeleton ? `${validate_component(ButtonSkeleton$1, "ButtonSkeleton").$$render($$result, Object.assign({}, { href }, { size }, $$restProps, { style: hasIconOnly && "width: 3rem;" }), {}, {})}` : `${as ? `${slots.default ? slots.default({ props: buttonProps }) : ``}` : `${href && !disabled ? `
  <a${spread([escape_object(buttonProps)], {})}${add_attribute("this", ref, 0)}>${hasIconOnly ? `<span${add_classes("bx--assistive-text".trim())}>${escape(iconDescription)}</span>` : ``}
    ${slots.default ? slots.default({}) : ``}${validate_component(icon || missing_component, "svelte:component").$$render(
    $$result,
    {
      "aria-hidden": "true",
      class: "bx--btn__icon",
      "aria-label": iconDescription
    },
    {},
    {}
  )}</a>` : `<button${spread([escape_object(buttonProps)], {})}${add_attribute("this", ref, 0)}>${hasIconOnly ? `<span${add_classes("bx--assistive-text".trim())}>${escape(iconDescription)}</span>` : ``}
    ${slots.default ? slots.default({}) : ``}${validate_component(icon || missing_component, "svelte:component").$$render(
    $$result,
    {
      "aria-hidden": "true",
      class: "bx--btn__icon",
      style: hasIconOnly ? "margin-left: 0" : void 0,
      "aria-label": iconDescription
    },
    {},
    {}
  )}</button>`}`}`}`;
});
const Button$1 = Button;
const TextArea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let errorId;
  let $$restProps = compute_rest_props($$props, [
    "value",
    "placeholder",
    "cols",
    "rows",
    "maxCount",
    "light",
    "disabled",
    "readonly",
    "helperText",
    "labelText",
    "hideLabel",
    "invalid",
    "invalidText",
    "id",
    "name",
    "ref"
  ]);
  let $$slots = compute_slots(slots);
  let { value = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { cols = 50 } = $$props;
  let { rows = 4 } = $$props;
  let { maxCount = void 0 } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { readonly = false } = $$props;
  let { helperText = "" } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { invalid = false } = $$props;
  let { invalidText = "" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  let { ref = null } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.cols === void 0 && $$bindings.cols && cols !== void 0)
    $$bindings.cols(cols);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.maxCount === void 0 && $$bindings.maxCount && maxCount !== void 0)
    $$bindings.maxCount(maxCount);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0)
    $$bindings.readonly(readonly);
  if ($$props.helperText === void 0 && $$bindings.helperText && helperText !== void 0)
    $$bindings.helperText(helperText);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.invalidText === void 0 && $$bindings.invalidText && invalidText !== void 0)
    $$bindings.invalidText(invalidText);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  errorId = `error-${id}`;
  return `

<div${add_classes("bx--form-item".trim())}>${(labelText || $$slots.labelText) && !hideLabel ? `<div${add_classes("bx--text-area__label-wrapper".trim())}><label${add_attribute("for", id, 0)}${add_classes(("bx--label " + (hideLabel ? "bx--visually-hidden" : "") + " " + (disabled ? "bx--label--disabled" : "")).trim())}>${slots.labelText ? slots.labelText({}) : `
          ${escape(labelText)}
        `}</label>
      ${maxCount ? `<div${add_classes(("bx--label " + (disabled ? "bx--label--disabled" : "")).trim())}>${escape(value.length)}/${escape(maxCount)}</div>` : ``}</div>` : ``}
  <div${add_attribute("data-invalid", invalid || void 0, 0)}${add_classes("bx--text-area__wrapper".trim())}>${invalid ? `${validate_component(WarningFilled$1, "WarningFilled").$$render($$result, { class: "bx--text-area__invalid-icon" }, {}, {})}` : ``}
    <textarea${spread(
    [
      {
        "aria-invalid": escape_attribute_value(invalid || void 0)
      },
      {
        "aria-describedby": escape_attribute_value(invalid ? errorId : void 0)
      },
      { disabled: disabled || null },
      { id: escape_attribute_value(id) },
      { name: escape_attribute_value(name) },
      { cols: escape_attribute_value(cols) },
      { rows: escape_attribute_value(rows) },
      {
        placeholder: escape_attribute_value(placeholder)
      },
      { readonly: readonly || null },
      {
        maxlength: escape_attribute_value(maxCount ?? void 0)
      },
      escape_object($$restProps)
    ],
    {
      classes: "bx--text-area " + (light ? "bx--text-area--light" : "") + " " + (invalid ? "bx--text-area--invalid" : "")
    }
  )}${add_attribute("this", ref, 0)}>${value || ""}</textarea></div>
  ${!invalid && helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "")).trim())}>${escape(helperText)}</div>` : ``}
  ${invalid ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``}</div>`;
});
const TextArea$1 = TextArea;
const css$1 = {
  code: "#map.svelte-mdrzcn{border:1px solid var(--cds-ui-04);height:80vh}.ol-overlaycontainer-stopevent{width:auto !important}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src = "", resolution = 0 } = $$props;
  const extent = [0, 0, resolution[0], resolution[1]];
  new Projection({
    code: "Newberry Transcribe Page Image",
    units: "pixels",
    extent
  });
  let mapContainer;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.resolution === void 0 && $$bindings.resolution && resolution !== void 0)
    $$bindings.resolution(resolution);
  $$result.css.add(css$1);
  return `<div id="map" class="svelte-mdrzcn"${add_attribute("this", mapContainer, 0)}></div>`;
});
const css = {
  code: ".toaster.svelte-fz7eu9{position:absolute;bottom:32px;right:32px}.buttons.svelte-fz7eu9{width:100%;display:flex;justify-content:center;align-items:center}.buttonifier.svelte-fz7eu9{margin:8px;max-width:none;width:200px}.buttonifier.next.svelte-fz7eu9{text-align:right}.active-button.svelte-fz7eu9:hover{color:var(--cds-text-04);background-color:var(--cds-hover-primary)}.active-button.svelte-fz7eu9{color:var(--cds-text-04);background-color:var(--cds-interactive-01)}.disabled-button.svelte-fz7eu9{background:var(--cds-disabled-02);border-color:var(--cds-disabled-02);cursor:not-allowed;color:var(--cds-disabled-03)}.trapper.svelte-fz7eu9{display:flex;height:85vh;justify-content:center;align-items:stretch}.imgpper.svelte-fz7eu9,.transbox.svelte-fz7eu9{margin:32px;flex:1;display:flex;flex-direction:column;height:100%}.transbox.svelte-fz7eu9{justify-content:center;align-items:stretch}.transform button{float:right}.transform > *{margin:16px}.bx--form-item, .bx--text-area__wrapper{flex:1;height:80%}.imgpper.svelte-fz7eu9{width:100%}.helper.svelte-fz7eu9{color:var(--cds-text-02);font-size:var(--cds-label-01-font-size);text-align:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $pageTitle, $$unsubscribe_pageTitle;
  let $htmlPage, $$unsubscribe_htmlPage;
  $$unsubscribe_pageTitle = subscribe(pageTitle, (value2) => $pageTitle = value2);
  $$unsubscribe_htmlPage = subscribe(page, (value2) => $htmlPage = value2);
  let { data } = $$props;
  const { prev, page: page$1, next, item } = data;
  let value = page$1.transcription && page$1.transcription.length ? page$1.transcription : "";
  set_store_value(pageTitle, $pageTitle = "Transcribing " + item.title, $pageTitle);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $htmlPage.params.page == page$1.id;
    $$rendered = `<div class="trapper svelte-fz7eu9"><div class="imgpper svelte-fz7eu9">${validate_component(Image, "Image").$$render(
      $$result,
      {
        src: "https://digital.newberry.org/transcribe/omeka/files/original/" + page$1.omekafn,
        resolution: [page$1.resx, page$1.resy]
      },
      {},
      {}
    )}
		<p class="helper svelte-fz7eu9">hold Alt + Shift and Drag to Rotate</p>
		<div class="buttons svelte-fz7eu9"><a${add_attribute("href", prev ? prev.id : "", 0)} class="${"buttonifier bx--btn bx--btn-primary " + escape(prev ? "active-button" : "disabled-button", true) + " svelte-fz7eu9"}"${add_attribute(
      "title",
      prev ? "Previous page" : "You're on the first page.  No previous page available!",
      0
    )}>Previous</a>
			<a${add_attribute("href", next ? next.id : "", 0)} class="${"buttonifier bx--btn bx--btn-primary next " + escape(next ? "active-button" : "disabled-button", true) + " svelte-fz7eu9"}"${add_attribute(
      "title",
      next ? "Next page" : "You're on the last page.  No next page available!",
      0
    )}>Next</a></div></div>
	<div class="transbox svelte-fz7eu9">${validate_component(TextArea$1, "TextArea").$$render(
      $$result,
      {
        labelText: $pageTitle,
        placeholder: "Type what you see!",
        helperText: "more descriptive text down here maybe",
        value
      },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        }
      },
      {}
    )}
		${validate_component(Button$1, "Button").$$render($$result, { type: "submit" }, {}, {
      default: () => {
        return `Submit`;
      }
    })}

		${``}</div>
</div>`;
  } while (!$$settled);
  $$unsubscribe_pageTitle();
  $$unsubscribe_htmlPage();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-9236203c.js.map
