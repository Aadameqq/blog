<script lang="ts">
	import ThemeContextProvider from '../theme/ThemeContextProvider.svelte';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import { browser } from '$app/environment';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
</script>

<QueryClientProvider client={queryClient}>
	<ThemeContextProvider>
		<slot />
	</ThemeContextProvider>
</QueryClientProvider>
