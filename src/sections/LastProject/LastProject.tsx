import { ImagesSrc } from '@/shared/lib/Images/ImagesSrc'
import { Container } from '@/shared/ui/Layout/Container/Container'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import { ProjectGallerySlider } from '@/shared/ui/Sliders/ProjectGallerySlider/ProjectGallerySlider'
import cls from './LastProject.module.scss'
interface LastProjectSectionprops {
	className?: string
}

export const LastProjectSection = ({ className }: LastProjectSectionprops) => {
	const params2 = {
		wrapperClass: cls.SwiperWrapper,
		slidesPerView: 3,
		effect: 'coverflow',
		breakpoints: {
			280: {
				slidesPerView: 2,
			},
			560: {
				slidesPerView: 3,
			},
		},
	}
	return (
		<Section id='about' className={cls.About}>
			<Container className={cls.Wrapper}>
				<Headings title='Галерея рабог' className={cls.Heading} />
				<ProjectGallerySlider
					prevNameNavigation='Предыдущий'
					nextNameNavigation='Следующий'
					SwiperClass={cls.GallerySwiper}
					SlideClass={cls.GallerySlide}
					config={params2}
					data={ImagesSrc.lastProject}
					width='1024'
					height='768'
				/>

				{/* <ArrowSlider
						SwiperClass={cls.Slider}
						SlideClass={cls.Slide}
						WrapperClass={cls.SliderWrapper}
						config={params2}
						prevNameNavigation='Предыдущий'
						nextNameNavigation='Следующий'
						coverflow={true}
					>
						{[
							<img
							src={ImagesSrc.lastProject.LP2.src}
							alt='Последний проект'
							className={cls.Image}
						/>,
							<img
								src={ImagesSrc.lastProject.LP2.src}
								alt='Последний проект'
								className={cls.Image}
							/>,
							<img
								src={ImagesSrc.lastProject.LP3.src}
								alt='Последний проект'
								className={cls.Image}
							/>,
							<img
								src={ImagesSrc.lastProject.LP4.src}
								alt='Последний проект'
								className={cls.Image}
							/>,
							<img
								src={ImagesSrc.lastProject.LP5.src}
								alt='Последний проект'
								className={cls.Image}
							/>,
							<img
								src={ImagesSrc.lastProject.LP6.src}
								alt='Последний проект'
								className={cls.Image}
							/>,
							<img
								src={ImagesSrc.lastProject.LP7.src}
								alt='Последний проект'
								className={cls.Image}
							/>,
							<img
								src={ImagesSrc.lastProject.LP8.src}
								alt='Последний проект'
								className={cls.Image}
							/>,
						]}
					</ArrowSlider> */}
			</Container>
		</Section>
	)
}
