import { getContext, setContext } from 'svelte';
import { defaultTheme } from './defaultTheme';
import { derived, writable } from 'svelte/store';

const THEME_CONTEXT = Symbol();

const editableTheme = writable(defaultTheme);

const readonlyTheme = derived(editableTheme, ($editableTheme) => $editableTheme);

export const getThemeContext = () => {
	return getContext(THEME_CONTEXT);
};

export const initializeThemeContext = () => {
	setContext(THEME_CONTEXT, { theme: readonlyTheme });
};
