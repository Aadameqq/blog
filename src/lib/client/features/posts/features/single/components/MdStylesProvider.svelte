<span class="parent"><slot /></span>

<style lang="postcss">
	.parent :global(p) {
		@apply text-zinc-300 text-sm laptop:text-base;
	}

	.parent :global(ol) {
		@apply text-gray-300 list-decimal list-inside my-2 text-sm laptop:text-base;
	}

	.parent :global(ul) {
		@apply text-gray-300 list-disc list-inside my-2 text-sm laptop:text-base;
	}

	.parent :global(pre) {
		@apply my-3 p-2 laptop:px-4 rounded-md bg-code text-sm;
	}

	.parent :global(pre code) {
		@apply font-code text-sm bg-code [scrollbar-color:bg-scrollbar] [scrollbar-width:thin];
	}

	.parent :global(pre code *) {
		@apply font-code;
	}

	.parent :global(pre code::-webkit-scrollbar) {
		@apply h-[10px] bg-code;
	}

	.parent :global(pre code::-webkit-scrollbar-thumb) {
		@apply bg-scrollbar rounded-xl;
	}

	.parent :global(code:not(pre code)) {
		@apply rounded-md py-[2px] px-2 font-code bg-code;
	}

	.parent :global(h2) {
		@apply text-xl laptop:text-2xl text-gray-100 font-bold pt-10 pb-3 desktop:text-3xl;
	}

	.parent :global(h3) {
		@apply text-lg laptop:text-xl text-gray-200 font-bold pt-8 pb-3 desktop:text-2xl;
	}

	.parent :global(strong) {
		@apply text-gray-100 underline-offset-2 font-bold decoration-gray-300;
	}

	.parent :global(blockquote) {
		@apply italic border-l-4 border-zinc-700 my-2 p-2 pl-4;
	}

	.parent :global(a) {
		@apply underline underline-offset-2 text-blue-400 transition duration-300 ease-in-out hover:text-blue-300;
	}

	.parent :global(img) {
		@apply w-full rounded-md my-5;
	}

	.parent :global(figure img) {
		@apply mb-0;
	}

	.parent :global(figure figcaption) {
		@apply text-sm mb-2 desktop:text-base text-gray-400;
	}

	.parent :global(em) {
		@apply italic;
	}
</style>
