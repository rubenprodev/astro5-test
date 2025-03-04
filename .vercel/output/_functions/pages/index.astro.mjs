import { c as createComponent, d as renderComponent, r as renderTemplate } from '../chunks/astro/server_xDE1C0eR.mjs';
import { $ as $$Layout } from '../chunks/Layout_BRc15JGD.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`
Main content
` })}`;
}, "F:/Projects/dev-books/src/pages/index.astro", void 0);

const $$file = "F:/Projects/dev-books/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
