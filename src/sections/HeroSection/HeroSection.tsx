'use client'
import { Section } from '@/shared/ui/Layout/Section/Section'
import { HeroSlider } from '@/shared/ui/Sliders/HeroSlider/HeroSlider'
import cls from './HeroSection.module.scss'

export const HeroSection = () => {
	return (
		<Section id='#hero' className={cls.Hero}>
			<HeroSlider />
			<div className={`swiper-pagination ${cls.Pagination}`}></div>
		</Section>
	)
}
