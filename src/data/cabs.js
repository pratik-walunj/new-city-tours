// ─────────────────────────────────────────────────────────────────
//  Nepal Taxi & Cab Services — data
// ─────────────────────────────────────────────────────────────────

import swiftdzireMain from '../images/swift-dzireMain.jpg'
import ErtigaMain from '../images/ErtigaMain.jpg'
import innovacrystaMain from '../images/innovacrystaMain.jpg'
import fortunerMain from '../images/fortunerMain.jpg'
import Tempotraveler13 from '../images/Tempotraveler13.png'
import tempotraveler26 from '../images/tempotraveler26.png'

export const cabs = [
  {
    id: 'sedan-dzire',
    name: 'Maruti Swift Dzire',
    category: 'Sedan',
    seats: 4,
    luggage: '2 large bags',
    ac: true,
    image: swiftdzireMain,
    thumb: swiftdzireMain,
    pricePerKm: 18,
    minFare: 350,
    desc: 'The most popular choice for city transfers and short highway runs. Air-conditioned, fuel-efficient and comfortable for up to 4 passengers with standard luggage.',
    features: ['AC', 'GPS tracked', 'Music system', 'Clean & sanitised', 'Professional driver'],
    bestFor: ['Airport transfers', 'City sightseeing', 'Short day trips'],
    badge: 'Most Popular',
    color: 'orange',
  },
  {
    id: 'suv-ertiga',
    name: 'Maruti Ertiga',
    category: 'SUV / MPV',
    seats: 6,
    luggage: '4 large bags',
    ac: true,
    image: ErtigaMain,
    thumb: ErtigaMain,
    pricePerKm: 24,
    minFare: 500,
    desc: 'Ideal for families and small groups. Extra legroom, higher ground clearance for Nepal\'s mountain roads, and enough boot space for a family of six with all their bags.',
    features: ['AC', 'GPS tracked', 'Extra legroom', 'High ground clearance', 'Luggage carrier available'],
    bestFor: ['Family tours', 'Group transfers', 'Pokhara & Nagarkot runs'],
    badge: 'Family Favourite',
    color: 'orange',
  },
  {
    id: 'suv-innova',
    name: 'Innova Crysta',
    category: 'Toyota',
    seats: 7,
    luggage: '4 large bags',
    ac: true,
    image: innovacrystaMain,
    thumb: innovacrystaMain,
    pricePerKm: 24,
    minFare: 500,
    desc: 'Ideal for families and small groups. Extra legroom, higher ground clearance for Nepal\'s mountain roads, and enough boot space for a family of six with all their bags.',
    features: ['AC', 'GPS tracked', 'Extra legroom', 'High ground clearance', 'Luggage carrier available'],
    bestFor: ['Family tours', 'Group transfers', 'Pokhara & Nagarkot runs'],
    badge: 'Family Favourite',
    color: 'orange',
  },

  {
    id: 'jeep-sumo',
    name: 'Fortuner',
    category: 'Jeep',
    seats: 7,
    luggage: '5 bags + roof rack',
    ac: false,
    image: fortunerMain,
    thumb: fortunerMain,
    pricePerKm: 28,
    minFare: 600,
    desc: 'The go-to vehicle for mountain routes, unpaved roads and destinations like Muktinath, Langtang and Jiri. Robust 4WD capability handles Nepal\'s toughest terrain with ease.',
    features: ['4WD', 'Roof rack', 'High clearance', 'Rugged chassis', 'GPS tracked'],
    bestFor: ['Muktinath road route', 'Trekking trailheads', 'Remote hill stations'],
    badge: 'Mountain Ready',
    color: 'orange',
  },
  {
    id: 'hiace-van',
    name: 'Tempo Traveller',
    category: 'Tempo Traveller',
    seats: 13,
    luggage: '8+ bags',
    ac: true,
    image: Tempotraveler13,
    thumb: Tempotraveler13,
    pricePerKm: 32,
    minFare: 800,
    desc: 'Perfect for pilgrim groups, corporate transfers and large families. The HiAce seats up to 13 in comfort with generous luggage space and an experienced driver who knows every highway.',
    features: ['AC', 'GPS tracked', 'PA system', 'Curtains', 'First-aid kit', 'Cooler box'],
    bestFor: ['Group pilgrimages', 'Corporate events', 'Large family tours'],
    badge: 'Group Favourite',
    color: 'orange',
  },
  
  {
    id: 'mini-bus',
    name: 'Tempo Traveller',
    category: 'Tempo Traveller',
    seats: 26,
    luggage: 'Underbelly storage',
    ac: true,
    image:  tempotraveler26,
    thumb:  tempotraveler26,
    pricePerKm: 45,
    minFare: 2000,
    desc: 'For fixed-departure groups, school excursions and corporate outings. Air-conditioned push-back seats, PA system, luggage compartment and an experienced driver-guide who doubles as a navigator on mountain highways.',
    features: ['AC', 'Push-back seats', 'PA system', 'Underbelly luggage', 'GPS', 'First-aid kit'],
    bestFor: ['Fixed departure groups', 'School/college trips', 'Corporate outings'],
    badge: 'Group Tours',
    color: 'orange',
  },
]

