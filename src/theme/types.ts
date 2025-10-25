type Step = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
type Color = 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'white' | 'black';
type ColorToken = `${Color}-${Step}0`;

type Font = {
	primary: string;
	secondary: string;
	source: string;
};

type LinkColors = {
	default: ColorToken;
	hover: ColorToken;
}

type TextVariant = {
	primary: ColorToken;
	secondary: ColorToken;
	success: ColorToken;
	warning: ColorToken;
	info: ColorToken;
	danger: ColorToken;
}

type ButtonState = {
	default: ColorToken;
	hover: ColorToken;
	focus: ColorToken;
	contrast: ColorToken;
}

type ButtonVariants = {
	primary: ButtonState;
	secondary: ButtonState;
	success: ButtonState;
	warning: ButtonState;
	info: ButtonState;
	danger: ButtonState;
}

type SwitchColorTokens = {
	on: ColorToken;
	off: ColorToken;
}

type SwitchElement = {
	track: SwitchColorTokens;
	thumb: SwitchColorTokens;
}

export type ThemeConfig = {
  background: ColorToken;
  surface: ColorToken;
  muted: ColorToken;
  border: ColorToken;
  font: Font;
  link: LinkColors;
  text: TextVariant;
  button: ButtonVariants;
  switch: SwitchElement;
};

export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'danger';

export type ThemeContextType = {
	applyTheme: (customTheme: ThemeConfig) => void;
};
