import { IMAGES } from '../data'
import PageHeader from '../components/PageHeader'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        title={<>Let&rsquo;s talk about<br /><span className="gradient-text">your project</span></>}
        lead="Questions, demos or a new project — our team replies within one business day."
        image={IMAGES.contact}
      />
      <Contact />
    </>
  )
}
