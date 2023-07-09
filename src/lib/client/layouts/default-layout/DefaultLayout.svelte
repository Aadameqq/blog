<script lang="ts">
	import Navbar from '$lib/client/layouts/default-layout/components/Navbar.svelte';
	import Footer from '$lib/client/layouts/default-layout/components/Footer.svelte';
</script>

<div class="ml-20 mr-20 min-h-screen flex flex-col justify-between">
	<Navbar />
	<div class="ml-10 mr-10">
		<slot />
	</div>
	<Footer />
</div>
