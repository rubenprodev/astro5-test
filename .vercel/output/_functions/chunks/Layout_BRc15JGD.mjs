import { c as createComponent, a as createAstro, b as addAttribute, f as renderScript, r as renderTemplate, d as renderComponent, g as renderHead, h as renderSlot } from './astro/server_xDE1C0eR.mjs';
/* empty css                        */

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "F:/Projects/dev-books/node_modules/.pnpm/astro@5.3.1_jiti@2.4.2_ligh_3600a2cf69e74d2f8c2ccecae54295de/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "F:/Projects/dev-books/node_modules/.pnpm/astro@5.3.1_jiti@2.4.2_ligh_3600a2cf69e74d2f8c2ccecae54295de/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" class="scheme-dark" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- <meta name="generator" content={Astro.generator} /> --><title>Dev Books</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body class="p-20" data-astro-cid-sckkx6r4> <div data-astro-cid-sckkx6r4> <main data-astro-cid-sckkx6r4> <h1 class="text-center text-7xl font-extrabold mb-12" data-astro-cid-sckkx6r4> <a class="block" href="/" data-astro-cid-sckkx6r4>Dev 💻 books</a> </h1> <nav data-astro-cid-sckkx6r4> <ul class="flex space-x-4" data-astro-cid-sckkx6r4> <li data-astro-cid-sckkx6r4> <a href="/books" class="text-xl font-bold block" data-astro-cid-sckkx6r4>Books</a> </li> </ul> </nav> <section aria-label="main-content" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </section> </main> </div> </body></html>`;
}, "F:/Projects/dev-books/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
