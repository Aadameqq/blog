<script>
	import SocialIcons from './SocialIcons.svelte';
	import Link from '$lib/client/components/Link.svelte';

	let isMenuOpen = false;
</script>

<header
	class="flex laptop:justify-between w-full pt-4 laptop:pt-9 pb-4 laptop:pb-9 laptop:items-center flex-col laptop:flex-row justify-center"
>
	<span class="flex justify-between w-full laptop:w-auto">
		<h2 class="text-2xl font-bold text-gray-200 desktop:text-3xl">Adam Bryndza</h2>
		<button
			class="laptop:hidden"
			on:click={() => (isMenuOpen = !isMenuOpen)}
			aria-expanded={isMenuOpen}
		>
			<span class="visually-hidden">Open menu</span>
			<span class="bi bi-list text-3xl text-gray-300" aria-hidden="true" aria-controls=""
				><!-- --></span
			>
		</button>
	</span>
	<div class="items-center laptop:flex {!isMenuOpen ? 'hidden' : 'h-screen'}">
		<nav>
			<ol class="flex items-center text-gray-300 text-lg desktop:text-xl">
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
