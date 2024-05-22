import classNames from '@/shared/lib/classNames/classNames'
import { Typography } from '@/shared/ui/Typography/Typography'
import Link from 'next/link'
import { ShortArrowIcon } from '../../Icons/ShortArrowIcon/ShortArrowIcon'
import cls from './Link.module.scss'
interface LinkProps {
	to: string
	className?: string
	text: string
	theme?: string
}

export const LinkDefault = ({ to, className, text }: LinkProps) => {
	return (
		<Link href={to} className={classNames(cls.Link, {}, [className!])}>
			<Typography variant='Link' color='white'>
				{text}
			</Typography>
			<ShortArrowIcon className={cls.Icon} />
		</Link>
	)
}
