import { Typography } from '@/shared/ui/Typography/Typography'
import { ReactNode } from 'react'
import cls from './AdvantagesCard.module.scss'
interface AdvantagesCardProps {
	className?: string
	bg: string
	title: ReactNode
	text: string
}

export const AdvantagesCard = ({
	className,
	bg,
	title,
	text,
}: AdvantagesCardProps) => {
	return (
		<figure className={cls.AdvantagesCard}>
			<img src={bg} alt='' className={cls.Image} />
			<figcaption className={cls.Description}>
				<Typography variant='h3'>{title}</Typography>
				<Typography variant='text' align='center' color='white'>
					{text}
				</Typography>
			</figcaption>
		</figure>
	)
}
