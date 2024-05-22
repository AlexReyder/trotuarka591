import { FC } from 'react'
import { Icons } from '../OkIcon/OkIcon'

export const PhoneIcon: FC<Icons> = ({ className, fill = 'none' }: Icons) => {
	return (
		<svg
			className={className}
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
		>
			<mask
				id='mask0_21_1764'
				style={{ maskType: 'luminance' }}
				maskUnits='userSpaceOnUse'
				x='0'
				y='0'
				width='24'
				height='24'
			>
				<path d='M24 0H0V23.1579H24V0Z' fill='white' />
			</mask>
			<g mask='url(#mask0_21_1764)'>
				<path
					d='M7.59406 1.10485C7.23945 0.270242 6.30459 -0.173988 5.4112 0.063832L1.35855 1.14075C0.557238 1.35614 0 2.06511 0 2.8728C0 13.9741 9.23815 22.9753 20.6316 22.9753C21.4605 22.9753 22.1882 22.4324 22.4092 21.6516L23.5145 17.7029C23.7586 16.8324 23.3026 15.9215 22.4461 15.576L18.025 13.7811C17.2744 13.476 16.404 13.6869 15.8928 14.3016L14.0323 16.5138C10.7901 15.0196 8.16514 12.4619 6.63158 9.30291L8.90198 7.49457C9.53288 6.99204 9.74935 6.14842 9.43617 5.41701L7.59406 1.10934V1.10485Z'
					fill={fill}
				/>
			</g>
		</svg>
	)
}
