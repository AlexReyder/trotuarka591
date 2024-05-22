'use client'
import { AboutSection } from '@/sections/AboutSection/AboutSection'
import { AdvantagesSection } from '@/sections/AdvantagesSection/AdvantagesSection'
import { CatalogSection } from '@/sections/CatalogSection/CatalogSection'
import { ContactSection } from '@/sections/ContactSection/ContactSection'
import { HeroSection } from '@/sections/HeroSection/HeroSection'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'

export default function Home() {
	return (
		<main>
			<Header />
			<HeroSection />
			<CatalogSection type='TP' heading='Тротуарная плитка' />
			<CatalogSection type='FP' heading='Фасадная плитка' />
			<CatalogSection type='B' heading='Бордюры' />
			{/* <CTASection
				decorative='Проект'
				subheading='Свой проект'
				heading={<>Индивидуальный проект</>}
				text='Оставьте свои данные и наш архитектор поможет
								разработать проект подходящий под ваши запросы'
				bg={ImagesSrc.cta.first.src}
			/> */}
			{/* <ServicesSection /> */}
			{/* <QuizSection /> */}
			{/* <StepsSection /> */}
			{/* <LastProjectSection /> */}
			{/* <TestimonialsSection /> */}
			{/* <CTASection
				decorative='Заявка'
				subheading='Заявка'
				heading='Оставить заявку'
				text='Оставьте свои данные и наш менеджер поможет
				подобрать подходящий вариант под ваш запрос'
				bg={ImagesSrc.cta.second.src}
			/> */}
			<AdvantagesSection />
			<AboutSection />
			<ContactSection />
			<Footer />
		</main>
	)
}
