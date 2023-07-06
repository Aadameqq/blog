<script lang="ts">
	import Navbar from '$lib/client/layouts/default-layout/components/Navbar.svelte';
	import Footer from '$lib/client/layouts/default-layout/components/Footer.svelte';
</script>

<div class="ml-20 mr-20">
	<Navbar />
	<div class="ml-10 mr-10 min-h-screen" style="min-height: calc(100vh - 180px)">
		<br />
		<br />
		<br />
		<br />
		<br />
		<slot />
	</div>
	<Footer />
</div>
