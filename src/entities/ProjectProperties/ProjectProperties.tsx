import cls from './ProjectProperties.module.scss'

interface ProjectPropertiesProps {
	data?: any
}

export const ProjectProperties = ({ data }: ProjectPropertiesProps) => {
	return (
		<ul className={cls.Propeties}>
			<li className={cls.Property}>
				<p className={cls.Item}>Размер: {data.size}</p>
			</li>
			<li className={cls.Property}>
				<p className={cls.Item}>На поддоне: {data.square}</p>
			</li>
		</ul>
	)
}
