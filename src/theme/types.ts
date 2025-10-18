// Define design tokens
const designTokens = [
	'background',
	'surface',
	'muted',
	'textPrimary',
	'textSecondary',
	'textAccent',
	'buttonPrimary',
	'buttonSecondary',
	'buttonPrimaryHover',
	'buttonSecondaryHover',
	'link',
	'linkHover',
	'success',
	'warning',
	'info',
	'error',
] as const;


type Step = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';

export type Color = `${string}-${Step}0`;
export type Token = (typeof designTokens)[number];

export type ThemeConfig = Record<Token, Color>;
