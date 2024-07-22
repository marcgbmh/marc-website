import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import rehypeExternalLinks from "rehype-external-links";
import remarkBreaks from "remark-breaks";

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: [".svelte", ".md"],
  remarkPlugins: [remarkBreaks],
  rehypePlugins: [
    [rehypeExternalLinks, { target: "_blank", rel: "noopener noreferrer" }],
  ],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  kit: {
    adapter: adapter(),
  },
};

export default config;
