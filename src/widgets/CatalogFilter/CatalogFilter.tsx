import cls from './CatalogFilter.module.scss'

const CatalogFilter = () => {
	return (
		<aside className={cls.Aside}>
			<p className={cls.FilterName}>Цвет</p>
			<div>
				<label className=''>
					<span className=''>Aqua</span>
					<input
						aria-label='Aqua'
						name='Aqua'
						type='checkbox'
						role='switch'
						aria-checked='false'
						className=''
						value='false'
					/>
				</label>
			</div>
		</aside>
	)
}
export default CatalogFilter
