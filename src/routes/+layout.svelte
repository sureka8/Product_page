<script>
    import "../app.css";

  </script>
  <nav>
    <header class="flex flex-col p-3">
      <div class="max-w-[1400px] max-auto w-full  items-center justify-between flex flex-row">
   <a href="/">
      <h1 class="font-semibold text-primary">logo</h1>
  </a>
  <button class="md:hidden grid place-items-center">
      <i class="fa-solid fa-bars text-primary"></i>
  </button>
  <nav class="md:flex items-center gap-5 hidden text-lg">
      <a  href="/" class="duration-200 hover:text-primary cursor-pointer">Home</a>
      <a href="/"  class="duration-200 hover:text-primary cursor-pointer">Product</a>
      <a href="/"  class="duration-200 hover:text-primary cursor-pointer">Service</a>
  </nav>
  <div class="space-x-4 md:flex hidden">
      <button><i class="fa-solid fa-cart-shopping text-primary"></i></button>
      <button ><i class="fa-solid fa-user text-primary"></i></button>
     
  </div>
      </div>
  </header>
  </nav>
  <slot />