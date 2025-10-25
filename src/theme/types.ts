type Step = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
type Color = `${string}-${Step}0`;

type Font = {
	primary: string;
	secondary: string;
	source: string;
};

type LinkColors = {
	default: Color;
	hover: Color;
}

type TextVariant = {
	primary: Color;
	secondary: Color;
	success: Color;
	warning: Color;
	info: Color;
	danger: Color;
}

type ButtonState = {
	default: Color;
	hover: Color;
	focus: Color;
	contrast: Color;
}

type ButtonVariants = {
	primary: ButtonState;
	secondary: ButtonState;
	success: ButtonState;
	warning: ButtonState;
	info: ButtonState;
	danger: ButtonState;
}

type SwitchColors = {
	on: Color;
	off: Color;
}

type SwitchElement = {
	track: SwitchColors;
	thumb: SwitchColors;
}

export type ThemeConfig = {
  background: Color;
  surface: Color;
  muted: Color;
  border: Color;
  font: Font;
  link: LinkColors;
  text: TextVariant;
  button: ButtonVariants;
  switch: SwitchElement;
};

export type ThemeContextType = {
	applyTheme: (customTheme: ThemeConfig) => void;
};
