import theme from '@/admin-scenes/theme'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import { Metadata } from 'next'
import Sidebar from '../../admin-scenes/global/Sidebar'
import './style.css'

export const metadata: Metadata = {
	title: 'Панель администратора',
}

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<AppRouterCacheProvider>
			<ThemeProvider theme={theme}>
				<div className='app'>
					<Sidebar />
					<main className='content'>{children}</main>
				</div>
			</ThemeProvider>
		</AppRouterCacheProvider>
	)
}
