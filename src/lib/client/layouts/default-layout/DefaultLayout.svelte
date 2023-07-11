<script lang="ts">
	import Navbar from '$lib/client/layouts/default-layout/components/Navbar.svelte';
	import Footer from '$lib/client/layouts/default-layout/components/Footer.svelte';
</script>

<div
	class="ml-5 desktop:ml-20 mr-5 desktop:mr-20 min-h-screen flex flex-col justify-between items-center"
>
	<Navbar />
	<div class="ml-0 desktop:ml-10 mr-0 desktop:mr-10 max-w-7xl">
		<slot />
	</div>
	<Footer />
</div>