// ── Popular Routes ────────────────────────────────────────────────
export const popularRoutes = [
  {
    from: 'Kathmandu Airport',
    to:   'Thamel / Hotel',
    km:   8,
    time: '25 min',
    sedanFare: 500,
    suvFare:   700,
    note: 'Night surcharge applies after 10 PM',
  },
  {
    from: 'Kathmandu',
    to:   'Pokhara',
    km:   200,
    time: '6 hr',
    sedanFare: 5500,
    suvFare:   7500,
    note: 'One-way / return available',
  },
  {
    from: 'Kathmandu',
    to:   'Nagarkot',
    km:   32,
    time: '1.5 hr',
    sedanFare: 1200,
    suvFare:   1800,
    note: 'Sunrise pickup from 4 AM',
  },
  {
    from: 'Kathmandu',
    to:   'Chitwan (Sauraha)',
    km:   165,
    time: '5 hr',
    sedanFare: 4500,
    suvFare:   6000,
    note: 'Full-day or one-way',
  },
  {
    from: 'Pokhara',
    to:   'Jomsom (Road)',
    km:   150,
    time: '8 hr',
    sedanFare: null,
    suvFare:   null,
    jeepFare:  9000,
    note: 'Jeep only — mountain road',
  },
  {
    from: 'Kathmandu',
    to:   'Lumbini',
    km:   275,
    time: '7 hr',
    sedanFare: 7500,
    suvFare:   10000,
    note: 'Popular pilgrim route',
  },
  {
    from: 'Kathmandu',
    to:   'Bhaktapur + Nagarkot',
    km:   50,
    time: 'Full day',
    sedanFare: 2200,
    suvFare:   3000,
    note: 'Day-trip package',
  },
  {
    from: 'Pokhara Airport',
    to:   'Lakeside Hotel',
    km:   5,
    time: '15 min',
    sedanFare: 400,
    suvFare:   600,
    note: 'New Pokhara airport',
  },
]

// ── Services ──────────────────────────────────────────────────────
export const cabServices = [
  {
    icon: 'Plane',
    title: 'Airport Transfers',
    desc: 'Meet & greet, name-board pickup from Kathmandu (TIA) and Pokhara airports. Flight-tracked — we wait if you are delayed.',
  },
  {
    icon: 'MapPin',
    title: 'City Sightseeing',
    desc: 'Full-day or half-day hired car with driver for Kathmandu valley — temples, squares and viewpoints at your own pace.',
  },
  {
    icon: 'Mountain',
    title: 'Hill Station Runs',
    desc: 'Nagarkot sunrise, Dhulikhel, Kakani, Shivapuri — point-to-point or return, starting as early as 4 AM.',
  },
  {
    icon: 'Route',
    title: 'Outstation Trips',
    desc: 'Multi-day taxi hire with the same driver throughout — Pokhara, Chitwan, Lumbini or custom routes across Nepal.',
  },
  {
    icon: 'Heart',
    title: 'Honeymoon Transfers',
    desc: 'Floral decorated Crysta or Innova, chilled water, welcome garland — perfect first impression for couples.',
  },
  {
    icon: 'Users',
    title: 'Group & Pilgrim Vans',
    desc: 'HiAce and mini-bus hire for Muktinath, Pashupatinath and Lumbini pilgrim groups from 8 to 25 passengers.',
  },
]

// ── Why Book Our Cab ──────────────────────────────────────────────
export const cabWhyUs = [
  { icon: 'Clock',       title: 'On-Time Guarantee',    desc: 'Drivers arrive 10 minutes early. If we are late, your next booking gets a 10% discount.' },
  { icon: 'Shield',      title: 'GPS Tracked Vehicles', desc: 'Every vehicle is live-tracked. Share your ride link with family for complete peace of mind.' },
  { icon: 'BadgeCheck',  title: 'Licensed Drivers',     desc: 'All drivers hold valid commercial licences and have passed our 5-point safety screening.' },
  { icon: 'IndianRupee', title: 'Fixed Fares',          desc: 'No meter games. Price quoted is price charged — no extras at the end of the ride.' },
  { icon: 'Star',        title: 'Rated 4.9 / 5',        desc: 'Over 3,200 rides with a 4.9-star average across Google and TripAdvisor reviews.' },
  { icon: 'Headphones',  title: '24x7 Dispatch',        desc: 'Call or WhatsApp at any hour. Night pickups, early-morning departures — we are always on.' },
]