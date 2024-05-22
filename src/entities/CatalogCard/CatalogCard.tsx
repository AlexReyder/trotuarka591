'use client'
import { DefaultButton } from '@/shared/ui/Buttons/DefaultButton/DefaultButton'
import { ShopIcon } from '@/shared/ui/Icons/ShopIcon/ShopIcon'
import cn from 'classnames'
import Image from 'next/image'
import { useState } from 'react'
import styles from './CatalogCard.module.scss'

const CatalogCard = ({ className, item }) => {
	console.log('ITEEEEEEM', item)
	const [priceMode, setPriceMode] = useState('default')
	const [imageList, setImageList] = useState({
		main: item.images.previews[0][0],
		preview: [...item.images.previews.slice(1)],
	})

	const handleSetCurrentPreview = (i: number) => {
		const mainPhoto = imageList.main
		const indexOfMain = [].concat(...item.images.previews).indexOf(mainPhoto)

		const prevPhoto = [...imageList.preview][i].toString()
		const indexOfPrev = [].concat(...item.images.previews).indexOf(prevPhoto)

		const prev = [item.images.previews[indexOfMain]]
		const prevPreview = [...imageList.preview]
		prevPreview[i] = prev

		console.log(mainPhoto)
		console.log(indexOfMain)
		console.log(prevPhoto)
		console.log(indexOfPrev)
		const set = {
			main: item.images.previews[indexOfPrev][0],
			preview: prevPreview,
		}
		console.log(set)

		setImageList(set)
		// const prevPreview = [...imageList.preview]
		// prevPreview[i] = [imageList.main]

		// const set = {
		// 	main: item.images.previews[++i][0],
		// 	preview: prevPreview,
		// }
		// console.log(set)

		// setImageList(set)
	}

	return (
		<div className={cn(styles.card, className)} aria-hidden='true'>
			<div className={styles.preview}>
				<Image
					src={
						'/' +
						imageList.main
							.toString()
							.split('/')
							.filter((el: string) => el !== 'public')
							.join('/')
					}
					alt='Card'
					fill
				/>
				<div className={styles.control}>
					<div className={styles.category}>{item?.name}</div>
				</div>
			</div>
			<div className={styles.small_previews}>
				{imageList.preview.map((img: string, i: number) => {
					return (
						<button
							className={styles.small__wrapper}
							key={`iis${i}`}
							onClick={() => handleSetCurrentPreview(i)}
						>
							<Image
								src={
									'/' +
									img[0]
										.toString()
										.split('/')
										.filter((el: string) => el !== 'public')
										.join('/')
								}
								// height={100}
								fill
								alt={item.name}
								loading='lazy'
								className={styles.small_preview}
								// onClick={changePreview}
								key={`k${i}`}
							/>
						</button>
					)
				})}
			</div>
			<div className={styles.foot}>
				<div className={styles.status}>
					<p className={styles.name}>
						<span>
							{item.type === 'TP'
								? 'Тротуарная плитка'
								: item.type === 'FP'
								? 'Фасадная плитка'
								: null}
						</span>
						<span> «{item.name}»</span>
					</p>
				</div>
				<div className={styles.properties}>
					<p className={styles.size}>Размер, мм: {item.size}</p>
					<p className={styles.pallet}>На поддоне: {item.pallet}</p>
				</div>
				<div className={styles.price__wrapper}>
					<p className={styles.price}>
						{priceMode === 'default' ? item.price : item.priceColor} ₽ м
						<sup>2</sup>
					</p>
					<div className={styles.price__tab}>
						<button
							onClick={() => setPriceMode('default')}
							className={`${styles.price__button} ${
								priceMode === 'default' ? styles.active : null
							}`}
						>
							Серый цвет
						</button>
						<button
							onClick={() => setPriceMode('colored')}
							className={`${styles.price__button} ${
								priceMode === 'colored' ? styles.active : null
							}`}
						>
							Цветное исполнение
						</button>
					</div>
				</div>

				<div className={styles.CTA__wrapper}>
					<DefaultButton className={styles.CTA}>
						<ShopIcon />
						<span>Заказать</span>
					</DefaultButton>
				</div>
			</div>
			<a href={`/catalog/${item.slug}`} className={styles.link}></a>
		</div>
	)
}

export default CatalogCard
