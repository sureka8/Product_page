
<script>
	import { paginate, LightPaginationNav } from 'svelte-paginate'
	export let data;
	
	const { products } = data;

	let searchTerm = "";
 


 


let selectedcat="all";

$: filtered =
      selectedcat === "all"
        ? products
        : products.filter((item) => item.category === selectedcat)
		
		;

		

function filterByCategory(category){
selectedcat=category
  }

  let items = filtered  || []
  let currentPage = 1;
  let pageSize = 9;
  $: paginatedItems = paginate({ items, pageSize, currentPage });

 
	
</script>


 <div class="bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
	<div class="mt-4 space-y-3 space-x-5">
		<div class="max-w-screen-2xl mx-auto container xl:px-24 px-4">
			<div class="flex flex-col md:flex-row md:justify-between items-center flex-wrap">
				<div class="flex md:flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap mt-5">
					
						
					
					<button class="hover:text-primary" on:click={() =>filterByCategory("all") }>All</button>
					<button class="hover:text-primary" on:click={() => filterByCategory("smartphones")}>smartphones</button>
					<button class="hover:text-primary"  on:click={() => filterByCategory("laptops")}>laptops</button>
					<button class="hover:text-primary"  on:click={() => filterByCategory("fragrances")}>fragrances</button>
					<button class="hover:text-primary"  on:click={() => filterByCategory("skincare")}>skincare</button>
					<button class="hover:text-primary"  on:click={() => filterByCategory("groceries")}>groceries</button>
					<button class="hover:text-primary"  on:click={() => filterByCategory("home-decoration")}>home-decoration</button>
					
				</div>
				<div class="p-1 mt-2">
					<input class="p-2 bg-w rounded-xl border-2" type="search" placeholder="search.." 
					bind:value={searchTerm}
                    />
					<i class="fa-solid fa-magnifying-glass"></i>
				</div>
			</div>
		</div>
		<div
			class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 my-2 mt-20 sm:justify-items-center"
		>
		
			{#each filtered as products}
			
				<div class="card w-80 bg-base-100 shadow-xl rounded-xl mt-20">
					<figure class="flex justify-center items-center">
						<img
							src={products.thumbnail}
							alt="Shoes"
							class="hover:scale-105 transition-all md:h-52 h-56 w-56 rounded-full"
						/>
					</figure>

					<div class="text-md text-center mt-10 gap-4">
						<h1>{products.title}</h1>
						<p>${products.price}</p>
						<p>Brand:{products.brand}</p>
						<p>{products.category}</p>
						<div class="flex card-actions justify-end">
							<button
								class=" hover:scale-105 transition-all btn btn-primary py-2 px-3 rounded-lg bg-primary text-white m-4"
								>Buy Now</button
							>
						</div>
					</div>
				</div>
				
			{/each}
			
		</div>
	</div>
</div> 

<LightPaginationNav
  totalItems="{items.length}"
  pageSize="{pageSize}"
  currentPage="{currentPage}"
  limit="{1}"
  showStepOptions="{true}"
  on:setPage="{(e) => currentPage = e.detail.page}"
/>
