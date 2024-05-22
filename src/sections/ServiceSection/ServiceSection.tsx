// @ts-nocheck
'use client'
import { ServiceButton } from '@/shared/ui/Buttons/ServiceButton/ServiceButton'
import { Container } from '@/shared/ui/Layout/Container/Container'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import { Typography } from '@/shared/ui/Typography/Typography'
import cls from './ServiceSection.module.scss'

import ServicePattern from '@/shared/assets/images/services/bg.svg'

import { ConsultationModal } from '@/features/ConsultationModal'
import {
	ConsultationBgs,
	ConsultationDataTypes,
} from '@/features/ConsultationModal/ui/ConsultationModal'
import { useState } from 'react'
interface ServicesSectionProps {
	className?: string
}

export const ServicesSection = ({ className }: ServicesSectionProps) => {
	const [activeService, setActiveService] = useState('')
	const [currentService, setCurrentService] = useState('')
	const [isModalConsultOpen, setModalConsultOpen] = useState(false)

	const setBg = bg => {
		setActiveService(bg)
		setCurrentService(bg)
	}
	const disableBg = () => {
		setActiveService('')
	}

	const handleModalClose = () => {
		setModalConsultOpen(false)
	}
	return (
		<Section
			id='services'
			className={cls.Services}
			style={{ backgroundImage: `url(${ServicePattern.src})` }}
		>
			<Container
				className={cls.Parent}
				style={{
					backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5) 35%, rgba(0, 0, 0, 0.5) 100%), url(${ConsultationBgs[activeService]})`,
				}}
			>
				<Headings
					title='Выполняем полный комплекс услуг'
					subtitle='Услуги'
					color='white'
					className={cls.Headings}
				/>

				<div className={cls.Wrapper}>
					<div className={cls.Container}>
						<ServiceButton
							className={cls.FirstEl}
							name='Проектирование домов'
							bg={ConsultationDataTypes.DESIGN}
							onMouseEnter={setBg}
							onMouseLeave={disableBg}
							onClick={() => setModalConsultOpen(true)}
						>
							<Typography variant='service-btn'>
								Проектирование <sup>01</sup>
								<br />
								домов
							</Typography>
						</ServiceButton>
						<span className={cls.Divider}>
							<Typography variant='service-btn'>/</Typography>
						</span>
						<ServiceButton
							className={cls.SecondEl}
							name='Строительно-монтажные работы'
							bg={ConsultationDataTypes.BUILDING_WORKS}
							onMouseEnter={setBg}
							onMouseLeave={disableBg}
							onClick={() => setModalConsultOpen(true)}
						>
							<Typography variant='service-btn'>
								Строительно-монтажные <sup>02</sup> <br /> работы{' '}
							</Typography>
						</ServiceButton>
					</div>

					<div className={cls.Container}>
						<ServiceButton
							className={cls.FirstEl}
							name='Электромонтажные работы'
							bg={ConsultationDataTypes.ELECTRO_WORKS}
							onMouseEnter={setBg}
							onMouseLeave={disableBg}
							onClick={() => setModalConsultOpen(true)}
						>
							<Typography variant='service-btn'>
								Электромонтажные <sup>03</sup>
								<br />
								работы
							</Typography>
						</ServiceButton>
						<span className={cls.Divider}>
							<Typography variant='service-btn'>/</Typography>
						</span>
						<ServiceButton
							className={cls.SecondEl}
							name='Монтаж систем вентиляции'
							bg={ConsultationDataTypes.VENTILATION}
							onMouseEnter={setBg}
							onMouseLeave={disableBg}
							onClick={() => setModalConsultOpen(true)}
						>
							<Typography variant='service-btn'>
								Монтаж систем <sup>04</sup> <br /> вентиляции{' '}
							</Typography>
						</ServiceButton>
					</div>

					<div className={cls.Container}>
						<ServiceButton
							className={cls.FirstEl}
							name='Демонтажные работы'
							bg={ConsultationDataTypes.DISMANTLING_WORKS}
							onMouseEnter={setBg}
							onMouseLeave={disableBg}
							onClick={() => setModalConsultOpen(true)}
						>
							<Typography variant='service-btn'>
								Демонтажные <sup>05</sup>
								<br />
								работы
							</Typography>
						</ServiceButton>
						<span className={cls.Divider}>
							<Typography variant='service-btn'>/</Typography>
						</span>
						<ServiceButton
							className={cls.SecondEl}
							name='Отделочные работы'
							bg={ConsultationDataTypes.FINISHING_WORKS}
							onMouseEnter={setBg}
							onMouseLeave={disableBg}
							onClick={() => setModalConsultOpen(true)}
						>
							<Typography variant='service-btn'>
								Отделочные <sup>06</sup> <br /> работы{' '}
							</Typography>
						</ServiceButton>
					</div>
				</div>

				<ConsultationModal
					data={currentService}
					theme={currentService}
					heading={'Получите консультацию2'}
					subheading={
						<>
							Оставьте номер телефона.
							<br /> Наш менеджер перезвонит и подробно ответит на Ваши вопросы.
						</>
					}
					isOpen={isModalConsultOpen}
					handleClose={handleModalClose}
				/>
			</Container>
		</Section>
	)
}
