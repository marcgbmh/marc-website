import { json } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";
import type { Note } from "$lib/types";

async function getNotes(): Promise<Note[]> {
  const notes: Note[] = [];
  const paths = import.meta.glob("/src/notes/*.md");

  for (const path in paths) {
    if (Object.prototype.hasOwnProperty.call(paths, path)) {
      const loadFile = paths[path];
      const file = await loadFile();
      const slug = path.split("/").at(-1)?.replace(".md", "");

      if (file && typeof file === "object" && "metadata" in file && slug) {
        const metadata = file.metadata as Omit<Note, "slug">;
        const note: Note = { ...metadata, slug };
        notes.push(note);
      }
    }
  }

  notes.sort(
    (first, second) =>
      new Date(first.date).getTime() - new Date(second.date).getTime()
  );

  return notes;
}

export const GET: RequestHandler = async () => {
  const notes = await getNotes();
  return json(notes);
};
