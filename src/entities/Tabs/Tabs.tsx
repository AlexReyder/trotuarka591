import { ImagesSrc } from '@/shared/lib/Images/ImagesSrc'
import { DefaultButton } from '@/shared/ui/Buttons/DefaultButton/DefaultButton'
import { ArrowSlider } from '@/shared/ui/Sliders/ArrowSlider/ArrowSlider'
import { Typography } from '@/shared/ui/Typography/Typography'
import 'photoswipe/dist/photoswipe.css'
import { useState } from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import Testimonial from '../Testimonial/Testimonial'
import cls from './Tabs.module.scss'

interface TabsProps {
	className?: string
}

export const Tabs = ({ className }: TabsProps) => {
	const [isTestimonials, setTestimonials] = useState(true)
	const [isLicense, setLicense] = useState(false)
	const params = {
		wrapperClass: cls.SwiperWrapper,
		slidesPerView: 3,
		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			560: {
				slidesPerView: 2,
			},
			900: {
				slidesPerView: 3,
			},
		},
	}
	const params2 = {
		wrapperClass: cls.SwiperWrapper,
		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			560: {
				slidesPerView: 2,
			},
		},
	}

	const turnOnTestimonials = () => {
		setTestimonials(true)
		setLicense(false)
	}
	const turnOnLicense = () => {
		setTestimonials(false)
		setLicense(true)
	}

	return (
		<>
			<div className={cls.Controls}>
				<DefaultButton
					className={`${cls.TestimonialBtn} ${
						isTestimonials ? cls.Active : null
					}`}
					onClick={turnOnTestimonials}
				>
					<Typography variant='text' size='s18' weights='f500'>
						Что о нас говорят клиенты
					</Typography>
				</DefaultButton>
				<DefaultButton
					className={`${cls.LicenseBtn} ${isLicense ? cls.Active : null}`}
					onClick={turnOnLicense}
				>
					<Typography variant='text' size='s18' weights='f500'>
						Наши сертификаты и дипломы
					</Typography>
				</DefaultButton>
			</div>

			<ArrowSlider
				className={isTestimonials ? cls.on : cls.off}
				SwiperClass={cls.Slider}
				SlideClass={cls.Slide}
				WrapperClass={cls.SliderWrapper}
				config={params2}
				prevNameNavigation='Предыдущий'
				nextNameNavigation='Следующий'
			>
				{[
					<Testimonial
						key={1}
						username='Иван'
						text='Мы очень благодарны сотрудникам строительной компании Ариана за дом, который они нам построили.
                                В 2023 году мы обратились к ним имея участок со скважиной и проект дома из интернета. В начале лета мы согласовали смету, в которой часть работы мы договорились производить собственными силами. В августе начали строительство и благодаря слаженным всё было готово через несколько месяцев. При этом очень важно отметить что не было необходимости учувствовать в стройке ежедневно, я приезжал на участок не чаще одного раза в неделю. Ничего не нужно докупать, довозить.
                                Приезжали посмотреть как растет дом, походить по каркасу представить как это будет выглядеть. Фотографии всех ключевых узлов и этапов стройки я просил отправлять мне на почту.
                                Конечно, какие то затруднения возникали, но они легко решались после конструктивного диалога на объекте.
                                Благодаря профессионализму прораба и лично директора компании Виктора Вячеславовича, нам удалось избежать ошибок допущенных при изменении проекта.
                                
                                Строительство сложный процесс и лично готов его довеять только профессиональным компаниям. ООО "АРИАНА" является такой компанией. Рекомендую!'
						date='11 июня 2023'
					/>,
					<Testimonial
						key={2}
						username='Татьяна'
						text='Когда мне порекомендовали компанию Ариана для строительства дома, в моей жизни произошло " чудо". Я проработала в строительстве более 15 лет, и я знаю, что такое" строить хорошо" и что такое" строить плохо". Компания Ариана строит отлично! Благодаря высокому профессионализму директора Виктора и бригады строителей, строительство моего дома - позитивный процесс, приносящий радость, хотя поверьте, строительство своего дома считается сложным и нервным процессом. Прекрасный проект, помощь в выборе материалов, отличная организация работ, своевременное обеспечение материалами, мгновенное решение каких то мелких проблем ( крупных просто нет!) - это все стиль работы компании Ариана , не говоря о прекрасных человеческих качествах всех членов команды. Тысяча спасибо всей команде компании Ариана за дело, которым вы занимаетесь с душой. Приглашаю всех, кто задумал строить себе каркасный дом, посмотреть на наше строительство, которое находится в черте города, в микрорайоне Вышка 1. Очень хочется помочь многим найти такого подрядчика, как компания Ариана!'
						date='18 декабрь 2022'
					/>,
					<Testimonial
						key={3}
						username='Андрей'
						text=' Заказывали в компании Ариана дом из профилированного бруса под ключ. Остались очень довольны как качеством обслуживания, так и работниками на площадке. Сделали качественно и в срок. Уделили особое внимание к деталям. Профессионалы и в строительстве и в отделке. Рекомендую все компанию Ариана.'
						date='4 октября 2023'
					/>,
					<Testimonial
						key={4}
						username='Вероника'
						text=' Строительная компания "Ариана" нам построила отличный качественный каркасный дом. Все было выполнено в срок, без замечаний. Руководитель компании зарекомендовал себя как добросовестный и ответственный человек, который знает и любит своё дело.'
						date='26 апрель 2023'
					/>,
				]}
			</ArrowSlider>

			<Gallery>
				<ArrowSlider
					className={isLicense ? cls.on : cls.off}
					SwiperClass={cls.Slider}
					SlideClass={cls.Slide}
					WrapperClass={cls.SliderWrapper}
					config={params}
					prevNameNavigation='Предыдущий'
					nextNameNavigation='Следующий'
				>
					{[
						<Item
							original={ImagesSrc.license.License1.src}
							thumbnail={ImagesSrc.license.LicenseResized1.src}
							width='1242'
							height='1755'
							alt=''
							key={1}
						>
							{({ ref, open }) => (
								<img
									style={{ cursor: 'pointer' }}
									src={ImagesSrc.license.LicenseResized1.src}
									ref={ref}
									onClick={open}
									className={cls.Image}
								/>
							)}
						</Item>,
						<Item
							original={ImagesSrc.license.License2.src}
							thumbnail={ImagesSrc.license.LicenseResized2.src}
							width='1242'
							height='1755'
							alt=''
							key={2}
						>
							{({ ref, open }) => (
								<img
									style={{ cursor: 'pointer' }}
									src={ImagesSrc.license.LicenseResized2.src}
									ref={ref}
									onClick={open}
									className={cls.Image}
								/>
							)}
						</Item>,
						<Item
							original={ImagesSrc.license.License3.src}
							thumbnail={ImagesSrc.license.LicenseResized3.src}
							width='1242'
							height='1755'
							alt=''
							key={3}
						>
							{({ ref, open }) => (
								<img
									style={{ cursor: 'pointer' }}
									src={ImagesSrc.license.LicenseResized4.src}
									ref={ref}
									onClick={open}
									className={cls.Image}
								/>
							)}
						</Item>,
						<Item
							original={ImagesSrc.license.License4.src}
							thumbnail={ImagesSrc.license.LicenseResized4.src}
							width='1242'
							height='1755'
							alt=''
							key={4}
						>
							{({ ref, open }) => (
								<img
									style={{ cursor: 'pointer' }}
									src={ImagesSrc.license.LicenseResized1.src}
									ref={ref}
									onClick={open}
									className={cls.Image}
								/>
							)}
						</Item>,
						<Item
							original={ImagesSrc.license.License5.src}
							thumbnail={ImagesSrc.license.LicenseResized5.src}
							width='2484'
							height='3509'
							alt=''
							key={5}
						>
							{({ ref, open }) => (
								<img
									style={{ cursor: 'pointer' }}
									src={ImagesSrc.license.LicenseResized5.src}
									ref={ref}
									onClick={open}
									className={cls.Image}
								/>
							)}
						</Item>,
						<Item
							original={ImagesSrc.license.License6.src}
							thumbnail={ImagesSrc.license.LicenseResized6.src}
							width='2484'
							height='3509'
							alt=''
							key={6}
						>
							{({ ref, open }) => (
								<img
									style={{ cursor: 'pointer' }}
									src={ImagesSrc.license.LicenseResized6.src}
									ref={ref}
									onClick={open}
									className={cls.Image}
								/>
							)}
						</Item>,
						<Item
							original={ImagesSrc.license.License7.src}
							thumbnail={ImagesSrc.license.LicenseResized7.src}
							width='2484'
							height='3509'
							alt=''
							key={7}
						>
							{({ ref, open }) => (
								<img
									style={{ cursor: 'pointer' }}
									src={ImagesSrc.license.LicenseResized7.src}
									ref={ref}
									onClick={open}
									className={cls.Image}
								/>
							)}
						</Item>,
						<Item
							original={ImagesSrc.license.License8.src}
							thumbnail={ImagesSrc.license.LicenseResized8.src}
							width='2484'
							height='3509'
							alt=''
							key={8}
						>
							{({ ref, open }) => (
								<img
									style={{ cursor: 'pointer' }}
									src={ImagesSrc.license.LicenseResized8.src}
									ref={ref}
									onClick={open}
									className={cls.Image}
								/>
							)}
						</Item>,
						<Item
							original={ImagesSrc.license.License9.src}
							thumbnail={ImagesSrc.license.LicenseResized9.src}
							width='1242'
							height='1755'
							alt=''
							key={9}
						>
							{({ ref, open }) => (
								<img
									style={{ cursor: 'pointer' }}
									src={ImagesSrc.license.LicenseResized9.src}
									ref={ref}
									onClick={open}
									className={cls.Image}
								/>
							)}
						</Item>,
						<Item
							original={ImagesSrc.license.License10.src}
							thumbnail={ImagesSrc.license.LicenseResized10.src}
							width='1242'
							height='1755'
							alt=''
							key={10}
						>
							{({ ref, open }) => (
								<img
									style={{ cursor: 'pointer' }}
									src={ImagesSrc.license.LicenseResized10.src}
									ref={ref}
									onClick={open}
									className={cls.Image}
								/>
							)}
						</Item>,
					]}
				</ArrowSlider>
			</Gallery>
		</>
	)
}
