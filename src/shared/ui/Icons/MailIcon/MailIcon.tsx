import { FC } from 'react'
import { Icons } from '../OkIcon/OkIcon'

export const MailIcon: FC<Icons> = ({ className, fill = 'none' }: Icons) => {
	return (
		<svg
			className={className}
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 34 23'
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M22.1789 11.0129L33.998 21.7422C33.9996 21.7166 34 21.691 34 21.6654L33.9684 1.04409L22.1789 11.0129ZM13.7243 10.2881L1.55705 0H32.4429L17.0002 13.0576L13.7243 10.2881ZM13.1939 12.1732L16.4266 14.9065C16.7478 15.1852 17.2293 15.197 17.5654 14.9138L20.8065 12.1732L32.7322 22.9992C32.7165 22.9996 32.7005 23 32.6845 23H1.3159C1.29988 23 1.28426 22.9996 1.26824 22.9992L13.1939 12.1732ZM0.00240349 21.7426L11.8219 11.0133L0.0316458 1.04409L0 21.6658C0 21.6914 0.000801176 21.717 0.00240349 21.7426Z'
				fill={fill}
			/>
		</svg>
	)
}
