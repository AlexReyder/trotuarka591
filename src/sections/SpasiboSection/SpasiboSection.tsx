import { Section } from '@/shared/ui/Layout/Section/Section'

import { ImagesSrc } from '@/shared/lib/Images/ImagesSrc'
import { Container } from '@/shared/ui/Layout/Container/Container'
import { LinkDefault } from '@/shared/ui/Link/Link/LinkDefault'
import { Typography } from '@/shared/ui/Typography/Typography'
import cls from './SpasiboSection.module.scss'

export const SpasiboSection = () => {
	return (
		<Section
			id='#spasibo'
			className={cls.Spasibo}
			style={{ backgroundImage: `url(${ImagesSrc.hero.slide2.src})` }}
		>
			<Container className={cls.Container}>
				<Typography variant='h2'>Спасибо за вашу заявку</Typography>
				<Typography variant='h1_subheading'>
					Ваша заявка принята! В ближайшее время наш менеджер свяжется с Вами
					для уточнения деталей.
				</Typography>

				<LinkDefault to='/' text='Вернуться на главную' />
			</Container>
		</Section>
	)
}
