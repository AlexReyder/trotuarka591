import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Typography } from '@/shared/ui/Typography/Typography'
import { useCallback, useRef, useState } from 'react'
import 'swiper/css'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import cls from './StepsSlider.module.scss'

import { ConsultationModal } from '@/features/ConsultationModal'
import { ConsultationDataTypes } from '@/features/ConsultationModal/ui/ConsultationModal'
import { ImagesSrc } from '@/shared/lib/Images/ImagesSrc'
import { PrimaryButton } from '@/shared/ui/Buttons/PrimaryButton/PrimaryButton'
import { SliderButton } from '@/shared/ui/Buttons/SliderButton/SliderButton'
import { OkIcon } from '../../Icons/OkIcon/OkIcon'

export const StepsSlider = () => {
	const [isModalConsultOpen, setModalConsultOpen] = useState(false)
	const [currentSlide, setCurrentSlide] = useState(1)
	const [slidesLength, setslidesLength] = useState(0)
	const sliderRef = useRef<SwiperRef>(null)

	const backgrounds = {
		s1: ImagesSrc.step.Step1.src,
		s2: ImagesSrc.step.Step2.src,
		s3: ImagesSrc.step.Step3.src,
		s4: ImagesSrc.step.Step4.src,
		s5: ImagesSrc.step.Step5.src,
	}

	const handlePrev = useCallback(() => {
		if (!sliderRef.current) return
		sliderRef.current.swiper.slidePrev()
	}, [])

	const handleNext = useCallback(() => {
		if (!sliderRef.current) return
		sliderRef.current.swiper.slideNext()
	}, [])

	const handleSlideById = (index: number) => {
		if (!sliderRef.current) return
		sliderRef.current.swiper.slideTo(index)
	}

	const handleModalClose = () => {
		setModalConsultOpen(false)
	}

	return (
		<>
			<Swiper
				ref={sliderRef}
				slidesPerView={1}
				onSwiper={swiper => setslidesLength(swiper.slides.length)}
				onSlideChange={swiper => setCurrentSlide(swiper.activeIndex + 1)}
			>
				<SwiperSlide
					className={cls.Slide}
					style={{ backgroundImage: `url(${backgrounds.s1})` }}
				>
					<Headings
						title='Как мы работаем'
						subtitle='Этапы работы'
						color='white'
					/>
					<Pagination
						slide={currentSlide - 1}
						backgrounds={Object.keys(backgrounds)}
						handleSlideById={handleSlideById}
					/>
					<div className={cls.StepInfoBlock}>
						<Typography
							variant='h3'
							transform='Lowercase'
							align='left'
							className={cls.StepTitle}
						>
							Консультация
						</Typography>
						<Typography
							variant='text'
							size='s24'
							className={cls.StepDescription}
						>
							Первым шагом к нашему сотрудничеству является телефонный звонок
							или отправленная заявка с нашего сайта. Наши эксперты
							проконсультируют вас по вопросам стоимости, подбору проекта,
							технологиям строительства.
						</Typography>
						<div className={cls.Active}>
							<PrimaryButton
								text={'Получить консультацию'}
								icon={<OkIcon fill='#fff' />}
								onClick={() => setModalConsultOpen(true)}
							/>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide
					className={cls.Slide}
					style={{ backgroundImage: `url(${backgrounds.s2})` }}
				>
					<Headings
						title='Как мы работаем'
						subtitle='Этапы работы'
						color='white'
					/>
					<Pagination
						slide={currentSlide - 1}
						backgrounds={Object.keys(backgrounds)}
						handleSlideById={handleSlideById}
					/>
					<div className={cls.StepInfoBlock}>
						<Typography
							variant='h3'
							transform='Lowercase'
							align='left'
							className={cls.StepTitle}
						>
							Проектирование
						</Typography>
						<Typography
							variant='text'
							size='s24'
							className={cls.StepDescription}
						>
							Этап создания эскизного проекта очень ответственный, но вместе с
							тем приятный процесс. Наши архитекторы предложат вам несколько
							вариантов планировок исходя из ваших пожеланий и выбранного
							проекта, подобрав ту, что полностью отвечает вашим потребностям,
							архитектор перейдет к созданию внешних видов.
						</Typography>
					</div>
				</SwiperSlide>

				<SwiperSlide
					className={cls.Slide}
					style={{ backgroundImage: `url(${backgrounds.s3})` }}
				>
					<Headings
						title='Как мы работаем'
						subtitle='Этапы работы'
						color='white'
					/>
					<Pagination
						slide={currentSlide - 1}
						backgrounds={Object.keys(backgrounds)}
						handleSlideById={handleSlideById}
					/>
					<div className={cls.StepInfoBlock}>
						<Typography
							variant='h3'
							transform='Lowercase'
							align='left'
							className={cls.StepTitle}
						>
							Договор
						</Typography>
						<Typography
							variant='text'
							size='s24'
							className={cls.StepDescription}
						>
							Итак, проект создан, конечная стоимость озвучена. На данном этапе
							можно заключать договор на строительство. Приложением к данному
							договору будет являться эскизный проект и подробное техническое
							задание, с указанием сечений используемых материалов.
						</Typography>
					</div>
				</SwiperSlide>

				<SwiperSlide
					className={cls.Slide}
					style={{ backgroundImage: `url(${backgrounds.s4})` }}
				>
					<Headings
						title='Как мы работаем'
						subtitle='Этапы работы'
						color='white'
					/>
					<Pagination
						slide={currentSlide - 1}
						backgrounds={Object.keys(backgrounds)}
						handleSlideById={handleSlideById}
					/>
					<div className={cls.StepInfoBlock}>
						<Typography
							variant='h3'
							transform='Lowercase'
							align='left'
							className={cls.StepTitle}
						>
							Строительные работы
						</Typography>
						<Typography
							variant='text'
							size='s24'
							className={cls.StepDescription}
						>
							В установленный срок осуществляется заезд бригады. В зависимости
							от проекта она может составлять от 5 до 10 человек. Все условия
							для проживания предоставляются нашей компанией, никаких доплат или
							трудозатрат с вашей стороны не требуется. На всех этапах
							строительства ведется авторский надзор нашим техническим
							специалистом.
						</Typography>
					</div>
				</SwiperSlide>
				<SwiperSlide
					className={cls.Slide}
					style={{ backgroundImage: `url(${backgrounds.s5})` }}
				>
					<Headings
						title='Как мы работаем'
						subtitle='Этапы работы'
						color='white'
					/>
					<Pagination
						slide={currentSlide - 1}
						backgrounds={Object.keys(backgrounds)}
						handleSlideById={handleSlideById}
					/>
					<div className={cls.StepInfoBlock}>
						<Typography
							variant='h3'
							transform='Lowercase'
							align='left'
							className={cls.StepTitle}
						>
							Подписание акта сдачи-приемки работ
						</Typography>
						<Typography
							variant='text'
							size='s24'
							className={cls.StepDescription}
						>
							Когда все работы выполнены, а промежуточные акты подписаны, мы
							приглашаем Вас в офис для подписания завершающего акта и вручения
							гарантийного сертификата сервисного обслуживания от компании ООО
							Ариана. А так же просим поделиться своими впечатлениями о
							сотрудничестве с нашей компанией, как это сделали другие наши
							заказчики.
						</Typography>
					</div>
				</SwiperSlide>

				<div className={cls.Controls}>
					<button
						className={`${cls.PrevSlideArrow} ${
							currentSlide === 1 ? cls.DisabledArrow : ''
						}`}
						onClick={handlePrev}
					></button>
					<Typography variant='text'>
						{currentSlide} / {slidesLength}
					</Typography>
					<button
						className={`${cls.NextSlideArrow} ${
							currentSlide === slidesLength ? cls.DisabledArrow : ''
						}`}
						onClick={handleNext}
					></button>
				</div>
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

export interface PaginationProps {
	backgrounds?: any
	handleSlideById: (index: number) => void
	slide?: number
}

export const Pagination = ({
	slide,
	backgrounds,
	handleSlideById,
}: PaginationProps) => {
	return (
		<div className={cls.Pagination}>
			{backgrounds.map((item: string, index: number) => {
				if (slide === index) {
					return (
						<SliderButton
							text={`Этап ${index + 1}`}
							changeSlide={() => handleSlideById(index)}
							className={'Active'}
							key={`b${index}`}
						/>
					)
				}
				return (
					<SliderButton
						text={`Этап ${index + 1}`}
						changeSlide={() => handleSlideById(index)}
						key={`b${index}`}
					/>
				)
			})}
		</div>
	)
}
