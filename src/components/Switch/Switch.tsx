import React, { useId, useState } from 'react';
import styles from './Switch.module.scss';

type SwitchProps = {
	checked?: boolean;
	defaultChecked?: boolean;
	onChange?: (checked: boolean) => void;
	disabled?: boolean;
	label?: React.ReactNode;
	id?: string;
	name?: string;
	className?: string;
};

export default function Switch({
	checked,
	defaultChecked,
	onChange,
	disabled = false,
	label,
	id,
	name,
	className,
}: SwitchProps) {
	const autoId = useId();
	const inputId = id ?? `switch-${autoId}`;
	const [internalChecked, setInternalChecked] = useState<boolean>(!!defaultChecked);

	const isControlled = checked !== undefined;
	const isChecked = isControlled ? checked! : internalChecked;

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const next = e.target.checked;
		if (!isControlled) setInternalChecked(next);
		onChange?.(next);
	}

	return (
		<label
			htmlFor={inputId}
			className={`${styles.switch} ${className ?? ''} ${disabled && 'disabled'}`.trim()}
			aria-disabled={disabled}
		>
			<input
				id={inputId}
				name={name}
				type="checkbox"
				role="switch"
				aria-checked={isChecked}
				checked={isChecked}
				defaultChecked={defaultChecked}
				onChange={handleChange}
				disabled={disabled}
				className={styles.input}
			/>

			<span className={styles.track} aria-hidden>
				<span className={styles.thumb} />
			</span>

			{label ? <span className={styles.label}>{label}</span> : null}
		</label>
	);
}

