import type { SvelteComponentTyped } from 'svelte';

export type MdFile<Metadata> = SvelteComponentTyped & { metadata: Metadata };
