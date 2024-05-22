import cls from './Testimonial.module.scss'
interface TestimonialProps {
	className?: string
	username: string
	text: string
	date: string
}

const Testimonial = ({ className, username, text, date }: TestimonialProps) => {
	return (
		<div className={cls.container}>
			<p className={cls.text}>{text}</p>
			<h3 className={cls.username}>{username}</h3>
			<p className={cls.date}>{date}</p>
		</div>
	)
}
export default Testimonial
