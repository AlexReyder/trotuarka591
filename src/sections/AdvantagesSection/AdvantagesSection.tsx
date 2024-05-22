import { Container } from '@/shared/ui/Layout/Container/Container'
import { Section } from '@/shared/ui/Layout/Section/Section'
import cls from './AdvantagesSection.module.scss'

import Assortment from '../../../public/img/advantages/assortment.png'
import Equipment from '../../../public/img/advantages/equipment.png'
import Guarantee from '../../../public/img/advantages/guarantee.png'
import Price from '../../../public/img/advantages/price.png'
import Quality from '../../../public/img/advantages/quality.png'
import WH from '../../../public/img/advantages/warehouse.png'

import { AboutAdventages } from '@/entities/AboutAdventages/AboutAdventages'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'

export const AdvantagesSection = () => {
	return (
		<Section id='#advantages'>
			<Container>
				<Headings title='Наши преимущества' />
				<div className={cls.Adventages}>
					<AboutAdventages
						img={Equipment.src}
						title='Современное оборудование'
						text='Наше производство оснащено самым
					передовым оборудованием.'
					/>
					<AboutAdventages
						img={Guarantee.src}
						title='Гарантия на продукцию'
						text='На всю выпускаемую продукцию мы
					предоставляем 5 лет гарантии.'
					/>
					<AboutAdventages
						img={Assortment.src}
						title='Большой выбор ассортимента'
						text='Продукция выпускается во множестве
					цветовых решений и различных формфакторах.'
					/>
					<AboutAdventages
						img={Quality.src}
						title='Качество'
						text='Вся продукция проходит контроль качества на
					соответствие изделия ГОСТу.'
					/>
					<AboutAdventages
						img={Price.src}
						title='Цены напрямую от производителя'
						text='Наша компания - производитель бетонных
					изделий, поэтому цена на рынке у нас самая
					низкая, без торговых наценок.'
					/>
					<AboutAdventages
						img={WH.src}
						title='Склад с готовой продукцией'
						text='Доставка бетонных изделий возможна уже в
					день заказа, благодаря складу,
					укомплектованному всеми видами продукции.'
					/>
				</div>
			</Container>
		</Section>
	)
}
