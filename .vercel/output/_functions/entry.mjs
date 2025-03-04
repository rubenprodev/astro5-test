import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BgY5T9Wk.mjs';
import { manifest } from './manifest_Dgc2aY3x.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_BOqI-swI.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_DWT9tAj2.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/books/_id_.astro.mjs');
const _page2 = () => import('./pages/books.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.3.1_jiti@2.4.2_ligh_3600a2cf69e74d2f8c2ccecae54295de/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/books/[id].astro", _page1],
    ["src/pages/books/index.astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "7b91bb43-9f20-4647-9252-a69331cfcdf9",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
