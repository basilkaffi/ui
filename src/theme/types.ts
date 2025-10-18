// Define design tokens
const tokenL1s = [
	'background',
	'surface',
	'muted',
	'text',
	'button',
	'link',
] as const;

const tokenL2s = [
	'primary',
	'secondary',
	'success',
	'warning',
	'error',
	'info',
] as const;

const tokenL3s = ['default', 'hover', 'focus', 'contrast'] as const;

type Step = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';

type Color = `${string}-${Step}0`;
type TokenL1 = (typeof tokenL1s)[number];
type TokenL2 = (typeof tokenL2s)[number];
type TokenL3 = (typeof tokenL3s)[number];

type TokenL3Type = Partial<Record<TokenL3, Color>>;
type TokenL2Type = Partial<Record<TokenL2, TokenL3Type | Color>>;

export type ThemeConfig = Record<TokenL1, TokenL2Type | TokenL3Type | Color>;
