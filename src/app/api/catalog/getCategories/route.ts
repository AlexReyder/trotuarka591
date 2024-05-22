import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	const categories = [
		{
			name: 'Все',
			filterName: 'All',
		},
		{
			name: 'Тротуарная плитка',
			filterName: 'TP',
		},
		{
			name: 'Фасадная плитка',
			filterName: 'FP',
		},
		{
			name: 'Бордюры',
			filterName: 'B',
		},
	]

	return NextResponse.json(categories)
}
