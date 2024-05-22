import axios from 'axios'

export async function getAllDataByType(objectType = 'categories') {
	const params = {
		query: {
			type: objectType,
		},
		props: 'title,slug,id,metadata',
		sort: '-created_at',
	}

	try {
		const data = [
			{
				id: 1,
				type: 'Тротуарная плитка',
			},
			{
				id: 2,
				type: 'Фасадная плитка',
			},
			{
				id: 3,
				type: 'Бордюры',
			},
		]
		return data
	} catch (error) {
		return { error }
	}
}

export async function filterDataByParams({
	min,
	max,
	color,
	category,
	search,
}) {
	let queryParam = {}

	if (min.length || max.length) {
		queryParam = {
			...queryParam,
			'metadata.price': {
				$gte: min?.length ? Number(min) : 1,
				$lte: max.length ? Number(max) : 10000000000,
			},
		}
	}

	if (color?.toLocaleLowerCase() !== 'any color') {
		queryParam = { ...queryParam, 'metadata.color': color }
	}

	if (typeof category !== 'undefined') {
		queryParam = { ...queryParam, 'metadata.categories': category }
	}

	if (search.length && typeof search !== 'undefined') {
		queryParam = { ...queryParam, title: { $regex: search, $options: 'i' } }
	}

	const params = {
		query: {
			...queryParam,
			type: 'products',
		},
		props: 'title,slug,metadata,created_at',
	}

	try {
		await axios.get('/api/admin/getProducts').then(data => {
			return data.data
		})
	} catch (error) {
		return { error }
	}
}
