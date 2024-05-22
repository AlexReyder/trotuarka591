import cls from './FinishSlide.module.scss'

import { OkIcon } from '@/shared/ui/Icons/OkIcon/OkIcon'
import { OrderCallIcon } from '@/shared/ui/Icons/OrderCallIcon/OrderCallIcon'
import { TelegramIcon } from '@/shared/ui/Icons/TelegramIcon/TelegramIcon'
import { ViberIcon } from '@/shared/ui/Icons/ViberIcon/ViberIcon'
import { WhatsAppIcon } from '@/shared/ui/Icons/WhatsAppIcon/WhatsAppIcon'

import { DefaultButton } from '@/shared/ui/Buttons/DefaultButton/DefaultButton'
import { PrimaryButton } from '@/shared/ui/Buttons/PrimaryButton/PrimaryButton'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
interface FinishSlideProps {
	className?: string
	answers: any
}
export enum Messangers {
	WHATSAPP = 'Ваш телефон в WhatsApp',
	VIBER = 'Ваш телефон в Viber',
	TELEGRAM = 'Ваш телефон в Telegram',
	ORDER_CALL = 'Ваш телефон',
}

const AnswerMessangers: Record<Messangers, string> = {
	[Messangers.WHATSAPP]: 'WhatsApp',
	[Messangers.VIBER]: 'Viber',
	[Messangers.TELEGRAM]: 'Telegram',
	[Messangers.ORDER_CALL]: 'Позвонить на телефон',
}

export const FinishSlide = ({ className, answers }: FinishSlideProps) => {
	const [currentMessanger, setCurrentMessanger] = useState<Messangers>(
		Messangers.WHATSAPP
	)
	const [answerMessenger, setAnswerMessanger] = useState<Messangers | string>(
		AnswerMessangers[Messangers.WHATSAPP]
	)

	const { control, handleSubmit } = useForm({
		defaultValues: {
			phone: '',
		},
	})
	const router = useRouter()
	const onSubmit = (data: any) => {
		const output = {
			...data,
			...answers,
			answerMessenger,
		}
		console.log(output)
		axios
			.post('./mail/calc.php', JSON.stringify(output))
			.then(response => router.push('/spasibo'))
	}
	function changeMessanger(messanger: Messangers): void {
		setCurrentMessanger(messanger)
		setAnswerMessanger(AnswerMessangers[messanger])
	}
	return (
		<div className={className}>
			<div className={cls.Header}>
				<p className={cls.Title}>
					Ваши ответы получены и мы уже приступили к расчету!
				</p>
				<p className={cls.Subtitle}>Укажите, как удобнее получить результат?</p>
			</div>
			<div className={cls.Body}>
				<div className={cls.Controls}>
					<DefaultButton
						className={`${cls.Messanger} ${
							currentMessanger === Messangers.WHATSAPP
								? cls.Messanger_active
								: null
						}`}
						onClick={() => changeMessanger(Messangers.WHATSAPP)}
					>
						<WhatsAppIcon className={cls.MessangerIcon} />
						<span className={cls.Text}>Whatsapp</span>
					</DefaultButton>

					<DefaultButton
						className={`${cls.Messanger} ${
							currentMessanger === Messangers.VIBER
								? cls.Messanger_active
								: null
						}`}
						onClick={() => changeMessanger(Messangers.VIBER)}
					>
						<ViberIcon className={cls.MessangerIcon} />
						<span className={cls.Text}>Viber</span>
					</DefaultButton>

					<DefaultButton
						className={`${cls.Messanger} ${
							currentMessanger === Messangers.TELEGRAM
								? cls.Messanger_active
								: null
						}`}
						onClick={() => changeMessanger(Messangers.TELEGRAM)}
					>
						<TelegramIcon className={cls.MessangerIcon} />
						<span className={cls.Text}>Telegram</span>
					</DefaultButton>

					<DefaultButton
						className={`${cls.Messanger} ${
							currentMessanger === Messangers.ORDER_CALL
								? cls.Messanger_active
								: null
						}`}
						onClick={() => changeMessanger(Messangers.ORDER_CALL)}
					>
						<OrderCallIcon className={cls.MessangerIcon} />
						<span className={cls.Text}>Жду звонка</span>
					</DefaultButton>
				</div>
				<form onSubmit={handleSubmit(onSubmit)} className={cls.Form}>
					<Controller
						name='phone'
						control={control}
						render={({ field }) => (
							<input
								type='text'
								placeholder={currentMessanger}
								className={cls.Input}
								required
								{...field}
							/>
						)}
					/>

					<PrimaryButton
						text='Получить расчет'
						icon={<OkIcon fill='white' />}
						type='submit'
					/>
				</form>
			</div>
		</div>
	)
}
