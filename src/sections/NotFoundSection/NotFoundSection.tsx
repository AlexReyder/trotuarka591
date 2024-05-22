import { Section } from '@/shared/ui/Layout/Section/Section'

import { Container } from '@/shared/ui/Layout/Container/Container'
import { LinkDefault } from '@/shared/ui/Link/Link/LinkDefault'
import { Typography } from '@/shared/ui/Typography/Typography'
import cls from './NotFoundSection.module.scss'

export const NotFoundSection = () => {
	return (
		<Section id='#noutfound' className={cls.NotFound}>
			<Container className={cls.Container}>
				<Typography variant='h1'>Ошибка 404</Typography>
				<Typography variant='h1_subheading'>Страница не найдена.</Typography>

				<LinkDefault to='/' text='Вернуться на главную' />
			</Container>
		</Section>
	)
}
