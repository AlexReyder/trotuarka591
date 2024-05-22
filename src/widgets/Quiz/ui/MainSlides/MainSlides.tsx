import { DefaultButton } from '@/shared/ui/Buttons/DefaultButton/DefaultButton'
import { PrimaryButton } from '@/shared/ui/Buttons/PrimaryButton/PrimaryButton'
import { useState } from 'react'
import { AnswerObject } from '../Quiz'
import cls from './MainSlides.module.scss'

import { ArrowLeftIcon } from '@/shared/ui/Icons/ArrowLeftIcon/ArrowLeftIcon'
import { ArrowRightIcon } from '@/shared/ui/Icons/ArrowRightIcon/ArrowRightIcon'
import { OkIcon } from '@/shared/ui/Icons/OkIcon/OkIcon'

type MainSlidesProps = {
	className?: string
	question: string
	choices: string[]
	type: string
	imgURL: string[] | undefined
	handlePrev: () => void
	handleNext: (e: React.MouseEvent<HTMLButtonElement>) => void
	userAnswer?: AnswerObject | undefined
	questionNr?: number
	totalQuestions?: number
}

export const MainSlides = ({
	className,
	question,
	choices,
	type,
	imgURL,
	handlePrev,
	handleNext,
	userAnswer,
	questionNr,
	totalQuestions,
}: MainSlidesProps) => {
	const [answer, setAnswer] = useState('')
	const handleClean = (e: any) => {
		handleNext(e)
		setAnswer('')
	}

	return (
		<div className={className}>
			<div className={cls.Header}>
				<p className={cls.Header__title}>
					Ответьте на 6 вопросов и рассчитайте самостоятельно
					<br />
					стоимость строительства дома
				</p>
				<p className={cls.Indicator}>
					{questionNr! + 1} / {totalQuestions}
				</p>
				<div className={cls.Progress}>
					<span
						className={cls.Fraction}
						style={{
							width: `calc(16.6666666667% * ${
								questionNr === 0 ? -1 : questionNr
							})`,
						}}
					/>
				</div>
			</div>
			<div className={cls.Body}>
				<p className={cls.Question}>
					{questionNr! + 1}. {question}
				</p>
				<div
					className={`${cls.Answers} ${
						type !== 'TA' ? null : choices.length > 4 ? cls.List6 : cls.List
					}`}
				>
					{choices.map((choice, i) => (
						<div className={cls.Content} key={`k${i}`}>
							<input
								className={cls.Checkbox}
								type='checkbox'
								id={choice}
								checked={answer === choice}
								onChange={() => setAnswer(choice)}
							/>
							<label
								htmlFor={choice}
								className={`${cls.Answer} ${
									type === 'TA' ? cls.TAContent : null
								}`}
							>
								{type === 'IA' ? <img src={imgURL![i]} /> : null}
								{type === 'TA' ? <span className={cls.Round} /> : null}
								<p className={cls.Choice}>{choice}</p>
							</label>
							{type === 'IA' ? (
								<span className={cls.ImgChecked}>
									<OkIcon fill='#fff' className={cls.OkIcon} />
								</span>
							) : null}
						</div>
					))}
				</div>
			</div>
			<div className={cls.Navigation}>
				<DefaultButton onClick={handlePrev}>
					<span className={cls.PrevBtn}>
						<ArrowLeftIcon fill='white' />
					</span>
				</DefaultButton>
				<PrimaryButton
					text='Далее'
					icon={<ArrowRightIcon fill='white' />}
					className={cls.Submit}
					value={answer}
					onClick={handleClean}
				/>
			</div>
		</div>
	)
}
