import { ConsultationModal } from '@/features/ConsultationModal'
import { ConsultationDataTypes } from '@/features/ConsultationModal/ui/ConsultationModal'
import { ImagesSrc } from '@/shared/lib/Images/ImagesSrc'
import { PrimaryButton } from '@/shared/ui/Buttons/PrimaryButton/PrimaryButton'
import { Typography } from '@/shared/ui/Typography/Typography'
import { useCallback, useRef, useState } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { EffectCreative, Pagination } from 'swiper/modules'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { OkIcon } from '../../Icons/OkIcon/OkIcon'
import { LinkDefault } from '../../Link/Link/LinkDefault'
import cls from './HeroSlider.module.scss'

export const HeroSlider = () => {
	const [currentSlide, setCurrentSlide] = useState(1)
	const [slidesLength, setslidesLength] = useState(0)
	const [isModalConsultOpen, setModalConsultOpen] = useState(false)
	const sliderRef = useRef<SwiperRef>(null)

	const handlePrev = useCallback(() => {
		if (!sliderRef.current) return
		sliderRef.current.swiper.slidePrev()
	}, [])

	const handleNext = useCallback(() => {
		if (!sliderRef.current) return
		sliderRef.current.swiper.slideNext()
	}, [])

	const handleModalClose = () => {
		setModalConsultOpen(false)
	}
	return (
		<>
			<Swiper
				ref={sliderRef}
				slidesPerView={1}
				effect={'creative'}
				creativeEffect={{
					prev: {
						shadow: true,
						translate: ['-20%', 0, -1],
					},
					next: {
						translate: ['100%', 0, 0],
					},
				}}
				modules={[EffectCreative, Pagination]}
				pagination={{
					el: '.swiper-pagination',
					clickable: true,
				}}
				onSwiper={swiper => setslidesLength(swiper.slides.length)}
				onSlideChange={swiper => setCurrentSlide(swiper.activeIndex + 1)}
			>
				<SwiperSlide
					className={cls.Slide}
					style={{ backgroundImage: `url(${ImagesSrc.hero.slide1.src})` }}
				>
					<Typography variant='h1'>
						Строительство <br />
						дома под ключ
					</Typography>
					<Typography variant='h1_subheading'>
						От фундамента до отделочных работ. Все заботы берём на себя.
					</Typography>

					<div className={cls.ButtonsBox}>
						<PrimaryButton
							text='Получить консультацию'
							icon={<OkIcon fill='white' />}
							onClick={() => setModalConsultOpen(true)}
						/>
						<LinkDefault to='#projects' text='Посмотреть проекты' />
					</div>
				</SwiperSlide>

				<SwiperSlide
					className={cls.Slide}
					style={{ backgroundImage: `url(${ImagesSrc.hero.slide2.src})` }}
				>
					<Typography variant='h1'>
						Построим <br />
						комфорный дом
					</Typography>
					<Typography variant='h1_subheading'>
						Стоимостью от 150 000 руб. за 1 кв.м.
					</Typography>
					<div className={cls.ButtonsBox}>
						<PrimaryButton
							text='Получить консультацию'
							icon={<OkIcon fill='white' />}
							onClick={() => setModalConsultOpen(true)}
						/>
						<LinkDefault to='#projects' text='Посмотреть проекты' />
					</div>
				</SwiperSlide>

				<SwiperSlide
					className={cls.Slide}
					style={{ backgroundImage: `url(${ImagesSrc.hero.slide3.src})` }}
				>
					<Typography variant='h1'>
						Онлайн <br />
						калькулятор
					</Typography>
					<Typography variant='h1_subheading'>
						Рассчитайте стоимость строительства Вашего будущего дома прямо
						сейчас.
					</Typography>
					<div className={cls.ButtonsBox}>
						<PrimaryButton
							text='Получить консультацию'
							icon={<OkIcon fill='white' />}
							onClick={() => setModalConsultOpen(true)}
						/>
						<LinkDefault to='#calculator' text='Калькулятор' />
					</div>
				</SwiperSlide>
			</Swiper>
			<ConsultationModal
				data={ConsultationDataTypes.CONSULTATION}
				theme='Консультация'
				heading={
					<>
						Получите
						<br />
						консультацию
					</>
				}
				subheading={
					<>
						Оставьте номер телефона.
						<br /> Наш менеджер перезвонит и подробно ответит на Ваши вопросы.
					</>
				}
				isOpen={isModalConsultOpen}
				handleClose={handleModalClose}
			/>
		</>
	)
}
