import BackroundPattern from '@/shared/assets/images/quiz/pattern.svg'
import { quizData } from '@/shared/data/quiz'
import { Container } from '@/shared/ui/Layout/Container/Container'
import { Section } from '@/shared/ui/Layout/Section/Section'
import { Typography } from '@/shared/ui/Typography/Typography'
import { Quiz } from '@/widgets/Quiz'
import cls from './QuizSection.module.scss'
interface QuizSectionProps {
	className?: string
}

export const QuizSection = ({ className }: QuizSectionProps) => {
	return (
		<Section
			id='calculator'
			className={cls.Quiz}
			style={{ backgroundImage: `url(${BackroundPattern.src}` }}
		>
			<Container className={cls.Container}>
				<Typography variant='decorative' className={cls.Decorative}>
					Калькулятор
				</Typography>
				<Quiz data={quizData} />
			</Container>
		</Section>
	)
}
