import { Container } from '@/shared/ui/Layout/Container/Container'
import Link from 'next/link'
import cls from './Breadcrumb.module.scss'

interface BreadcrumbProps {
	currentPage: string
	prevPageName?: string
	prevPageLink?: string
}

const Breadcrumb = ({
	currentPage,
	prevPageName,
	prevPageLink,
}: BreadcrumbProps) => {
	return (
		<Container className={cls.Breadcrumb}>
			<Link href={'/'} className={cls.PrevPage}>
				Главная
			</Link>
			{prevPageName ? (
				<span>
					<span>&nbsp; &nbsp; / &nbsp; &nbsp; </span>
					<Link href={prevPageLink!} className={cls.PrevPage}>
						{prevPageName}
					</Link>
				</span>
			) : null}
			<span>&nbsp; &nbsp; / &nbsp; &nbsp; </span>
			<p className={cls.CurrentPage}>{currentPage}</p>
		</Container>
	)
}
export default Breadcrumb
