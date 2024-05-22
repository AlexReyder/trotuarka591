'use client'
import AddIcon from '@mui/icons-material/Add'
import ClearIcon from '@mui/icons-material/Clear'
import RemoveIcon from '@mui/icons-material/Delete'
import {
	Alert,
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
	Radio,
	RadioGroup,
	TextField,
	Typography,
} from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import Resizer from 'react-image-file-resizer'

import NewProduct from './NewProduct'

interface AddingPalettesModalI {
	open: boolean
	handleClose: () => void
	productId: number
	updateData: () => void
}

interface productImagesI {
	originals: string[]
	previews: string[]
}

const AddingPalettesModal = ({
	open,
	handleClose,
	productId,
	updateData,
}: AddingPalettesModalI) => {
	const [productType, setProductType] = useState('')
	const [productName, setProductName] = useState('')
	const [productPrice, setProductPrice] = useState('')
	const [productPriceColor, setProductPriceColor] = useState('')
	const [productDescription, setProductDescription] = useState('')
	const [productSize, setProductSize] = useState('')
	const [productPallet, setProductPallet] = useState('')
	const [productColors, setProductColors] = useState({
		grey: true,
		black: false,
		yellow: false,
		red: false,
		brown: false,
		blue: false,
	})
	const [productImages, setProductImages] = useState<productImagesI>({
		originals: [],
		previews: [],
	})
	const [innerId, setInnerId] = useState(1)

	const [clearOutputData, activateClearOutputData] = useState(false)

	const [isAllDataCompleteAlert, setAllDataCompleteAlert] = useState(true)

	const handleChangeProductType = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setProductType((event.target as HTMLInputElement).value)
	}

	const handleChangeProductName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setProductName(e.target.value)
	}
	const handleChangeProductPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
		setProductPrice(e.target.value)
	}
	const handleChangeProductPriceColor = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setProductPriceColor(e.target.value)
	}

	const handleChangeProductDescription = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setProductDescription(e.target.value)
	}

	const handleChangeProductSize = (e: React.ChangeEvent<HTMLInputElement>) => {
		setProductSize(e.target.value)
	}

	const handleChangeProductPallet = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setProductPallet(e.target.value)
	}

	const handleChangeProductColors = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setProductColors({
			...productColors,
			[event.target.name]: event.target.checked,
		})
	}

	const handleMutateProductImages = (data: any) => {
		productImages.originals.push(data.originals)
		productImages.previews.push(data.previews)
		setInnerId(innerId + 1)
	}

	const handleRemoveProductImage = (i: number) => {
		productImages.originals.splice(i, 1)
		productImages.previews.splice(i, 1)
		setInnerId(innerId - 1)
	}

	const resizeFile = (file: Blob, maxWidth: number, maxHeight: number) =>
		new Promise(resolve => {
			Resizer.imageFileResizer(
				file,
				maxWidth,
				maxHeight,
				'JPEG',
				80,
				0,
				uri => {
					resolve(uri)
				},
				'file'
			)
		})
	const cancelAdding = () => {
		if (productImages.originals.length === 0) {
			resetStatesData()
			handleClose()
			setAllDataCompleteAlert(true)
			return
		}

		let formData = new FormData()
		formData.append('path', `public/img/products/${productType}/${productName}`)
		axios
			.post('/api/admin/cancelAddingNewProduct', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then(() => {
				resetStatesData()
				handleClose()
			})
	}
	async function addNewPalette() {
		if (
			productType === '' ||
			productName === '' ||
			productPrice === '' ||
			productPriceColor === '' ||
			productSize === '' ||
			productPallet === '' ||
			productType === '' ||
			productImages.originals.length === 0
		) {
			setAllDataCompleteAlert(false)
			return
		}

		const data = {
			id: productId,
			type: productType,
			name: productName,
			price: productPrice,
			priceColor: productPriceColor,
			description: productDescription,
			size: productSize,
			pallet: productPallet,
			colors: productColors,
			images: productImages,
		}

		let formData = new FormData()
		formData.append('data', JSON.stringify(data))

		await axios
			.post('/api/admin/addNewProduct', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then(res => {
				updateData()
				resetStatesData()
				handleClose()
				setAllDataCompleteAlert(true)
			})
			.catch(e => {
				console.log(e)
			})
	}
	const resetStatesData = () => {
		activateClearOutputData(!clearOutputData)
		setProductType('')
		setProductName('')
		setProductPrice('')
		setProductPriceColor('')
		setProductDescription('')
		setProductSize('')
		setProductPallet('')
		setProductColors({
			grey: true,
			black: false,
			yellow: false,
			red: false,
			brown: false,
			blue: false,
		})
		setProductImages({
			originals: [],
			previews: [],
		})
		setInnerId(1)
	}

	return (
		<div className={`modal ${open ? 'modal--active' : ''}`}>
			<div className='modal__content'>
				<Typography
					variant='h2'
					sx={{
						fontWeight: 500,
						textAlign: 'center',
						mt: '20px',
						mb: '20px',
					}}
				>
					Добавить новый продукт
				</Typography>
				<div className='product-type'>
					<FormControl>
						<FormLabel id='demo-controlled-radio-buttons-group'>
							Тип продукта
						</FormLabel>
						<RadioGroup
							aria-labelledby='demo-controlled-radio-buttons-group'
							name='controlled-radio-buttons-group'
							value={productType}
							onChange={handleChangeProductType}
							row
						>
							<FormControlLabel
								value='TP'
								control={<Radio />}
								label='Тротуарная плитка'
							/>
							<FormControlLabel
								value='FP'
								control={<Radio />}
								label='Фасадная плитка'
							/>
							<FormControlLabel value='B' control={<Radio />} label='Бордюры' />
						</RadioGroup>
					</FormControl>
				</div>
				<div className='product-name'>
					<TextField
						margin='normal'
						required
						label='Название продукции'
						type='text'
						sx={{ width: '50%' }}
						value={productName}
						onChange={handleChangeProductName}
					/>
				</div>
				<div className='product-price'>
					<TextField
						margin='normal'
						required
						label='Стоимость за м2'
						type='text'
						sx={{ width: '50%' }}
						value={productPrice}
						onChange={handleChangeProductPrice}
					/>
				</div>
				<div className='product-color-price'>
					<TextField
						margin='normal'
						required
						label='Стоимость за цветное исполнение м2'
						type='text'
						sx={{ width: '50%' }}
						value={productPriceColor}
						onChange={handleChangeProductPriceColor}
					/>
				</div>
				<div className='product-description'>
					<TextField
						margin='normal'
						label='Описание продукта'
						type='text'
						sx={{ width: '100%' }}
						value={productDescription}
						onChange={handleChangeProductDescription}
						multiline
						rows={4}
					/>
				</div>
				<div className='product-size'>
					<TextField
						margin='normal'
						required
						label='Размер в мм'
						type='text'
						sx={{ width: '50%' }}
						value={productSize}
						onChange={handleChangeProductSize}
					/>
				</div>
				<div className='product-pallet'>
					<TextField
						margin='normal'
						required
						label='На поддоне, м2'
						type='text'
						sx={{ width: '50%' }}
						value={productPallet}
						onChange={handleChangeProductPallet}
					/>
				</div>
				<div className='product-colors'>
					<FormControl component='fieldset' variant='standard'>
						<FormLabel component='legend'>Выберите цвета</FormLabel>
						<FormGroup row>
							<FormControlLabel
								control={
									<Checkbox
										checked={productColors.grey}
										onChange={handleChangeProductColors}
										name='grey'
									/>
								}
								label='Серый'
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={productColors.brown}
										onChange={handleChangeProductColors}
										name='brown'
									/>
								}
								label='Коричневый'
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={productColors.yellow}
										onChange={handleChangeProductColors}
										name='yellow'
									/>
								}
								label='Желтый'
							/>

							<FormControlLabel
								control={
									<Checkbox
										checked={productColors.red}
										onChange={handleChangeProductColors}
										name='red'
									/>
								}
								label='Красный'
							/>

							<FormControlLabel
								control={
									<Checkbox
										checked={productColors.blue}
										onChange={handleChangeProductColors}
										name='blue'
									/>
								}
								label='Синий'
							/>
							<FormControlLabel
								control={
									<Checkbox
										checked={productColors.black}
										onChange={handleChangeProductColors}
										name='black'
									/>
								}
								label='Черный'
							/>
						</FormGroup>
					</FormControl>
				</div>
				<div className='product-images'>
					{productImages.previews.map((item, i) => (
						<div key={item} className='product-image'>
							<img
								src={
									'/' +
									item
										.toString()
										.split('/')
										.filter(el => el !== 'public')
										.join('/')
								}
								width={120}
								height={120}
								alt='Продукция'
								loading='lazy'
							/>
							<button
								className='product-delete-image'
								onClick={() => handleRemoveProductImage(i)}
							>
								<RemoveIcon sx={{ fill: '#fff' }} />
							</button>
						</div>
					))}
					<div className='modal__main'>
						<div className='modal__box modal__box--1'>
							<NewProduct
								defaultStatus={'upload'}
								resizeFile={resizeFile}
								innerId={innerId}
								productType={productType}
								productName={productName}
								returnData={handleMutateProductImages}
								clearOutputData={clearOutputData}
							/>
						</div>
					</div>
				</div>

				<div className='palette__wrapper'>
					<Button
						variant='contained'
						size='large'
						sx={{
							mt: 3,
							mb: 2,
							mr: 2,
							backgroundColor: 'var(--color-primary)',
						}}
						endIcon={<ClearIcon />}
						onClick={cancelAdding}
					>
						Отмена
					</Button>
					<Button
						variant='contained'
						size='large'
						sx={{
							mt: 3,
							mb: 2,
							mr: 2,
							backgroundColor: 'var(--color-primary)',
						}}
						endIcon={<AddIcon />}
						onClick={addNewPalette}
					>
						Добавить
					</Button>
				</div>
			</div>
			{!isAllDataCompleteAlert ? (
				<Alert
					variant='filled'
					severity='error'
					className='alert'
					onClick={() => setAllDataCompleteAlert(true)}
				>
					Не все поля заполнены!
				</Alert>
			) : null}
		</div>
	)
}

export default AddingPalettesModal
