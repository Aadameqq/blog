<script>
	import Link from '$lib/client/components/Link.svelte';
</script>

<main class="flex justify-center items-center flex-col h-screen">
	<p
		class="text-[10rem] text-gray-700 font-bold leading-none font-numbers mr-4 desktop:text-[14rem] contrast-more:text-gray-400"
	>
		<span class="visually-hidden">Error code: </span>404
	</p>
	<h1 class="text-3xl text-gray-200 pb-4 desktop:pb-6 desktop:text-5xl">Not Found</h1>
	<span
		class="text-gray-400 contrast-more:text-gray-300 underline underline-offset-2 desktop:text-lg"
	>
		<Link>Go to home page</Link>
	</span>
</main>
