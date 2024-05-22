'use client'
import { DefaultButton } from '@/shared/ui/Buttons/DefaultButton/DefaultButton'
import { ShopIcon } from '@/shared/ui/Icons/ShopIcon/ShopIcon'
import Image from 'next/image'
import 'photoswipe/dist/photoswipe.css'
import { useState } from 'react'

import { ConsultationModal } from '@/features/ConsultationModal'
import { Gallery, Item } from 'react-photoswipe-gallery'
import cls from './CatalogEntity.module.scss'

const CatalogEntity = data => {
	const [imageList, setImageList] = useState({
		main: data.data.images.previews[0][0],
		preview: [...data.data.images.previews.slice(1)],
	})
	const [priceMode, setPriceMode] = useState('default')
	const [isModalConsultOpen, setModalConsultOpen] = useState(false)

	const handleModalClose = () => {
		setModalConsultOpen(false)
	}

	return (
		<Gallery>
			<h2 className={cls.ProductName}>{`${
				data.data.type === 'TP'
					? 'Тротуарная плитка'
					: data.data.type === 'FP'
					? 'Фасадная плитка'
					: null
			} «${data.data.name}»`}</h2>

			<div className={cls.Wrapper}>
				<div className={cls.ImagesWrapper}>
					<div className={cls.preview}>
						<Item
							original={`/${data.data.images.originals[0][0]
								.toString()
								.split('/')
								.filter((el: string) => el !== 'public')
								.join('/')}`}
							width='1920'
							height='1440'
						>
							{({ ref, open }) => (
								<Image
									ref={ref}
									onClick={open}
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
							)}
						</Item>
					</div>
					<div className={cls.small_previews}>
						{imageList.preview.map((img: string, i: number) => {
							return (
								<button className={cls.small__wrapper} key={`iis${i}`}>
									<Item
										original={`/${data.data.images.originals[++i][0]
											.toString()
											.split('/')
											.filter((el: string) => el !== 'public')
											.join('/')}`}
										width='1920'
										height='1440'
									>
										{({ ref, open }) => (
											<Image
												ref={ref}
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
												alt={data.data.name}
												loading='lazy'
												className={cls.small_preview}
												onClick={open}
												key={`k${i}`}
											/>
										)}
									</Item>
								</button>
							)
						})}
					</div>
				</div>
				<div className={cls.InfoWrapper}>
					<div className={cls.properties}>
						<p className={cls.size}>Размер, мм: {data.data.size}</p>
						<p className={cls.pallet}>На поддоне: {data.data.pallet}</p>
						{data.data.description ? (
							<p className={cls.description}>
								Описание: {data.data.description}
							</p>
						) : null}
					</div>
					<div className={cls.price__wrapper}>
						<p className={cls.price}>
							{priceMode === 'default' ? data.data.price : data.data.priceColor}{' '}
							₽ м <sup>2</sup>
						</p>
						<div className={cls.price__tab}>
							<button
								onClick={() => setPriceMode('default')}
								className={`${cls.price__button} ${
									priceMode === 'default' ? cls.active : null
								}`}
							>
								Серый цвет
							</button>
							<button
								onClick={() => setPriceMode('colored')}
								className={`${cls.price__button} ${
									priceMode === 'colored' ? cls.active : null
								}`}
							>
								Цветное исполнение
							</button>
						</div>
					</div>

					<div className={cls.CTA__wrapper}>
						<DefaultButton
							className={cls.CTA}
							onClick={() => setModalConsultOpen(true)}
						>
							<ShopIcon />
							<span>Заказать</span>
						</DefaultButton>
					</div>
				</div>
			</div>
			<ConsultationModal
				heading='Сделать заказ'
				isOpen={isModalConsultOpen}
				handleClose={handleModalClose}
				data={data.data}
			/>
		</Gallery>
	)
}
export default CatalogEntity
