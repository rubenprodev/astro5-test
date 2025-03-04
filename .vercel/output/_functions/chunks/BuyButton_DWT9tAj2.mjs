import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_xDE1C0eR.mjs';

const $$Astro = createAstro();
const $$BuyButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BuyButton;
  const SPAIN = "ES";
  const country = Astro2.request.headers.get("X-Vercel-IP-Country") ?? SPAIN;
  const storeCountry = country === SPAIN ? "spain" : "row";
  const countryName = country === SPAIN ? "Spain" : "Rest of the World";
  const { buy } = Astro2.props;
  const url = buy[storeCountry];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} title="Buy on Amazon" class="bg-blue-500 text-white px-4 py-2 rounded-lg inline-flex my-2" target="_blank" rel="noopener noreferrer">
Buy on Amazon ${countryName} </a>`;
}, "F:/Projects/dev-books/src/components/BuyButton.astro", void 0);

const $$file = "F:/Projects/dev-books/src/components/BuyButton.astro";
const $$url = undefined;

export { $$BuyButton as default, $$file as file, $$url as url };
