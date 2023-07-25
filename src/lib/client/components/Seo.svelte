<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	const ogArticleProperties = {
		publishedTime: 'published_time',
		author: 'author',
		section: 'section'
	};

	export let title: string;
	export let description = '';
	export let image = '/images/favicon.png';
	export let ogType = 'website';
	export let shouldIndex = true;
	export let ogArticle: {
		publishedTime?: string;
		author?: string;
		section?: string;
	} = { author: 'Adam Bryndza' };

	$: fullTitle = `${title} | Adam Bryndza's blog`;

	if (!env.PUBLIC_ORIGIN) throw new Error('PUBLIC_ORIGIN env variable is not defined');

	$: originWithBasePath = `${env.PUBLIC_ORIGIN}${base}`;

	$: currentUrl = `${originWithBasePath}${shouldIndex ? $page.url.pathname : ''}`;
	$: imageUrl = `${originWithBasePath}${image}`;
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<link rel="icon" type="image/x-icon" href="{base}/images/favicon.png" />
	<meta name="description" content={description} />
	{#if !shouldIndex}
		<meta name="robots" content="noindex" />
	{/if}
	<link rel="canonical" href={currentUrl} />

	<meta property="og:title" content={fullTitle} />
	<meta property="og:locale" content="en_GB" />
	<meta property="og:type" content={ogType} />
	<meta property="og:url" content={currentUrl} />
	<meta property="og:image" content={imageUrl} />
	{#if ogType === 'article'}
		{#each Object.entries(ogArticle) as [key, value]}
			<meta property="article:{ogArticleProperties[key]}" content={value} />
		{/each}
	{/if}

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@aadameqq" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:image" content={imageUrl} />
</svelte:head>
