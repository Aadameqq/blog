<script>
	import SocialIcons from './SocialIcons.svelte';
	import Link from '$lib/client/components/Link.svelte';

	let isMenuOpen = false;
</script>

<header
	class="flex desktop:justify-between w-full pt-4 desktop:pt-9 pb-4 desktop:pb-9 desktop:items-center flex-col desktop:flex-row justify-center"
>
	<span class="flex justify-between w-full desktop:w-auto">
		<h2 class="text-2xl font-bold text-gray-200">Adam Bryndza</h2>
		<button
			class="desktop:hidden"
			on:click={() => (isMenuOpen = !isMenuOpen)}
			aria-expanded={isMenuOpen}
		>
			<span class="visually-hidden">Open menu</span>
			<span class="bi bi-list text-3xl text-gray-300" aria-hidden="true" aria-controls=""
				><!-- --></span
			>
		</button>
	</span>
	<div class="items-center desktop:flex {!isMenuOpen ? 'hidden' : 'h-screen'}">
		<nav>
			<ol class="flex items-center text-gray-300 text-lg">
				<li>
					<Link>Home</Link>
				</li>
			</ol>
		</nav>
		<span class="ml-7">
			<SocialIcons />
		</span>
	</div>
</header>
