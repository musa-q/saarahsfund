import Link from 'next/link'
import Slideshow from '@/components/Slideshow'
import { charityTotals, gazaAppeal } from '@/content/site'

const slideshowImages = [
  '/images/sa8-crop-u4525.jpg',
  '/images/iman hospital.jpg',
  '/images/sa2.jpg',
  '/images/01040008.jpg',
  '/images/img_0884.jpg',
  '/images/the difference youre making.jpg',
]

const videos = [
  { title: 'Gaza Project', subtitle: 'Watch our work in Gaza', src: '/videos/gaza-vid-1.mp4', poster: '/images/gaza-2.jpg' },
  { title: 'Yemen Project', subtitle: 'Watch our work in Yemen', src: '/videos/yemen-vid-2.mp4', poster: '/images/yemen-2.jpg' },
  { title: 'Embrace Global Partnership', subtitle: 'Our global impact story', src: '/videos/embraceglobal.mp4', poster: '/images/sudan-training-2.jpeg' },
]

export default function HomePage() {
  return (
    <div className="home">
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1>Saving Newborn Lives.<br />Changing Children&apos;s Futures.</h1>
            <p className="lead">We provide life-saving incubators for newborns and fund life-enhancing projects for sick children and those with special needs, powered by compassion, commitment and your invaluable support.</p>
            <p className="hero-note">Every donation helps us provide vital equipment and care.</p>
            <div className="actions"><Link href="/donate" className="button">Donate Now</Link></div>
          </div>
          <div className="hero-visual">
            <Slideshow images={slideshowImages} className="hero-gallery" label="Saarah and our work" />
            <span className="hero-flourish" aria-hidden="true">♡</span>
          </div>
        </div>
      </section>

      <section className="impact-strip">
        <div className="wrap">
          <div className="section-heading"><h2>Our Impact</h2><Link href="/our-impact" className="text-link">Our Impact →</Link></div>
          <div className="impact-stats">
            <div><strong>{charityTotals.incubators}</strong><span>Incubators Provided</span><small>Helping save newborn lives</small></div>
            <div><strong>{charityTotals.babiesHelped}</strong><span>Babies Helped</span><small>Life-saving care provided</small></div>
            <div><strong>{charityTotals.fundsRaised}</strong><span>Funds Raised</span><small>Supporting children since 2011</small></div>
          </div>
        </div>
      </section>

      <section className="wrap editorial appeal">
        <div className="editorial-photo"><img src="/images/gaza-2.jpg" alt="Healthcare worker holding a newborn in a low-cost incubator in Gaza" width={960} height={1280} loading="lazy" decoding="async" /></div>
        <div className="editorial-copy">
          <span className="eyebrow">Urgent Appeal</span>
          <h2>{gazaAppeal.title}</h2>
          <p className="intro">{gazaAppeal.summary}</p>
          <div className="actions appeal-actions">{gazaAppeal.donationLinks.map(link => <a key={link.href} href={link.href} className="button" target="_blank" rel="noopener noreferrer">{link.label}</a>)}</div>
          <Link href={gazaAppeal.href} className="text-link">Find out more about our Gaza appeal →</Link>
        </div>
      </section>

      <section className="wrap videos-section">
        <div className="section-heading"><div><h2>See Our Work in Action</h2></div><Link href="/where-we-work" className="text-link">Where We Work →</Link></div>
        <div className="video-grid">{videos.map(video => <article key={video.src}>
          <video controls playsInline preload="none" poster={video.poster} aria-label={video.title}><source src={video.src} type="video/mp4" /><a href={video.src}>Open video</a></video>
          <h3>{video.title}</h3><p>{video.subtitle}</p>
        </article>)}</div>
      </section>

      <section className="closing-cta"><div className="wrap"><span aria-hidden="true" className="closing-heart">♡</span><div>
        <h2>Join Us in Making<br />a Difference</h2>
        <p>Your generosity enables the delivery of critical care to newborn babies in some of the world&apos;s most challenging circumstances and supports sick children and those with special needs in the UK and overseas.</p>
        <div className="actions"><a href="https://wonderful.org/pay?ref=1143322" target="_blank" rel="noopener noreferrer" className="button light">Donate Now</a><Link href="/contact-us" className="light-link">Contact us →</Link></div>
      </div></div></section>
    </div>
  )
}
