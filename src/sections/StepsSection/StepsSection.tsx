import cls from './StepsSection.module.scss'

import { Section } from '@/shared/ui/Layout/Section/Section'
import { StepsSlider } from '@/shared/ui/Sliders/StepsSlider/StepsSlider'

export const StepsSection = () => {
	return (
		<Section id='#steps' className={cls.Steps}>
			<StepsSlider />
		</Section>
	)
}
