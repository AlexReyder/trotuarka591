//@ts-ignore
//@ts-check
import { Typography } from '@/shared/ui/Typography/Typography'
import { useCallback, useRef, useState } from 'react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { ArrowIcon } from '../../Icons/ArrowIcon/ArrowIcon'
import cls from './ArrowSlider.module.scss'

interface ArrowSliderProps {
	className?: string
	SwiperClass?: string
	SlideClass?: string
	WrapperClass?: string
	children: any
	prevNameNavigation: string | string[]
	nextNameNavigation: string | string[]
	config?: any
	coverflow?: boolean
}

export const ArrowSlider = ({
	className,
	SwiperClass,
	SlideClass,
	WrapperClass,
	config,
	children,
	prevNameNavigation,
	nextNameNavigation,
	coverflow = false,
}: ArrowSliderProps) => {
	const [currentSlide, setCurrentSlide] = useState(1)
	const [slidesLength, setslidesLength] = useState(0)

	const sliderRef = useRef<SwiperRef>(null)

	const handlePrev = useCallback(() => {
		if (!sliderRef.current) return
		sliderRef.current.swiper.slidePrev()
	}, [])

	const handleNext = useCallback(() => {
		if (!sliderRef.current) return
		sliderRef.current.swiper.slideNext()
	}, [])

	return (
		<div className={className}>
			<div className={cls.Border}></div>
			<Navigation
				prevName={prevNameNavigation}
				nextName={nextNameNavigation}
				currentSlide={currentSlide - 1}
				slidesLength={slidesLength - 1}
				handlePrev={handlePrev}
				handleNext={handleNext}
			/>

			<Swiper
				ref={sliderRef}
				slidesPerView={3}
				// effect={EffectCoverflow}
				onSwiper={swiper => setslidesLength(swiper.slides.length)}
				onSlideChange={swiper => setCurrentSlide(swiper.activeIndex + 1)}
				className={SwiperClass}
				modules={[]}
				{...config}
			>
				{children.map((child, i) => {
					return (
						<SwiperSlide
							key={`s${i}`}
							className={`${cls.Slide} ${SlideClass ? SlideClass : null}`}
						>
							{child}
						</SwiperSlide>
					)
				})}
			</Swiper>
		</div>
	)
}

interface NavigationProps {
	prevName: string | string[]
	nextName: string | string[]
	currentSlide: number
	slidesLength: number
	handlePrev: () => void
	handleNext: () => void
}

export const Navigation = ({
	prevName,
	nextName,
	currentSlide,
	slidesLength,
	handlePrev,
	handleNext,
}: NavigationProps) => {
	// const [prevText, setPrevText] = useState("Предыдущий");
	if (typeof prevName === 'string') {
		return (
			<div className={cls.Controls}>
				<button
					className={`${cls.PrevSlideArrow} ${
						currentSlide === 1 ? cls.DisabledArrow : ''
					}`}
					onClick={handlePrev}
				>
					<ArrowIcon fill='#fff' />
				</button>
				<button
					className={`${cls.NextSlideArrow} ${
						currentSlide === slidesLength ? cls.DisabledArrow : ''
					}`}
					onClick={handleNext}
				>
					<ArrowIcon fill='#fff' />
				</button>
			</div>
		)
	}

	return (
		<div className={cls.Controls}>
			<button
				className={`${cls.PrevSlideArrow} ${
					currentSlide === 1 ? cls.DisabledArrow : ''
				}`}
				onClick={handlePrev}
			>
				{currentSlide === 0 ? (
					<>
						<Typography variant='SliderNavigation' color='grey-disabled'>
							{prevName[currentSlide]}
						</Typography>
						<ArrowIcon fill='#6A6969' />
					</>
				) : (
					<>
						<Typography variant='SliderNavigation' color='black'>
							{prevName[currentSlide]}
						</Typography>
						<ArrowIcon />
					</>
				)}
			</button>
			<button
				className={`${cls.NextSlideArrow} ${
					currentSlide === slidesLength ? cls.DisabledArrow : ''
				}`}
				onClick={handleNext}
			>
				{currentSlide === slidesLength ? (
					<>
						<Typography variant='SliderNavigation' color='grey-disabled'>
							{nextName[currentSlide]}
						</Typography>
						<ArrowIcon fill='#6A6969' />
					</>
				) : (
					<>
						<Typography variant='SliderNavigation' color='black'>
							{nextName[currentSlide]}
						</Typography>
						<ArrowIcon />
					</>
				)}
			</button>
		</div>
	)
}
