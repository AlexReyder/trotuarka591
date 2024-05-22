import classNames from '@/shared/lib/classNames/classNames'
import { Typography } from '@/shared/ui/Typography/Typography'
import { ReactNode } from 'react'
import cls from './PrimaryButton.module.scss'

interface PrimaryButtonProps {
	className?: string
	text: string | ReactNode
	icon: ReactNode
	theme?: 'White' | 'White-gold'
	type?: 'button' | 'submit'
	onClick?: (e?: any) => void
	value?: string
}

export const PrimaryButton = ({
	className,
	text,
	icon,
	theme,
	type = 'button',
	value,
	onClick,
}: PrimaryButtonProps) => {
	return (
		<button
			type={type}
			className={classNames(cls.PrimaryButton, {}, [className!, cls[theme!]])}
			value={value}
			onClick={onClick}
		>
			<Typography variant='text' color='white' weights='f500'>
				{text}
			</Typography>
			<div className={cls.IconContainer}>{icon}</div>
		</button>
	)
}
