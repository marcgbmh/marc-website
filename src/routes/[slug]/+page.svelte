<script lang="ts">
  export let data;
</script>

<svelte:head>
  {#if data.meta}
    <title>{data.meta.title}</title>
    <meta name="description" content={data.meta.description} />
    <meta property="og:title" content={data.meta.title} />
    <meta property="og:description" content={data.meta.description} />
    <meta property="og:image" content={data.meta.thumbnail} />
    <meta property="og:url" content={data.meta.url} />
    <meta name="twitter:card" content={data.meta.thumbnail} />
    <meta name="twitter:title" content={data.meta.title} />
    <meta name="twitter:description" content={data.meta.description} />
    <meta name="twitter:image" content={data.meta.thumbnail} />
  {/if}
</svelte:head>

<article>
  <hgroup>
    {#if data.meta}
      <h1 class="text-lg mb-3 font-bold">{data.meta.title}</h1>
    {/if}
  </hgroup>
  <div class="whitespace-normal markdown">
    <svelte:component this={data.content} />
  </div>
</article>
