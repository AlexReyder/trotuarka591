'use client'
import { AboutSection } from '@/sections/AboutSection/AboutSection'
import Breadcrumb from '@/widgets/Breadcrumb/Breadcrumb'
import cls from './about.module.scss'

export default function About() {
	return (
		<main>
			<Breadcrumb currentPage='О компании' />
			<AboutSection classContainer={cls.AboutContainer} />
			{/* <TestimonialsSection /> */}
		</main>
	)
}
