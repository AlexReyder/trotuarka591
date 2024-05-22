import fs from 'fs'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	const data = await request.formData()

	const deleted: string = data.get('delete') as unknown as string
	const deletedItems: string[] = JSON.parse(deleted)

	if (deletedItems.length > 0) {
		deletedItems.forEach(filepath => {
			fs.unlink(filepath, err => {
				if (err) {
					console.error(err)
				}
			})
		})
	}

	return NextResponse.json('')
}
