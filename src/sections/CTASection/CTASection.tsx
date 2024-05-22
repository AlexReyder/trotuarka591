'use client'
import BackroundPattern from '@/shared/assets/images/cta/pattern.svg'
import { PrimaryButton } from '@/shared/ui/Buttons/PrimaryButton/PrimaryButton'
import { OkIcon } from '@/shared/ui/Icons/OkIcon/OkIcon'
import { ModalInput } from '@/shared/ui/Inputs/ModalInput/ModalInput'
import { Container } from '@/shared/ui/Layout/Container/Container'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import { Typography } from '@/shared/ui/Typography/Typography'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import cls from './CTASection.module.scss'
interface CustomProjectProps {
	className?: string
	decorative: string
	subheading: string
	heading: string | ReactNode
	text: string
	bg: ReactNode
	axiousPath?: string
}

export const CTASection = ({
	className,
	decorative,
	subheading,
	heading,
	text,
	bg,
	axiousPath = './mail/send.php',
}: CustomProjectProps) => {
	const { control, handleSubmit } = useForm({
		defaultValues: {
			username: '',
			phone: '',
		},
	})
	const router = useRouter()
	const onSubmit = (data: any) => {
		const output = {
			...data,
			theme: 'Заявка',
		}

		axios
			.post(axiousPath, JSON.stringify(output))
			.then(response => router.push('/spasibo'))
	}
	return (
		<Section
			id='project'
			className={cls.Quiz}
			style={{ backgroundImage: `url(${BackroundPattern.src}` }}
		>
			<Container className={cls.Container}>
				<Typography variant='decorative' className={cls.Decorative}>
					{decorative}
				</Typography>
				<div className={cls.Wrapper}>
					<div className={cls.Left}>
						<Headings
							title={heading}
							subtitle={subheading}
							underheading={text}
							color='white'
							className={cls.Heading}
						/>
					</div>
					<div
						className={cls.Right}
						style={{
							backgroundImage: `
                            linear-gradient(to right, rgba(0, 0, 0, 0.25) 35%, rgba(0, 0, 0, 0.25) 100%),
                            url(${bg})`,
						}}
					>
						<form onSubmit={handleSubmit(onSubmit)} className={cls.Right}>
							<Controller
								name='username'
								control={control}
								render={({ field }) => (
									<ModalInput placeholder='Ваше имя' required {...field} />
								)}
							/>
							<Controller
								name='phone'
								control={control}
								render={({ field }) => (
									<PhoneInput
										containerClass={cls.PhoneContainer}
										inputClass={cls.ModalInput}
										country={'ru'}
										inputProps={{
											required: true,
										}}
										onlyCountries={['ru']}
										autoFormat={true}
										placeholder='Номер телефона'
										specialLabel=''
										{...field}
									/>
								)}
							/>

							<PrimaryButton
								text='Отправить заявку'
								icon={<OkIcon fill='white' />}
								theme='White'
								className={cls.Submit}
								type='submit'
							/>
						</form>
					</div>
				</div>
			</Container>
		</Section>
	)
}
