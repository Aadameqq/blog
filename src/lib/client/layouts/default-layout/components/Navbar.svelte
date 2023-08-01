<script lang="ts">
	import SocialIcons from './SocialIcons.svelte';
	import Link from '$lib/client/components/Link.svelte';
	import { routes } from '$lib/client/config/routes';
</script>

<header class="flex justify-between w-full pt-4 laptop:pt-9 pb-4 laptop:pb-9 items-center">
	<nav>
		<div class="flex w-full laptop:w-auto items-center">
			<h2
				class="text-xl font-bold text-gray-200 desktop:text-2xl hover:text-zinc-400 transition duration-300 ease-in-out"
			>
				<Link url={routes.blog({})}>Adam Bryndza</Link>
			</h2>
		</div>
	</nav>
	<span class="ml-7">
		<SocialIcons iconClass="text-2xl" />
	</span>
</header>
