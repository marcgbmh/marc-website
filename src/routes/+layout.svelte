<script>
  import "../app.css";
  import Navbar from "$lib/components/navbar.svelte";
</script>

<div class="flex">
  <Navbar />
  <div class="flex-1 p-4">
    <slot></slot>
  </div>
</div>
