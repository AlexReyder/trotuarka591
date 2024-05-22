import axios from 'axios'
import { useEffect, useState } from 'react'

import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import ErrorIcon from '@mui/icons-material/Error'
import { CircularProgress } from '@mui/material'

interface NewProductI {
	defaultStatus: string
	resizeFile: any
	innerId: any
	productType: string
	productName: string
	returnData: (data: any) => void
	clearOutputData: boolean
}

export default function NewProduct({
	defaultStatus,
	resizeFile,
	innerId,
	productType,
	productName,
	returnData,
	clearOutputData,
}: NewProductI) {
	const [status, setStatus] = useState(defaultStatus)
	const [data, setData] = useState(null)
	useEffect(() => {
		setData(null)
		setStatus('upload')
	}, [clearOutputData])

	async function handleUploadHouseImage(
		event: React.ChangeEvent<HTMLInputElement>
	) {
		setStatus('loading')

		if (!event.target.files) return

		const original_img = await resizeFile(event.target.files[0], 1920, 1440)

		const preview_img = await resizeFile(event.target.files[0], 600, 450)

		let formData = new FormData()
		formData.append('original', original_img)
		formData.append('preview', preview_img)
		formData.append('innerId', innerId)
		formData.append('productType', productType)
		formData.append('productName', productName)

		await axios
			.post('/api/admin/uploadImages', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then(res => {
				console.log(res.data)
				setData(res.data)
				returnData(res.data)
				setStatus('upload')
			})
			.catch(err => {
				setStatus('error')
				console.log(err)
			})
	}
	return (
		<div>
			<label htmlFor='house' className='modal__paper'>
				{status === 'upload' ? (
					<DriveFolderUploadIcon className='modal__icon-upload' />
				) : status === 'loading' ? (
					<CircularProgress />
				) : status === 'loaded' ? null : (
					<ErrorIcon className='modal__icon-error' />
				)}
				{productType && productName && innerId ? (
					<input
						type='file'
						name='house'
						id='house'
						className='modal__upload'
						onChange={handleUploadHouseImage}
					/>
				) : null}
			</label>
			<p className='modal__title'>Загрузить изображение</p>
		</div>
	)
}
