// Current charity-wide figures supplied on 15 September 2026.
// Keep dated country and project results separate from these totals.
export const charityTotals = {
  incubators: '400+',
  fundsRaised: '£275,000',
  babiesHelped: '9,800+',
} as const

export const contactDetails = {
  email: 'saarahsfund@gmail.com',
  telephone: '07748772332',
  telephoneHref: 'tel:+447748772332',
} as const

// Historical appeal update supplied on 25 May 2026, not a current charity total.
export const sudanUpdate = {
  summary: 'May 2026 update: donations had funded 100 low-cost incubators across Sudan, helping over 2,400 newborns.',
  appeal: 'Hundreds more incubators are needed. Please donate and share the appeal to help us reach more babies.',
} as const

export const gazaAppeal = {
  title: 'Help Save Newborns in Gaza',
  summary: 'Help provide low-cost incubators for newborn babies in Gaza. Your support helps us provide vital equipment for their care.',
  href: '/gaza-incubator-appeal',
  // Confirmed by Talib in the 8 and 19 October 2026 messages.
  donationLinks: [
    { label: 'Donate via JustGiving', href: 'https://checkout.justgiving.com/gbr4stupkl' },
    { label: 'Donate via GoFundMe', href: 'https://gofund.me/e93724b03' },
    { label: 'Donate via Wonderful', href: 'https://wonderful.org/fundraisers/nKqJj' },
  ],
} as const

export const sudanDonationLinks = [
  { label: 'Donate via JustGiving', href: 'https://checkout.justgiving.com/x7ex5arrut' },
  { label: 'Donate via GoFundMe', href: 'https://www.gofundme.com/f/sudan-incubator-appeal' },
  { label: 'Donate via Wonderful', href: 'https://wonderful.org/fundraisers/ndpqe' },
] as const
