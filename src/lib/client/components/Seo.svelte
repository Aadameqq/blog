<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { getFullTitle } from '$lib/client/services/fullTitleGetter';
	import { OgTypes } from '$lib/client/types/OgTypes';

	const ogArticleProperties: { [key: string]: string | undefined } = {
		publishedTime: 'published_time',
		author: 'author',
		section: 'section'
	};

	export let title: string;
	export let description =
		'A blog where I share my thoughts and experiences on various programming topics';
	export let image = '/images/favicon.png';
	export let ogType: OgTypes = OgTypes.DEFAULT;
	export let ogArticle: {
		publishedTime?: string;
		author?: string;
		section?: string;
	};

	$: fullTitle = getFullTitle(title);

	if (!env.PUBLIC_ORIGIN) throw new Error('PUBLIC_ORIGIN env variable is not defined');
	$: originWithBasePath = `${env.PUBLIC_ORIGIN}${base}`;

	$: currentUrl = `${originWithBasePath}${$page.url.pathname}`;
	$: imageUrl = `${originWithBasePath}${image}`;

	$: ogArticleWithDefaults = {
		author: 'Adam Bryndza',
		...ogArticle
	};
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<link rel="icon" type="image/x-icon" href="{base}/images/favicon.png" />
	<meta name="description" content={description} />
	<link rel="canonical" href={currentUrl} />

	<meta property="og:title" content={fullTitle} />
	<meta name="og:description" content={description} />
	<meta property="og:locale" content="en_GB" />
	<meta property="og:type" content={ogType} />
	<meta property="og:url" content={currentUrl} />
	<meta property="og:image" content={imageUrl} />
	{#if ogType === OgTypes.ARTICLE}
		{#each Object.entries(ogArticleWithDefaults) as [key, value]}
			<meta property="{OgTypes.ARTICLE}:{ogArticleProperties[key]}" content={value} />
		{/each}
	{/if}

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@aadameqq" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
</svelte:head>
