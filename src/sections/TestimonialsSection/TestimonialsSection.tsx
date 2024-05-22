import { Tabs } from '@/entities/Tabs/Tabs'
import { Container } from '@/shared/ui/Layout/Container/Container'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import cls from './TestimonialsSection.module.scss'
interface TestimonialsSectionProps {
	className?: string
}

export const TestimonialsSection = ({
	className,
}: TestimonialsSectionProps) => {
	return (
		<Section id='#testimonials' className={cls.Projects}>
			<Container className={cls.Container}>
				<Headings
					title='Нам доверяют клиенты, партнеры и у нас есть все необходимые лицензии'
					subtitle='Отзывы'
				/>
				<Tabs />
			</Container>
		</Section>
	)
}
