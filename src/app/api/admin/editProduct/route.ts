import fs from 'fs'
import { NextResponse } from 'next/server'
import { productItemI } from '../saveOrder/route'

export async function POST(request: Request) {
	const data = await request.formData()
	const res: string | null = data.get('data') as unknown as string
	const newProduct: productItemI = JSON.parse(res)

	newProduct.images.originals.forEach((orig: string[], i: number) => {
		const newPath = orig[0].split('/').slice(0, -1).join('/') + `/${++i}.jpg`
		fs.renameSync(orig[0], newPath)
		orig[0] = newPath
	})

	newProduct.images.previews.forEach((prev: string[], i: number) => {
		const newPath = prev[0].split('/').slice(0, -1).join('/') + `/${++i}.jpg`

		fs.renameSync(prev[0], newPath)
		prev[0] = newPath
	})

	const AllProductsJSON = fs.readFileSync('public/data/products.json', 'utf-8')
	const products: productItemI[] = JSON.parse(AllProductsJSON)

	const index = products.findIndex(
		arr => arr.type == newProduct.type && arr.name == newProduct.name
	)
	products[index] = newProduct

	let result = JSON.stringify(products)
	fs.writeFileSync('public/data/products.json', result)

	return NextResponse.json('')
}
