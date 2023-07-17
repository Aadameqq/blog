<script>
	import Link from '$lib/client/components/Link.svelte';

	export let categories;
	export let currentCategorySlug;
	export let generateUrl;

	$: isCurrentCategory = currentCategorySlug === categories.slug;
</script>

<nav>
	<span class="visually-hidden">Categories: </span>
	<ul>
		{#each categories as category (category.slug)}
			<li>
				<Link
					url={generateUrl({ categorySlug: category.slug })}
					aria-current={isCurrentCategory ? 'page' : undefined}>{category.name}</Link
				>
			</li>
		{/each}
	</ul>
</nav>
