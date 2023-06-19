<script lang="ts">
	import { initializeThemeContext } from './themeContext';

	initializeThemeContext();
</script>

<slot />

<style lang="scss" global>
	@import '../../../node_modules/highlight.js/scss/androidstudio.scss';
</style>
