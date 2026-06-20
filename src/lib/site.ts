// Shoring Insurance — shoring, underpinning, excavation support contractors

export const SITE = {
  name: "Shoring Insurance",
  legalName: "Shoring Insurance (by Contractors Choice Agency)",
  domain: "shoringinsurance.com",
  url: "https://shoringinsurance.com",
  tagline: "Insurance for Shoring and Excavation Support Contractors",
  description:
    "Specialty insurance for shoring contractors, underpinning specialists, excavation support contractors, and earth retention firms. General liability, professional liability, workers compensation, commercial auto, and umbrella for shoring and excavation support operations. Licensed all 50 states.",
  phone: "844-967-5247",
  phoneHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

export const BRAND = {
  brandShort: "Shoring",
  brandSub: "Insurance",
  tagline: "Insurance for Shoring and Excavation Support Contractors",
  subTagline: "GL, professional liability, workers comp, and umbrella for shoring and underpinning contractors",
  nicheShort: "shoring contractor",
  nicheShortCap: "Shoring Contractor",
  nichePlural: "shoring contractors",
  nichePluralCap: "Shoring Contractors",
  operator: "shoring contractor",
  operatorCap: "Shoring Contractor",
  industry: "shoring and excavation support",
  industryCap: "Shoring and Excavation Support",
  audience: "shoring contractors",
  audienceCap: "Shoring Contractors",
  ownerTitle: "shoring contractor",
  regionPill: "Deep Excavations · Underpinning · Nationwide",
  ctaMain: "Get a Shoring Contractor Quote",
  ctaSecondary: "Talk to an Agent",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "general-liability",
    title: "General Liability Insurance",
    description:
      "Core protection for shoring contractors — covering third-party bodily injury and property damage from your shoring, underpinning, and excavation support operations. Built for the specific risk profile of earth retention contractors.",
    icon: "ShieldCheck",
  },
  {
    slug: "professional-liability",
    title: "Professional Liability (E&O)",
    description:
      "Coverage for shoring engineers and design-build shoring contractors who provide professional services — shoring system design, underpinning specifications, earth retention designs, and geotechnical recommendations. Covers claims alleging design errors or professional judgment failures.",
    icon: "FileSignature",
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    description:
      "Coverage for the specific injury patterns of shoring contractor crews — excavation cave-in injuries, equipment operator injuries, falls in excavations, heavy equipment operation injuries, and the physical demands of shoring installation work.",
    icon: "HardHat",
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto",
    description:
      "Fleet coverage for shoring contractors — service trucks, equipment transporters hauling shoring systems, drill rigs, and vehicles carrying shoring materials and equipment to deep excavation and underpinning project sites.",
    icon: "Truck",
  },
  {
    slug: "umbrella-excess",
    title: "Umbrella / Excess Liability",
    description:
      "Shoring contractors working on major urban projects, transit construction, and large building foundations often face project owner requirements for $5M to $10M total liability capacity. Umbrella provides those limits above your primary GL and auto.",
    icon: "Umbrella",
  },
  {
    slug: "inland-marine",
    title: "Inland Marine / Equipment Floater",
    description:
      "Covers your shoring contractor equipment — drill rigs, soldier pile drivers, tieback equipment, lagging materials, and specialty shoring systems at project sites, in transit, and at your yard.",
    icon: "Wrench",
  },
  {
    slug: "builders-risk",
    title: "Builders Risk / Installation Floater",
    description:
      "Covers shoring materials and systems installed at excavation sites before project completion, including sheet pile, soldier piles, tiebacks, and timber lagging staged at active excavation projects.",
    icon: "Building2",
  },
  {
    slug: "pollution-liability",
    title: "Pollution Liability",
    description:
      "Shoring and excavation work frequently encounters soil contamination, groundwater, and underground conditions that create pollution liability exposure. Pollution liability covers third-party claims and cleanup costs from contamination disturbed during shoring and excavation support operations.",
    icon: "Droplets",
  },
] as const;

