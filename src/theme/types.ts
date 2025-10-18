// Define design tokens
const designTokens = [
	'background',
	'surface',
	'muted',
	'text',
	'button',
	'link',
] as const;

const variants = [
	'primary',
	'secondary',
	'success',
	'warning',
	'error',
	'info',
] as const;

const states = ['default', 'hover', 'focus', 'contrast'] as const;

type Step = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';

type Color = `${string}-${Step}0`;
type Token = (typeof designTokens)[number];
type Variant = (typeof variants)[number];
type State = (typeof states)[number];

type StateColors = Partial<Record<State, Color>>;
type VariantColors = Partial<Record<Variant, StateColors | Color>>;

export type ThemeConfig = Record<Token, VariantColors | StateColors | Color>;
