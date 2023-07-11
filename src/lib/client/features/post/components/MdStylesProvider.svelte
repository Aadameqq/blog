<span class="parent"><slot /></span>

<style lang="postcss">
	.parent :global(p) {
		@apply text-gray-300;
	}

	.parent :global(ol) {
		@apply text-gray-300 list-decimal list-inside my-2;
	}

	.parent :global(ul) {
		@apply text-gray-300 list-disc list-inside my-2;
	}

	.parent :global(pre) {
		@apply my-3 p-2 desktop:px-4 rounded-md bg-code;
	}

	.parent :global(pre code::-webkit-scrollbar) {
		@apply h-[10px] bg-code;
	}

	.parent :global(pre code::-webkit-scrollbar-thumb) {
		@apply bg-scrollbar rounded-xl;
	}

	.parent :global(code:not(pre code)) {
		@apply rounded-md p-1 font-code bg-[#282b2e];
	}

	.parent :global(h2) {
		@apply text-xl desktop:text-2xl text-gray-100 font-bold pt-4 pb-4;
	}

	.parent :global(h3) {
		@apply text-lg desktop:text-xl text-gray-200 font-bold pt-3 pb-3;
	}

	.parent :global(strong) {
		@apply text-gray-100 underline decoration-wavy underline-offset-2 font-normal decoration-gray-300;
	}

	.parent :global(blockquote) {
		@apply italic border-l-4 border-zinc-700 my-2 p-2 pl-4;
	}

	.parent :global(a) {
		@apply underline underline-offset-2 text-blue-400;
	}
</style>
