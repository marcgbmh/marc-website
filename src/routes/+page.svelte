<script lang="ts">
  import Navbar from "$lib/components/navbar.svelte";
  import Carousel from "$lib/components/carousel.svelte";
  import Footer from "$lib/components/footer.svelte";

  let images = [
    "/screenshot1.jpg",
    "/screenshot2.png",
    "/screenshot3.png",
    "/screenshot4.png",
    "/screenshot5.jpg",
    "/screenshot6.jpg",
    "/screenshot7.jpg",
    "/screenshot8.jpg",
    "/screenshot9.png",
  ];
</script>

<Navbar />

<section
  class="bg-background container mx-auto flex flex-col md:flex-row h-screen text-primary p-4 md:p-20 gap-4 items-center justify-center max-w-screen-lg"
>
  <div class="flex flex-col justify-center w-full md:w-1/2 mb-8 md:mb-0">
    <div class="text-center md:text-left max-w-lg mx-auto md:mx-0">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        build habits by filming <br />2 seconds a day.
      </h2>
      <button
        class="underline text-primary font-bold text-xl rounded text-stroke mt-4 md:mt-4 transition-colors"
      >
        get the app
      </button>
    </div>
  </div>
  <div class="flex justify-center w-full md:w-1/2 mt-8 md:mt-0">
    <Carousel {images} />
  </div>
</section>

<Footer />
