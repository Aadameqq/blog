<script lang="ts">
	import Navbar from '$lib/client/layouts/default-layout/components/Navbar.svelte';
	import Footer from '$lib/client/layouts/default-layout/components/Footer.svelte';
</script>

<div
	class="ml-5 laptop:ml-20 mr-5 laptop:mr-20 min-h-screen flex flex-col justify-between items-center"
>
	<div class="w-full flex flex-col items-center">
		<Navbar />
		<div class="ml-0 laptop:px-10 mr-0 w-full max-w-6xl mt-20 mb-20">
			<slot />
		</div>
	</div>
	<Footer />
</div>
