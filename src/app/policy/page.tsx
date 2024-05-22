import { PrivacyArticle } from '@/entities/PrivacyArticle/PrivacyArticle'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'

export default function Policy() {
	return (
		<main>
			<Header bg='gold' />
			<PrivacyArticle />
			<Footer />
		</main>
	)
}
