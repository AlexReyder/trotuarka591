import { DefaultButton } from '@/shared/ui/Buttons/DefaultButton/DefaultButton'
import { ShopIcon } from '@/shared/ui/Icons/ShopIcon/ShopIcon'
import { useState } from 'react'
import { ProjectProperties } from '../ProjectProperties/ProjectProperties'
import cls from './ProductCard.module.scss'
interface ProductCardProps {
	data: any
	index: number
}

export const ProductCard = ({ data, index }: ProductCardProps) => {
	const [preview, setPreview] = useState(0)

	const changePreview = (e: any) => {
		setPreview(e.target.getAttribute('data-num'))
	}

	return (
		<div className={cls.Project}>
			<div className={cls.Preview}>
				<img
					src={data.small_preview[preview].jpg}
					alt={data.name}
					className={cls.Preview__image}
					loading='lazy'
				/>
			</div>
			<div className={cls.Info}>
				<div className={cls.Info__images}>
					{data.small_preview.map((img: any, i: number) => {
						if (i !== 0) {
							return (
								<img
									src={img.jpg}
									alt={data.name}
									loading='lazy'
									data-num={i}
									className={cls.Info__image}
									onClick={changePreview}
									key={`k${i}`}
								/>
							)
						}
					})}
				</div>
				<div className={cls.Info__description}>
					<p className={cls.Product__title}>{data.name}</p>
					<ProjectProperties data={data.HouseProperties} />
					<p className={cls.Product__price}>
						От 150 000 ₽ м<sup>2</sup>
					</p>
					<div className={cls.Action}>
						<DefaultButton className={cls.CTA}>
							<ShopIcon />
							<span>Заказать</span>
						</DefaultButton>
					</div>
				</div>
			</div>
		</div>
	)
}
