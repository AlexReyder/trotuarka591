import { productItemI } from '@/app/api/admin/saveOrder/route'
import CatalogEntity from '@/entities/CatalogEntity/CatalogEntity'
import { Container } from '@/shared/ui/Layout/Container/Container'
import Breadcrumb from '@/widgets/Breadcrumb/Breadcrumb'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import axios from 'axios'
import cls from './page.module.scss'

export default async function Product({
	params,
}: {
	params: { slug: string }
}) {
	const { slug } = params
	let data
	await axios('http://localhost:3000/api/admin/getProducts', {
		headers: {
			'Cache-Control': 'no-cache',
			Pragma: 'no-cache',
			Expires: '0',
		},
	}).then(res => {
		data = res.data.filter((arr: productItemI) => arr.slug === slug)[0]
	})

	return (
		<main>
			<Header />
			{data ? (
				<Breadcrumb
					currentPage={`${
						data.type === 'TP'
							? 'Тротуарная плитка'
							: data.type === 'FP'
							? 'Фасадная плитка'
							: null
					} «${data.name}»`}
					prevPageName='Каталог'
					prevPageLink='/catalog'
				/>
			) : null}

			<Container className={cls.Container}>
				{data ? <CatalogEntity data={data} /> : null}
			</Container>
			{/* <ProjectHero data={data} />
			<ProjectGallery
				title='Проект'
				subtitle='Фотографии'
				data={data.GalleryImages}
			/>
			<ProjectGallery
				title='Планировка'
				subtitle='Фотографии'
				data={data.GalleryLayout}
			/> */}

			{/* <ContactSection /> */}
			<Footer />
		</main>
	)
}
