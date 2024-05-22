import { quizData } from '@/shared/data/quiz'
import { Modal } from '@/shared/ui/Modal'
import { Quiz } from '@/widgets/Quiz'
import cls from './QuizModal.module.scss'
interface QuizModalProps {
	className?: string
	isOpen: boolean
	handleClose: () => void
}

export const QuizModal = ({
	className,
	isOpen,
	handleClose,
}: QuizModalProps) => {
	return (
		<Modal
			type='Quiz'
			isOpen={isOpen}
			onClose={handleClose}
			className={cls.Quiz}
		>
			<Quiz data={quizData} />
		</Modal>
	)
}
