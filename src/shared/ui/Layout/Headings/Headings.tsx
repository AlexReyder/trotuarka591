import classNames from '@/shared/lib/classNames/classNames'
import { ReactNode } from 'react'
import cls from './Headings.module.scss'
interface HeadingsProps {
	className?: string
	title: string | ReactNode
}

export const Headings = ({ className, title }: HeadingsProps) => {
	return (
		<div className={classNames(cls.Headings, {}, [className!])}>
			<h2 className={cls.Heading}>{title}</h2>
		</div>
	)
}
