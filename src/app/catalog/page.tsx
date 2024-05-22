'use client'
import CatalogCard from '@/entities/CatalogCard/CatalogCard'
import { WatchIcon } from '@/shared/ui/Icons/WatchIcon/WatchIcon'
import { Container } from '@/shared/ui/Layout/Container/Container'
import Breadcrumb from '@/widgets/Breadcrumb/Breadcrumb'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import axios from 'axios'
import cn from 'classnames'
import { useEffect, useState } from 'react'
import { productItemI } from '../api/admin/saveOrder/route'
import { productSizesI } from '../api/catalog/getSizes/route'
import cls from './page.module.scss'

export default function Catalog() {
	useEffect(() => {
		const fetchData = async () => {
			const products = await axios('/api/admin/getProducts', {
				headers: {
					'Cache-Control': 'no-cache',
					Pragma: 'no-cache',
					Expires: '0',
				},
			})
			setProducts(products.data)
			setFilteredProduct(products.data)

			const categories = await axios('/api/catalog/getCategories', {})
			setCategories(categories.data)

			const sizes = await axios('/api/catalog/getSizes', {})
			setSizes(sizes.data)
		}
		fetchData()
	}, [])

	const [products, setProducts] = useState<productItemI[]>([])
	const [categories, setCategories] = useState([])
	const [selectedCategory, setSelectedCategory] = useState('All')
	const [query, setQuery] = useState('')
	const [colors, setColors] = useState({
		grey: true,
		black: false,
		yellow: false,
		red: false,
		brown: false,
		blue: false,
	})
	const [sizes, setSizes] = useState<productSizesI[]>([])
	const [filteredProduct, setFilteredProduct] = useState<productItemI[]>([])
	const [isCollapsed, setIsCollapsed] = useState(false)

	const filteredQuery = (products: productItemI[]) =>
		query === ''
			? products
			: products.filter(
					product =>
						product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
			  )

	const filteredCategories = () =>
		selectedCategory === 'All'
			? products
			: products.filter(product => product.type === selectedCategory)

	const filteredColors = () => {
		const filtred = products.filter(product => {
			let status = false
			for (const [key, value] of Object.entries(colors)) {
				if (!value) {
					continue
				}
				// console.log(key)
				// console.log(product.colors[key])
				if (product.colors[key] === value) {
					status = true
				} else {
					status = false
					break
				}
			}
			return status
		})
		return filtred
	}

	const filteredSizes = (products: productItemI[]) => {
		if (sizes.some(el => el.checked)) {
			const filtered = products.filter(product => {
				const currentSizes = sizes.filter(size => size.checked)
				const status = currentSizes.some(size => size.title === product.size)
				console.log('HEYYYYY')
				return status
			})
			return filtered
		} else {
			return products
		}
	}

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value)
	}

	const handleChangeCategory = (categoryId: string) => {
		setSelectedCategory(categoryId)
	}

	const handleInputColorsChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setColors({ ...colors, [event.target.name]: !colors[event.target.name] })
	}

	const handleInputSizeChange = (i: number) => {
		const sizesState = [...sizes]
		sizesState[i].checked = !sizesState[i].checked
		setSizes(sizesState)
	}

	function filteredData(products, query, category, colors, sizes) {
		let filteredProducts = products

		if (query) {
			filteredProducts = filteredQuery(filteredProducts)
			return filteredProducts
		}

		if (category && colors) {
			const filteredData = [...filteredCategories(), ...filteredColors()]
			// console.log(filteredData)

			var map = new Map()
			filteredData.forEach(a => map.set(a, (map.get(a) || 0) + 1))
			// console.log(filteredData)
			const dublData = filteredData.filter(a => map.get(a) > 1)
			// console.log(dublData)
			const data = dublData.filter(
				(person, index) =>
					index ===
					dublData.findIndex(
						other => person.name === other.name && person.type === other.type
					)
			)

			if (sizes) {
				filteredProducts = filteredSizes(data)
				return filteredProducts
			}

			return data
			// const filteredData = [...filteredCategories(), ...filteredColors()]
			// // console.log(filteredData)

			// var map = new Map()
			// filteredData.forEach(a => map.set(a, (map.get(a) || 0) + 1))
			// // console.log(filteredData)
			// const dublData = filteredData.filter(a => map.get(a) > 1)
			// // console.log(dublData)
			// const data = dublData.filter(
			// 	(person, index) =>
			// 		index ===
			// 		dublData.findIndex(
			// 			other => person.name === other.name && person.type === other.type
			// 		)
			// )

			// if (query) {
			// 	filteredProducts = filteredQuery(data)
			// 	return filteredProducts
			// }
			// return data
		}

		return filteredProducts
	}

	const handleCollapse = () => {
		setIsCollapsed(!isCollapsed)
	}

	useEffect(() => {
		setFilteredProduct(
			filteredData(filteredProduct, query, selectedCategory, colors, sizes)
		)
	}, [query, selectedCategory, colors, sizes])

	return (
		<main className={cls.Main}>
			<Header />
			<Breadcrumb currentPage='Каталог' />
			<Container className={cls.Container}>
				<div className={cn('section-pt80', cls.section)}>
					<div className={cn('container', cls.container)}>
						<div className={cls.row}>
							<div
								className={`${cls.filters} ${
									isCollapsed ? cls.CollapsedFilter : null
								}`}
							>
								<div className={cls.top}>
									<div className={cls.title}>Фильтры</div>
								</div>
								<div className={cls.form}>
									<div className={cls.label}>Поиск</div>
									<input
										className={cls.input}
										type='text'
										value={query}
										onChange={handleInputChange}
										name='search'
										placeholder='Введите слово...'
										required
									/>
									{/* <button className={cls.result}></button> */}
								</div>
								<div className={cls.colors}>
									<div className={cls.label}>Цвета</div>
									<div className={cls.colorsWrapper}>
										<label
											className={`${cls.colorsLabel} ${cls.colorsLabel__grey} ${
												colors.grey ? cls.colorsChecked : null
											}`}
										>
											<input
												className={cls.colorsInput}
												aria-label='grey'
												name='grey'
												type='checkbox'
												role='switch'
												aria-checked='false'
												checked={colors.grey}
												onChange={handleInputColorsChange}
											/>
										</label>
										<label
											className={`${cls.colorsLabel} ${
												cls.colorsLabel__brown
											} ${colors.brown ? cls.colorsChecked : null}`}
										>
											<input
												className={cls.colorsInput}
												aria-label='brown'
												name='brown'
												type='checkbox'
												role='switch'
												aria-checked='false'
												checked={colors.brown}
												onChange={handleInputColorsChange}
											/>
										</label>
										<label
											className={`${cls.colorsLabel} ${cls.colorsLabel__yellow}
											${colors.yellow ? cls.colorsChecked : null}`}
										>
											<input
												className={cls.colorsInput}
												aria-label='yellow'
												name='yellow'
												type='checkbox'
												role='switch'
												aria-checked='false'
												checked={colors.yellow}
												onChange={handleInputColorsChange}
											/>
										</label>
										<label
											className={`${cls.colorsLabel} ${cls.colorsLabel__red}
											${colors.red ? cls.colorsChecked : null}`}
										>
											<input
												className={cls.colorsInput}
												aria-label='red'
												name='red'
												type='checkbox'
												role='switch'
												aria-checked='false'
												checked={colors.red}
												onChange={handleInputColorsChange}
											/>
										</label>
										<label
											className={`${cls.colorsLabel} ${cls.colorsLabel__blue}
											${colors.blue ? cls.colorsChecked : null}`}
										>
											<input
												className={cls.colorsInput}
												aria-label='blue'
												name='blue'
												type='checkbox'
												role='switch'
												aria-checked='false'
												checked={colors.blue}
												onChange={handleInputColorsChange}
											/>
										</label>
										<label
											className={`${cls.colorsLabel} ${cls.colorsLabel__black}
											${colors.black ? cls.colorsChecked : null}`}
										>
											<input
												className={cls.colorsInput}
												aria-label='black'
												name='black'
												type='checkbox'
												role='switch'
												aria-checked='false'
												checked={colors.black}
												onChange={handleInputColorsChange}
											/>
										</label>
									</div>
								</div>
								<div className={cls.sizes}>
									<div className={cls.label}>Размеры</div>
									{sizes?.map((item, i) => (
										<div className={cls.size__container} key={`s${i}`}>
											<input
												className={cls.size__input}
												type='checkbox'
												checked={sizes[i].checked}
												onChange={() => handleInputSizeChange(i)}
												name={item.name}
												id={item.name}
												placeholder='Введите слово...'
												required
											/>
											<label htmlFor={item.name}>{item.title}</label>
										</div>
									))}
								</div>
								{isCollapsed ? (
									<button className={cls.FilterApply} onClick={handleCollapse}>
										Применить
									</button>
								) : null}
							</div>
							<div className={cls.wrapper}>
								<div className={cls.nav}>
									<button
										className={`${cls.FilterButton} ${
											isCollapsed ? cls.FilterButton__Collapsed : null
										}`}
										onClick={handleCollapse}
									>
										<WatchIcon className={cls.FilterButtonIcon} />
										<span>Фильтры</span>
									</button>
									{categories?.map(item => (
										<button
											className={cn(cls.link, {
												[cls.active]: item?.filterName === selectedCategory,
											})}
											onClick={() => handleChangeCategory(item.filterName)}
											key={item?.filterName}
										>
											{item?.name}
										</button>
									))}
								</div>
								<div className={cls.list}>
									{
										filteredProduct?.length
											? filteredProduct?.map(product => (
													<CatalogCard
														className={cls.card}
														item={product}
														key={product.id}
													/>
											  ))
											: null
										// (
										// 	<p className={cls.inform}>Try another category!</p>
										// )
									}
								</div>
							</div>
							<div
								className={`${cls.BlackScreen} ${
									isCollapsed ? cls.BlackScreenOn : null
								}`}
								onClick={handleCollapse}
							></div>
						</div>
					</div>
				</div>
			</Container>

			<Footer />
		</main>
	)
}

interface filteredDataI {
	products: productItemI[]
	query: string
	category: string
	colors: any
	sizes: productSizesI
}
