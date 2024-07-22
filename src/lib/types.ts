export type Categories = "sveltekit" | "svelte";

export type Note = {
  title: string;
  description: string;
  date: string;
  categories: Categories[];
  published: boolean;
  slug: string;
  content: string;
};
