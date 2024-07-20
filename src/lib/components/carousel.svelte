<script lang="ts">
  export let images: string[];

  let currentIndex = 0;
  let touchStartX = 0;

  function next() {
    currentIndex = (currentIndex + 1) % images.length;
  }

  function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "ArrowRight") {
      next();
    } else if (event.key === "ArrowLeft") {
      prev();
    }
  }

  function handleTouchStart(event: TouchEvent) {
    touchStartX = event.touches[0].clientX;
  }

  function handleTouchEnd(event: TouchEvent) {
    const touchEndX = event.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
      next();
    } else if (touchStartX - touchEndX < -50) {
      prev();
    }
  }
</script>

<div
  class="carousel relative w-full h-full p-24 md:p-8"
  role="region"
  aria-label="Image carousel"
>
  {#each images as image, index}
    <img
      src={image}
      alt="habit film"
      class="{index === currentIndex
        ? 'center'
        : index === (currentIndex - 1 + images.length) % images.length
          ? 'left'
          : index === (currentIndex + 1) % images.length
            ? 'right'
            : ''} h-[400px] max-w-full md:h-[520px] rounded-xl"
      aria-hidden={index !== currentIndex}
    />
  {/each}
  <button
    on:click={prev}
    on:keydown={handleKeydown}
    on:touchstart={handleTouchStart}
    on:touchend={handleTouchEnd}
    class="left"
    aria-label="Previous image"
    tabindex="0"
  ></button>
  <button
    on:click={next}
    on:keydown={handleKeydown}
    on:touchstart={handleTouchStart}
    on:touchend={handleTouchEnd}
    class="right"
    aria-label="Next image"
    tabindex="0"
  ></button>
</div>

<style>
  .carousel {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
  }
  .carousel img {
    position: absolute;
    transition:
      transform 0.5s ease,
      opacity 0.5s ease;
    opacity: 0;
  }
  .carousel img.center {
    transform: translateX(0) rotate(0deg);
    z-index: 3;
    opacity: 1;
  }
  .carousel img.left {
    transform: translateX(-20%) scale(0.9) rotate(-3deg);
    z-index: 2;
    opacity: 0.5;
  }
  .carousel img.right {
    transform: translateX(20%) scale(0.9) rotate(4deg);
    z-index: 2;
    opacity: 0.5;
  }
  .carousel button {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50%;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 4;
  }
  .carousel button.left {
    left: 0;
  }
  .carousel button.right {
    right: 0;
  }
</style>
