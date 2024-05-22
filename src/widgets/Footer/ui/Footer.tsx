import { Container } from '@/shared/ui/Layout/Container/Container'
import { Typography } from '@/shared/ui/Typography/Typography'
import cls from './Footer.module.scss'

import { MessangerLink } from '@/shared/ui/Link/MessangerLink/MessangerLink'

import { Logo } from '@/shared/ui/Icons/Logo/Logo'
import { TelegramIcon } from '@/shared/ui/Icons/TelegramIcon/TelegramIcon'
import { ViberIcon } from '@/shared/ui/Icons/ViberIcon/ViberIcon'
import { WhatsAppIcon } from '@/shared/ui/Icons/WhatsAppIcon/WhatsAppIcon'
import Link from 'next/link'
interface FooterProps {}

export const Footer = ({}: FooterProps) => {
	return (
		<footer className={cls.Footer}>
			<Container className={cls.Prefooter}>
				<div className={cls.General}>
					<Link href='/'>
						<Logo />
					</Link>
					<Typography variant='text'>
						Производство и монтаж противопожарных современных конструкций.
					</Typography>
				</div>
				<div className={cls.Navigation}>
					<h3 className={cls.Heading}>Навигация</h3>
					<ul>
						<li className={cls.Item}>
							<Link href='/' className={cls.Link}>
								Главная
							</Link>
						</li>
						<li className={cls.Item}>
							<Link href='/catalog' className={cls.Link}>
								Каталог
							</Link>
						</li>
						<li className={cls.Item}>
							<Link href='/delivery' className={cls.Link}>
								Доставка
							</Link>
						</li>
						<li className={cls.Item}>
							<Link href='/about' className={cls.Link}>
								О компании
							</Link>
						</li>
						<li className={cls.Item}>
							<Link href='/contacts' className={cls.Link}>
								Контакты
							</Link>
						</li>
					</ul>
				</div>
				<div className={cls.Contacts}>
					<h3 className={cls.Heading}>Свяжитесь с нами</h3>
					<ul>
						<li className={cls.Item}>
							<Link href='tel:+79852454338' className={cls.Link}>
								+7 (985) 245-43-38
							</Link>
						</li>
						<li className={cls.Item}>
							<Link href='mailto:info@spbserv.ru' className={cls.Link}>
								info@spbserv.ru
							</Link>
						</li>
					</ul>
					<div className={cls.Messangers}>
						<MessangerLink
							to='https://wa.me/79852454338'
							className='f-c'
							icon={<WhatsAppIcon className='nav__list-icon' />}
						/>
						<MessangerLink
							to='viber://chat?number=79852454338'
							className='f-c'
							icon={<ViberIcon className='nav__list-icon' />}
						/>
						<MessangerLink
							to='https://t.me/+79852454338'
							className='f-c'
							icon={<TelegramIcon className='nav__list-icon' />}
						/>
					</div>
				</div>
			</Container>
			<Typography variant='text' className={cls.Copyright}>
				2024 © ООО “СПБ-СЕРВИС”
			</Typography>
		</footer>
	)
}
