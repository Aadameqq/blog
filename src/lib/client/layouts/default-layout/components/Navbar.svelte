<script>
	import SocialIcons from './SocialIcons.svelte';
	import Link from '$lib/client/components/Link.svelte';
</script>

<header class="flex justify-between w-full h-[100px] items-center">
	<h2 class="text-2xl font-bold text-gray-200">Adam Bryndza</h2>
	<div class="flex items-center">
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
