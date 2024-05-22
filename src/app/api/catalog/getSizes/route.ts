import fs from 'fs'
import { NextResponse } from 'next/server'
import { productItemI } from '../../admin/saveOrder/route'

export async function GET(request: Request) {
	const AllProductsJSON = fs.readFileSync('public/data/products.json', 'utf-8')
	const products: productItemI[] = JSON.parse(AllProductsJSON)

	const sizes: string[] = []
	products.forEach(product => {
		sizes.push(product.size)
	})

	const sizeArr = uniq(sizes)
	const data: productSizesI[] = sizeArr.map((el: productSizesI, i: number) => {
		return { checked: false, name: `size${i}`, title: el }
	})
	// const data = sizeArr.reduce((a, v, i) => ({ ...a, [v]: false }), {})
	return NextResponse.json(data)
}

function uniq(a: any) {
	var seen = {}
	return a.filter(function (item: any) {
		return seen.hasOwnProperty(item) ? false : (seen[item] = true)
	})
}

export interface productSizesI {
	checked: boolean
	name: string
	title: string
}
