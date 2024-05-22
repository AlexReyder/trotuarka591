import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import './globals.css'

const onest = Onest({
	subsets: ['cyrillic'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Строительство частных домов',
	description:
		'Строительство качественных домов в Краснодаре и по Краснодарскому краю с гарантией от 15 лет!',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={onest.className}>{children}</body>
		</html>
	)
}
