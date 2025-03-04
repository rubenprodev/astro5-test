import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from './astro/server_xDE1C0eR.mjs';
import { s as setOnSetGetEnv } from './runtime_BaX0UJyD.mjs';

// @ts-check

setOnSetGetEnv(() => {
	
});
const SCORE_API_ENDPOINT = "https://random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new";

const $$BookScore = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch(SCORE_API_ENDPOINT);
  const scoreValue = await res.text();
  return renderTemplate`${maybeRenderHead()}<div class="text-xs" id="score">
⭐ Score: ${scoreValue.trim()}/5
</div>`;
}, "F:/Projects/dev-books/src/components/BookScore.astro", void 0);

const $$file = "F:/Projects/dev-books/src/components/BookScore.astro";
const $$url = undefined;

export { $$BookScore as default, $$file as file, $$url as url };
