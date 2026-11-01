export const navigationGroups = [
  { label: 'About', links: [
    { href: '/about', label: 'About Us' },
    { href: '/about-saarah', label: 'About Saarah' },
    { href: '/five-year-anniversary', label: 'Five Year Anniversary' },
    { href: '/ten-year-anniversary', label: 'Ten Year Anniversary' },
    { href: '/words-of-comfort', label: 'Words of Comfort' },
  ] },
  { label: 'Our Work', links: [
    { href: '/our-impact', label: 'Our Impact' },
    { href: '/where-we-work', label: 'Where We Work' },
    { href: '/gaza-incubator-appeal', label: 'Gaza Incubator Appeal' },
    { href: '/sudan-incubator-appeal', label: 'Sudan Incubator Appeal' },
  ] },
] as const

export const directLinks = [
  { href: '/news-and-events', label: 'News & Events' },
  { href: '/useful-links', label: 'Useful Links' },
  { href: '/contact-us', label: 'Contact Us' },
] as const

export const allPages = [
  { href: '/', label: 'Home' },
  ...navigationGroups.flatMap(group => [...group.links]),
  ...directLinks,
  { href: '/donate', label: 'Donate' },
]
