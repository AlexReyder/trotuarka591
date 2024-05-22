//ts-check ignore
import { PrimaryButton } from '@/shared/ui/Buttons/PrimaryButton/PrimaryButton'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import cls from './StartSlide.module.scss'

import { ImagesSrc } from '@/shared/lib/Images/ImagesSrc'
import { OkIcon } from '@/shared/ui/Icons/OkIcon/OkIcon'

interface StartSlideProps {
	className?: string
	start?: () => void
}

export const StartSlide = ({ className, start }: StartSlideProps) => {
	return (
		<div className={cls.Start}>
			{/* <MediaQuery minWidth={901}> */}
			<div className={cls.Left}>
				<Headings
					title={
						<>
							Рассчитайте
							<br />
							стоимость дома
						</>
					}
					subtitle='Калькулятор'
					underheading='Ответьте на 5 вопросов и получите предварительную стоимость строительства вашего дома'
					color='white'
					className={cls.Heading}
				/>
				<PrimaryButton
					text='Начать'
					icon={<OkIcon fill='white' />}
					theme='White-gold'
					onClick={start}
				/>
			</div>
			<div
				className={cls.Right}
				style={{
					backgroundImage: `
                            linear-gradient(to right, rgba(0, 0, 0, 0.25) 35%, rgba(0, 0, 0, 0.25) 100%),
                            url(${ImagesSrc.quiz.QBg.src})`,
				}}
			/>
			{/* </MediaQuery>  */}
			{/* <MediaQuery maxWidth={900}> */}
			{/* <div
				className={cls.Start}
				style={{
					backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5) 35%, rgba(0, 0, 0, 0.5) 100%),url(${ImagesSrc.quiz.QBg.src})`,
				}}
			>
				<Headings
					title={
						<>
							Рассчитайте
							<br />
							стоимость дома
						</>
					}
					subtitle='Калькулятор'
					underheading='Ответьте на 5 вопросов и получите предварительную стоимость строительства вашего дома'
					color='white'
					className={cls.Heading}
				/>
				<PrimaryButton
					text='Начать'
					icon={<OkIcon fill='white' />}
					theme='White-gold'
					onClick={start}
				/>
			</div> */}
			{/* </MediaQuery> */}
		</div>
	)
}
