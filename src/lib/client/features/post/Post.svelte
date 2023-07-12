<script lang="ts">
	import DefaultLayout from '$lib/client/layouts/default-layout/DefaultLayout.svelte';
	import MdStylesProvider from '$lib/client/features/post/components/MdStylesProvider.svelte';

	export let post;

	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	const formatDate = (strDate: string) => {
		const [day, month, year] = strDate.split('.');

		return `${monthNames[month - 1]} ${day}, ${year}`;
	};
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<DefaultLayout>
	<main>
		<article>
			<header>
				<h1 class="text-gray-100 text-2xl laptop:text-3xl font-bold mb-3 desktop:text-4xl">
					{post.title}
				</h1>
				<div class="text-gray-400 mb-2 desktop:text-lg">
					<span class="bi bi-bookmark-fill text-gray-300" aria-hidden="true"><!-- --></span>
					<span class="visually-hidden">Post's category: </span>
					<span>{post.category}</span>
					<!-- TODO: we should not show category slug -->
				</div>
				<div class="text-gray-400 mb-6 desktop:text-lg">
					<span class="bi bi-clock-fill text-gray-300" aria-hidden="true"><!-- --></span>
					<span class="visually-hidden">Post created at: </span>
					<time datetime={post.date}>{formatDate(post.date)}</time>
				</div>
			</header>

			<MdStylesProvider>
				<div>
					{@html post.content}
				</div>
			</MdStylesProvider>
		</article>
	</main>
</DefaultLayout>