export const LOCATIONS = [
  {
    slug: "california",
    name: "California",
    state: "CA",
    region: "Los Angeles · San Francisco · San Diego",
    metaTitle: "Shoring Insurance California | CA Shoring Contractor Programs",
    metaDescription: "California shoring contractor insurance — GL, professional liability, and workers comp for CA shoring and excavation support contractors in urban environments.",
    h1: "Shoring Insurance in California",
    intro: "California's dense urban environments, expansive transit construction programs, and deep foundation requirements make it one of the most active markets for shoring and excavation support contractors. Los Angeles Metro, BART expansion, and urban high-rise construction across the state create sustained demand for shoring specialists. We write programs for California shoring contractors.",
  },
  {
    slug: "new-york",
    name: "New York",
    state: "NY",
    region: "New York City · Long Island · Albany",
    metaTitle: "Shoring Insurance New York | NY Shoring Contractor Coverage",
    metaDescription: "New York shoring contractor insurance — GL, professional liability, and workers comp for NY underpinning, excavation support, and shoring contractors in NYC and statewide.",
    h1: "Shoring Insurance in New York",
    intro: "New York City's construction environment — dense urban development, MTA infrastructure, deep subway and tunnel work, and adjacent structure underpinning requirements — creates some of the most demanding shoring work in the country. We write specialty programs for New York shoring and underpinning contractors.",
  },
  {
    slug: "texas",
    name: "Texas",
    state: "TX",
    region: "Houston · Dallas · Austin",
    metaTitle: "Shoring Insurance Texas | TX Shoring Contractor Programs",
    metaDescription: "Texas shoring contractor insurance — GL, workers comp, and umbrella for TX shoring and excavation support contractors on urban construction and underground projects.",
    h1: "Shoring Insurance in Texas",
    intro: "Texas's rapid urban growth — high-rise construction in Houston and Dallas, transit expansion in Austin, and commercial development across the state — drives consistent demand for shoring and excavation support contractors. We write programs for Texas shoring contractors on urban and underground projects.",
  },
  {
    slug: "washington",
    name: "Washington",
    state: "WA",
    region: "Seattle · Tacoma · Bellevue",
    metaTitle: "Shoring Insurance Washington | WA Shoring Contractor Coverage",
    metaDescription: "Washington state shoring insurance — GL, professional liability, and workers comp for WA shoring and excavation support contractors on Seattle and Puget Sound projects.",
    h1: "Shoring Insurance in Washington",
    intro: "Seattle's active construction market — Sound Transit expansion, urban high-rise development, and challenging geotechnical conditions in the Pacific Northwest — creates significant demand for shoring specialists. We write programs for Washington state shoring and excavation support contractors.",
  },
  {
    slug: "illinois",
    name: "Illinois",
    state: "IL",
    region: "Chicago · Suburban Cook County",
    metaTitle: "Shoring Insurance Illinois | IL Shoring Contractor Programs",
    metaDescription: "Illinois shoring contractor insurance — GL, professional liability, and workers comp for IL shoring and underpinning contractors on Chicago urban and underground projects.",
    h1: "Shoring Insurance in Illinois",
    intro: "Chicago's dense urban environment, deep utility infrastructure, and major construction projects create substantial demand for shoring and excavation support specialists. We write specialty programs for Illinois shoring contractors working on Chicago construction projects and regional infrastructure.",
  },
  {
    slug: "colorado",
    name: "Colorado",
    state: "CO",
    region: "Denver · Boulder · Fort Collins",
    metaTitle: "Shoring Insurance Colorado | CO Shoring Contractor Coverage",
    metaDescription: "Colorado shoring contractor insurance — GL, professional liability, and workers comp for CO shoring and excavation support contractors on Denver and Front Range projects.",
    h1: "Shoring Insurance in Colorado",
    intro: "Colorado's construction boom — Front Range urban development, Denver light rail expansion, and major commercial and residential projects — drives consistent shoring and excavation support work. We write programs for Colorado shoring contractors including professional liability coverage appropriate for design-build shoring operations.",
  },
  {
    slug: "florida",
    name: "Florida",
    state: "FL",
    region: "Miami · Tampa · Orlando",
    metaTitle: "Shoring Insurance Florida | FL Shoring Contractor Programs",
    metaDescription: "Florida shoring contractor insurance — GL, workers comp, and underpinning coverage for FL shoring contractors on South Florida construction and infrastructure projects.",
    h1: "Shoring Insurance in Florida",
    intro: "Florida's construction market — high-rise development in Miami and Tampa, infrastructure projects in Orlando, and challenging subsurface conditions throughout the state — creates demand for shoring and excavation support specialists. We write programs for Florida shoring contractors.",
  },
  {
    slug: "massachusetts",
    name: "Massachusetts",
    state: "MA",
    region: "Boston · Cambridge · Worcester",
    metaTitle: "Shoring Insurance Massachusetts | MA Shoring Contractor Coverage",
    metaDescription: "Massachusetts shoring contractor insurance — GL, professional liability, and workers comp for MA underpinning and excavation support contractors on Boston construction.",
    h1: "Shoring Insurance in Massachusetts",
    intro: "Boston's dense urban construction environment, historic building stock requiring underpinning, and active transit and infrastructure construction create substantial demand for shoring specialists. We write programs for Massachusetts shoring and underpinning contractors.",
  },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Shoring contractor specialists", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const SOCIAL = { facebook: "", instagram: "", linkedin: "", twitter: "" } as const;

export const STATS = [
  { value: 300, suffix: "+", label: "Shoring contractors insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring specialty contractors", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  {
    quote: "We do soldier pile and tieback shoring on urban high-rise projects. The adjacent structure risk and professional liability exposure from our engineered designs make generic contractor insurance completely inadequate. Shoring Insurance put us with a carrier who understands what we do — GL and E&O coordinated so there are no gaps.",
    name: "Lisa M.",
    role: "Owner, Urban Shoring Specialists",
    location: "California",
  },
  {
    quote: "We hit contaminated soil on a deep excavation project and had to stop work for environmental assessment. The pollution liability coverage we had through CCA covered our cleanup costs and the third-party claims that followed. That coverage saved our company from a six-figure uninsured loss.",
    name: "Robert K.",
    role: "President, Deep Foundation Contractors",
    location: "New York",
  },
  {
    quote: "Underpinning adjacent structures is high-liability work. The structural damage exposure is real and the insurance industry doesn't always understand it. CCA got us with a carrier who does — our GL is structured for adjacent structure protection, not a generic contractor program that might deny the claim.",
    name: "Ana P.",
    role: "Operations Director",
    location: "Texas",
  },
] as const;
