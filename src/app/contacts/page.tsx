import { ContactSection } from '@/sections/ContactSection/ContactSection'
import { MapSection } from '@/sections/MapSection/MapSection'
import Breadcrumb from '@/widgets/Breadcrumb/Breadcrumb'

export default function Contacts() {
	return (
		<main>
			<Breadcrumb currentPage='Контакты' />
			<MapSection />
			<ContactSection />
		</main>
	)
}
