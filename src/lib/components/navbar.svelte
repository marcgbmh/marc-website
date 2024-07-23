<script lang="ts">
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import type { Note } from "$lib/types";

  let notes: Note[] = [];
  let currentSlug: string = "";

  onMount(async () => {
    const response = await fetch("/api/notes");
    notes = await response.json();
    currentSlug = window.location.pathname.slice(1);
  });

  function navigateToHome() {
    goto("/");
  }

  function navigateToPost(slug: string) {
    goto(`/${slug}`);
  }
</script>

<aside class="top-0 left-0 h-full w-56 bg-background p-4">
  <ul>
    <li class="mb-2 flex items-center gap-2">
      <div class="h-2 w-2 rounded-full bg-green-800"></div>
      <button on:click={navigateToHome}>marc</button>
    </li>
    {#each notes as note}
      <li class="mb-2">
        <button
          on:click={() => navigateToPost(note.slug)}
          class:text-black={$page.url.pathname === `/${note.slug}`}
          >{note.title}</button
        >
      </li>
    {/each}
  </ul>
</aside>
