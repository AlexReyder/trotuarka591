'use client'
import { MailIcon } from '@/shared/ui/Icons/MailIcon/MailIcon'
import { PhoneIcon } from '@/shared/ui/Icons/PhoneIcon/PhoneIcon'
import { Menu } from '@/widgets/Menu'
import Link from 'next/link'
import cls from './Header.module.scss'

export const Header = () => {
	return (
		<header className={cls.Header}>
			<Link href='/' className={cls.LogoBox}>
				<h2>Logo</h2>
			</Link>

			<nav className={cls.Nav}>
				<ul className={cls.Nav__list}>
					<li className={cls.Nav__item}>
						<Link href='/'>Главная</Link>
					</li>
					<li className={cls.Nav__item}>
						<Link href='/catalog'>Каталог</Link>
					</li>
					<li className={cls.Nav__item}>
						<Link href='/delivery'>Доставка</Link>
					</li>
					<li className={cls.Nav__item}>
						<Link href='/about'>О компании</Link>
					</li>
					<li className={cls.Nav__item}>
						<Link href='/contacts'>Контакты</Link>
					</li>
				</ul>
			</nav>
			<div className={cls.Communicate}>
				<Link href='tel:+79655516947' className={cls.Communicate__item}>
					<PhoneIcon className={cls.Icon} fill='#3C7B68' />
					<span>+7 (965) 551-69-47</span>
				</Link>
				<Link href='mailto:razrab@bk.ru' className={cls.Communicate__item}>
					<MailIcon className={cls.Icon} fill='#3C7B68' />
					<span>razrab@bk.ru</span>
				</Link>
			</div>

			<Menu className={cls.Hamburger} />
		</header>
	)
}
