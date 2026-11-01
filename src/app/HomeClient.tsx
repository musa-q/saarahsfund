import Link from 'next/link'
import Slideshow from '@/components/Slideshow'
import { charityTotals, gazaAppeal, sudanUpdate, sudanDonationLinks } from '@/content/site'

const slideshowImages = [
  '/images/sudan-baby-1.jpeg',
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
            <h1>Saving newborn lives.<br />Changing children’s futures.</h1>
            <p className="lead">We provide life-saving incubators for newborns and fund life-enhancing projects for sick children and those with special needs — powered by compassion, commitment and your invaluable support.</p>
            <p className="hero-note">Every donation helps us provide vital equipment and care.</p>
            <div className="actions"><Link href="/donate" className="button">Donate Now</Link><Link href="/where-we-work" className="button button-outline">See our work →</Link></div>
          </div>
          <div className="hero-visual">
            <Slideshow images={slideshowImages} className="hero-gallery" label="Saarah and our work" />
            <span className="hero-flourish" aria-hidden="true">♡</span>
          </div>
        </div>
      </section>

      <section className="impact-strip">
        <div className="wrap">
          <div className="section-heading"><h2>Care that makes a difference.</h2><Link href="/our-impact" className="text-link">Our Impact →</Link></div>
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

      <section className="sudan-band">
        <div className="wrap sudan-feature">
          <div>
            <span className="eyebrow">Our Work in Sudan</span>
            <h2>Sudan Incubator Appeal</h2>
            <p>{sudanUpdate.summary}</p><p>{sudanUpdate.appeal}</p>
            <div className="actions">{sudanDonationLinks.map(link => <a href={link.href} key={link.href} className="button button-outline">{link.label}</a>)}</div>
            <Link href="/sudan-incubator-appeal" className="text-link">Read the Sudan update →</Link>
          </div>
          <img src="/images/sudan-training-1.jpeg" alt="Healthcare workers training to use low-cost incubators in Sudan" width={1080} height={1080} loading="lazy" decoding="async" />
        </div>
      </section>

      <section className="story-band">
        <div className="wrap editorial">
          <div className="story-portrait"><img src="/images/sa8-crop-u4525.jpg" alt="Saarah smiling outdoors in a green cardigan" width={232} height={240} loading="lazy" decoding="async" /><span className="portrait-caption">In loving memory of Saarah</span></div>
          <div className="editorial-copy"><span className="eyebrow">Our Story</span><h2>The heart behind<br />Saarah’s Fund.</h2>
            <p>We have set up Saarah&apos;s Fund in memory of Saarah, our beautiful and beloved 4 year old daughter, who passed away completely unexpectedly in her sleep on the 11th of March 2011.</p>
            <p>She brought us so much love and joy and was a source of inspiration to all who knew her.</p>
            <Link href="/about-saarah" className="button">Read Saarah’s story →</Link>
          </div>
        </div>
      </section>

      <section className="wrap videos-section">
        <div className="section-heading"><div><span className="eyebrow">Your Support in Action</span><h2>See Our Work in Action</h2></div><Link href="/where-we-work" className="text-link">Where We Work →</Link></div>
        <div className="video-grid">{videos.map(video => <article key={video.src}>
          <video controls playsInline preload="none" poster={video.poster} aria-label={video.title}><source src={video.src} type="video/mp4" /><a href={video.src}>Open video</a></video>
          <h3>{video.title}</h3><p>{video.subtitle}</p>
        </article>)}</div>
      </section>

      <section className="updates-band"><div className="wrap">
        <div className="section-heading"><div><span className="eyebrow">Our Community</span><h2>Follow the journey.</h2></div><Link href="/news-and-events" className="text-link">All News & Events →</Link></div>
        <div className="updates-grid"><Link href="/news-and-events" className="update-feature"><img src="/images/manchester-marathon.jpg" alt="Tom Ali at the Manchester Marathon" width={170} height={185} loading="lazy" decoding="async" /><div><span className="eyebrow">2024 · Fundraising</span><h3>Tom Ali, Manchester Marathon</h3><span className="text-link">News & Events →</span></div></Link>
          <div className="milestone-links"><Link href="/five-year-anniversary">Five Years of Making a Difference →</Link><Link href="/ten-year-anniversary">10 Year Anniversary Appeal →</Link><Link href="/words-of-comfort">Words of Comfort →</Link></div>
        </div>
      </div></section>

      <section className="closing-cta"><div className="wrap"><span aria-hidden="true" className="closing-heart">♡</span><div>
        <h2>Join Us in Making<br />a Difference</h2>
        <p>Your generosity enables the delivery of critical care to newborn babies in some of the world&apos;s most challenging circumstances and supports sick children and those with special needs in the UK and overseas.</p>
        <div className="actions"><a href="https://wonderful.org/pay?ref=1143322" target="_blank" rel="noopener noreferrer" className="button light">Donate Now</a><Link href="/contact-us" className="light-link">Contact us →</Link></div>
      </div></div></section>
    </div>
  )
}
