import Link from 'next/link'
import Image from 'next/image'
import { contactDetails } from '@/content/site'
import { allPages } from '@/content/navigation'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Link className="brand" href="/"><Image src="/images/saarahsfundlogo5.png" alt="" width={45} height={45} /><span>Saarah’s Fund</span></Link>
          <p>Making a difference in children&apos;s lives through your support. Every contribution helps us provide vital medical equipment and care to children in need.</p>
          <div className="social-links">
            <a href="https://facebook.com/saarahsfund">Facebook</a>
            <a href="https://linkedin.com/in/talibali1/">LinkedIn</a>
          </div>
        </div>
        <div>
          <h2>Quick Links</h2>
          <nav aria-label="Footer navigation">{allPages.map(page => <Link href={page.href} key={page.href}>{page.label}</Link>)}</nav>
        </div>
        <div>
          <h2>Contact Us</h2>
          <p>For inquiries and support, please don&apos;t hesitate to reach out.</p>
          <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
          <a href={contactDetails.telephoneHref}>{contactDetails.telephone}</a>
          <Link href="/contact-us" className="footer-contact">Get in Touch →</Link>
          <p className="charity-note">Saarah&apos;s Fund is registered with the UK Charities Commission.<br />Charity Number: <a href="https://register-of-charities.charitycommission.gov.uk/en/charity-search/?p_p_id=uk_gov_ccew_onereg_charitydetails_web_portlet_CharityDetailsPortlet&p_p_lifecycle=0&p_p_state=maximized&p_p_mode=view&_uk_gov_ccew_onereg_charitydetails_web_portlet_CharityDetailsPortlet_regId=1143322&_uk_gov_ccew_onereg_charitydetails_web_portlet_CharityDetailsPortlet_subId=0">1143322</a></p>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Saarah&apos;s Fund. All rights reserved.</span>
        <span>Hosted by <a href="https://www.kualo.com/free-charity-hosting">Kualo Charity Web Hosting</a> - Kualo have been kind enough to include us in their free charity hosting project.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
