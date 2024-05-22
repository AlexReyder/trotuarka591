'use client'
import { Container } from '@/shared/ui/Layout/Container/Container'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import cls from './CatalogSection.module.scss'

import { productItemI } from '@/app/api/admin/saveOrder/route'
import CatalogCard from '@/entities/CatalogCard/CatalogCard'
import { ArrowSlider } from '@/shared/ui/Sliders/ArrowSlider/ArrowSlider'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface CatalogSectionProps {
	className?: string
	heading: string
	type: string
}

export const CatalogSection = ({
	className,
	heading,
	type,
}: CatalogSectionProps) => {
	useEffect(() => {
		const fetchData = async () => {
			const products = await axios('/api/admin/getProducts', {
				headers: {
					'Cache-Control': 'no-cache',
					Pragma: 'no-cache',
					Expires: '0',
				},
			})
			const info = products.data.filter(
				(arr: productItemI) => arr.type === type
			)
			setData(info)
		}
		fetchData()
	}, [])
	const [data, setData] = useState([])

	const config = {
		spaceBetween: 20,
		slidesPerView: 3,
	}
	const z = data?.map((item: any, i: number) => {
		return [<CatalogCard className={cls.Card} item={item} key={`n${i}`} />]
	})

	console.log(z)
	return (
		<Section id='projects' className={cls.Projects}>
			<Container className={cls.Container}>
				<Headings title={heading} className={cls.Heading} />
				<div className={cls.Test}></div>
				<ArrowSlider
					prevNameNavigation='asdsad'
					nextNameNavigation='asda'
					config={config}
				>
					{z}
				</ArrowSlider>
			</Container>
		</Section>
	)
}
