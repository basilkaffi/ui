/* eslint-disable @typescript-eslint/no-unused-vars */

const tokenL1s = [
	'background',
	'surface',
	'muted',
	'text',
	'button',
	'link',
	'font',
	'switch',
] as const;

export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'danger';

const buttonStates = ['default', 'hover', 'focus'] as const;
const switchComponents = ['track', 'thumb'] as const;
const switchStates = ['on', 'off'] as const;

type Step = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
type Color = `${string}-${Step}0`;

type Value = Color | (string & {});
type TokenL1 = (typeof tokenL1s)[number];
type ButtonState = (typeof buttonStates)[number];
type SwitchComponent = (typeof switchComponents)[number];
type SwitchState = (typeof switchStates)[number];

type TokenL2Type = Partial<Record<Variant | SwitchComponent | 'source', TokenL3Type | Value>>;
type TokenL3Type = Partial<Record<ButtonState | SwitchState | 'contrast', Value>>;

export type ThemeConfig = Record<TokenL1, TokenL2Type | TokenL3Type | Value | string>;

export type ThemeContextType = {
	applyTheme: (customTheme: ThemeConfig) => void;
};
