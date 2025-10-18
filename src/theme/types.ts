// Define design tokens
const designToken = [
	'--background',
	'--surface',
	'--text-primary',
	'--muted',
] as const;

type Step = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
type Color = `${string}-${Step}0`;

export type TokenKey = (typeof designToken)[number];
export type TokenValue = `var(--${Color})`;

export type ThemeTokens = Record<TokenKey, TokenValue>;

