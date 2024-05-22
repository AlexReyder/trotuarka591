import fs from 'fs'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	const data = await request.formData()

	const deleted: string = data.get('delete') as unknown as string
	const deletedItems: productItemI[] = JSON.parse(deleted)

	const order: string = data.get('order') as unknown as string
	const orderItems: productItemI[] = JSON.parse(order)

	if (deletedItems.length > 0) {
		deletedItems.forEach(item => {
			const productType = item.type
			const productName = item.name

			fs.rmSync(`public/img/products/${productType}/${productName}`, {
				recursive: true,
				force: true,
			})
		})
	}

	orderItems.forEach((item, i) => {
		item.id = i + 1
	})

	let result = JSON.stringify(orderItems)

	fs.writeFileSync('public/data/products.json', result)

	return NextResponse.json('')
}

export interface productItemI {
	id: number
	type: string
	name: string
	price: string
	priceColor: string
	description: string
	size: string
	pallet: string
	colors: any
	images: any
	slug: string
}
