import { FlightInfo, LodgingInfo, TicketInfo, EmergencyContact } from '../types';

export const FLIGHTS: FlightInfo[] = [
  {
    flightNumber: 'UA 992',
    airline: 'United Airlines',
    departure: { airport: 'IAD', time: '6:30 PM', date: 'May 24' },
    arrival: { airport: 'BCN', time: '8:20 AM' },
    duration: '7 hour 50 min',
    confirmation: 'LFRST0',
    seats: ['38A', '38C'],
    gate: 'TBD',
    status: 'Scheduled'
  },
  {
    flightNumber: 'UA 991',
    airline: 'United Airlines',
    departure: { airport: 'BCN', time: '11:15 AM', date: 'Jun 4' },
    arrival: { airport: 'IAD', time: '2:00 PM' },
    duration: '8 hour 45 min',
    confirmation: 'LFRST0',
    seats: ['34A', '34C'],
    gate: 'TBD',
    status: 'Scheduled'
  }
];

export const LODGING: LodgingInfo[] = [
  {
    name: 'Stay U-nique Pau Claris',
    address: 'Carrer de Pau Claris, 99, 08009 Barcelona',
    checkIn: 'May 25, 3:00 PM (Requested 9:30 AM)',
    checkOut: 'Jun 1, 11:00 AM',
    confirmation: '34713/2026',
    bookedVia: 'Direct',
    wifiName: 'Stay Unique',
    wifiPassword: 'Stayunique5*',
    guestPortalUrl: 'https://book.stay-u-nique.com/guest/my-reservation/tag/ba67d57bb475418efb1e5db82190ea09?lang=en',
    checkInInstructionsUrl: 'https://book.stay-u-nique.com/guest/check-in-instructions/tag/ba67d57bb475418efb1e5db82190ea09?lang=en',
    detailedCheckIn: {
      steps: [
        {
          title: 'Step 1 of 5 - BUILDING DOOR',
          content: '🚗IF YOU COME BY CAR: parking at the door is prohibited, even to unload luggage. The closest parking lot is [here](https://maps.app.goo.gl/xxx).',
          items: [
            'Check-in time: after 3 PM',
            'Building door code: 2260'
          ]
        },
        {
          title: 'Step 2 of 5 - APARTMENT',
          content: 'To open the apartment door:',
          items: [
            'Staircase / elevator: Always Escalera 2',
            'Floor: 3',
            'Door number: 2',
            'Open the link below. This link is your online key for the entire stay',
            'Tap the "Escalera" option to open. "Kindly note the link won\'t be visible until the same arrival date for safety purposes"'
          ]
        },
        {
          title: 'Step 3 of 5 - Feeling like a nice breakfast? 🥐☕',
          content: 'If your reservation doesn\'t include breakfast and you\'d like it, now\'s your chance! Add it for just €12,50 per person, per day. Breakfast is NOT included in the accommodation and is served in a nearby restaurant (just a few meters away, not in the same building).',
          items: [
            '📍 Available at Bar VAL DOURO (C/ Pau Claris 105, Barcelona)',
            '🕖 Opening hours: Every day, from 7:00 to 11:00 AM',
            '🍳 What’s included? Choose from 3 continental set menus and enjoy your meal at the bar.'
          ]
        },
        {
          title: 'Step 4 of 5 - Extra Services',
          content: 'Enhance your stay with these curated services. Lunchtime and not sure where to go? Enjoy a culinary experience at our recommended restaurants in the city and get a FREE drink when you mention our name. For more information, reply "SAGARDI".',
          links: [
            { label: '🚕 Taxi Booking', url: 'https://bnb.welcomepickups.com/property_groups/474' },
            { label: '🎟️ Skip-the-line Tickets', url: 'https://l.linklyhq.com/l/1uK27' },
            { label: '🥘 Restaurant Recommendations', url: 'https://book.stay-u-nique.com/guest/my-reservation/tag/ba67d57bb475418efb1e5db82190ea09?lang=en' },
            { label: '📱 Travel eSIM (5% OFF)', url: 'https://linkly.link/2S36C' },
            { label: '📶 Pocket WiFi (5% OFF)', url: 'https://linkly.link/2S3oL' },
            { label: '🚗 Car Rental', url: 'https://linkly.link/2S37h' },
            { label: '📸 Professional Photoshoot', url: 'https://linkly.link/2S3oc' }
          ]
        }
      ]
    },
    url: 'https://book.stay-u-nique.com/pla%c3%a7a-catalunya-apartment-for-6-people',
    phone: '+34 932 750 423',
    whatsapp: '+34932750423',
    email: 'info@stay-u-nique.com',
    heroImage: 'https://cdn.krossbooking.com/stayunique/images/3/148/1765501263227.webp',
    gallery: [
      'https://cdn.krossbooking.com/stayunique/images/3/148/17655012604946.webp',
      'https://cdn.krossbooking.com/stayunique/images/3/148/17655012663061.webp',
      'https://cdn.krossbooking.com/stayunique/images/3/148/17655012711249.webp',
      'https://cdn.krossbooking.com/stayunique/images/3/148/17655012733618.webp',
      'https://cdn.krossbooking.com/stayunique/images/3/148/17655012748989.webp',
      'https://cdn.krossbooking.com/stayunique/images/3/148/17655012612646.webp',
      'https://cdn.krossbooking.com/stayunique/images/3/148/17655012623929.webp',
      'https://cdn.krossbooking.com/stayunique/images/3/148/17655012627203.webp',
      'https://cdn.krossbooking.com/stayunique/images/3/148/17655012701995.webp',
      'https://cdn.krossbooking.com/stayunique/images/3/148/17655012709166.webp',
      'https://cdn.krossbooking.com/stayunique/images/3/148/17655012744801.webp',
      'https://cdn.krossbooking.com/stayunique/images/3/148/17655012638161.webp',
      'https://cdn.krossbooking.com/stayunique/images/3/148/1765501264302.webp',
      'https://cdn.krossbooking.com/stayunique/images/3/148/17655012656570.webp',
      'https://cdn.krossbooking.com/stayunique/images/3/148/17655012693158.webp',
      'https://cdn.krossbooking.com/stayunique/images/3/148/17655012582572.webp',
      'https://cdn.krossbooking.com/stayunique/images/3/148/17655012617806.webp',
      'https://cdn.krossbooking.com/stayunique/images/3/148/17655012565571.webp',
      'https://cdn.krossbooking.com/stayunique/images/3/148/17655012544189.webp',
      'https://cdn.krossbooking.com/stayunique/images/3/148/1765501254366.webp',
      'https://cdn.krossbooking.com/stayunique/images/3/148/17655012583990.webp',
      'https://cdn.krossbooking.com/stayunique/images/3/148/1765501264148.webp',
      'https://cdn.krossbooking.com/stayunique/images/3/148/17655012716261.webp',
      'https://cdn.krossbooking.com/stayunique/images/3/148/17655012728074.webp',
      'https://cdn.krossbooking.com/stayunique/images/3/148/17655012739458.webp',
      'https://cdn.krossbooking.com/stayunique/images/3/148/17655012754912.webp'
    ],
    amenities: [
      '3 Bedrooms (1 Double, 2 Singles, 1 Single)',
      'Double Sofa Bed',
      '2 Full Bathrooms',
      'Living Room w/ TV',
      'Fully Furnished Kitchen',
      'Private Balcony',
      'Shared Pool & Terrace',
      'Elevator',
      'High Chair Requested',
      'Crib Requested'
    ],
    cribRequestNote: 'Request a crib 48 hours early in the guest portal.',
    cribRequestUrl: 'https://book.stay-u-nique.com/guest/my-reservation/tag/ba67d57bb475418efb1e5db82190ea09?lang=en',
    notes: 'Pool & Common Terrace open daily: 09:00 - 21:00.',
    bookingRating: '8.5',
    bookingRatingUrl: 'https://www.booking.com/hotel/es/stay-u-nique-apartments-pau-claris.html?aid=356980&label=gog235jc-10CAsoRkIic3RheS11LW5pcXVlLWFwYXJ0bWVudHMtcGF1LWNsYXJpc0gzWANosgKIAQGYATO4AQfIAQzYAQPoAQH4AQGIAgGoAgG4AqXF_c8GwAIB0gIkNjY2ZjBhNmMtYmI4Ny00ZTU4LWFlOTAtMDExMmVhOGQ0ZGYw2AIB4AIB&sid=d374d059fca94a2c487b679a3beaa213&dest_id=-372490&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1778344618&srpvid=cd7f74d309ad013e&type=total&ucfs=1&'
  },
  {
    name: 'InSitges Ribera 41 (Apt #3)',
    address: 'Passeig de la Ribera, 41, 08870 Sitges',
    checkIn: 'Jun 1, 4:00 PM (Requested 12:00 PM)',
    checkOut: 'Jun 4, 11:00 AM',
    confirmation: '6322580576',
    pin: '8119',
    bookedVia: 'Booking.com',
    wifiName: 'InSitges_Beach_WiFi',
    wifiPassword: 'golden-hour-sitges',
    url: 'https://www.insitges.com/details/apartments-location/riberas-beach/',
    phone: '+34 938 111 222',
    whatsapp: '+34607248011',
    email: '6322580576-67s8.hppn.dveb.qgty@property.booking.com',
    heroImage: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/382492935.jpg?k=c8ef4054df5f7332c687755534ec87bf279a63a44a3fae5d027c0efd1eb637b5&o=',
    gallery: [
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/247953448.jpg?k=055af5cad7ac81e0828093ea93eb73e0b33f8c45b9868f3fea9f065acd87efb0&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/247952341.jpg?k=9c8cef43debe8fe8d23dacdc78ec423a2986d6a6b4d3d06bea51a0ab32d36b70&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/289135652.jpg?k=7385712a752cf73bee6da4649f071c6598cac6dfdd1a87e4f54120c484034985&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/289133414.jpg?k=ef5892631ddfe4bffba311e5bf571c1413aeb6b3ce11d6b698a7f4db490717f8&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/289136476.jpg?k=92fadc1880a8099b1d56d50762952ee8da9e170cec7bac7f28a33b0581d6c097&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/382637991.jpg?k=3efad2f1bbbbc4b0b0546e34229b3d05bd4da5ea326d298aab7957b2fd960161&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/382492926.jpg?k=cfc49ee830e21dfc14604e9e13c0bd1c3c8fe80a3e332502c3140bb1837fda0a&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/247953436.jpg?k=d157c36953138f31dd5fd034ff3bad0b5d7bce18ae255fc3b3aecb5220bc4952&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/247955160.jpg?k=585531203b5078cac056422b7d216848ad8803fe6659c8c17094d2425a9bd38c&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/247952344.jpg?k=ddbb49089f9e3a2c2bee1e32a6c39b5272489380623b04aa52e50ea97cc3f051&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/247952349.jpg?k=410ef3a65869702d9202cf530f251d4b4d3d828e9926aaa2686d397277e9b7b8&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/247952369.jpg?k=f157c9727aa6d98fc158246f191fa2b93f225d8393374ff392cc15d916a73d0f&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/247943718.jpg?k=3efe8628aa4fb08ab528fa9da6c7491dab0b5d57bb24ec7ffef7ce1f232fdb80&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/181745371.jpg?k=5d167ca6ff211eb88d907f70b4af30b3142beffa08d0af3f620ad82898101088&o=',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/289132697.jpg?k=5dad00d2eee925435f21b985a05bb221c5dc2de06f48ce4b86797f4b726c9335&o='
    ],
    amenities: [
      'Seafront Condo',
      'Private Balcony w/ Sea View',
      'Elevator',
      'AC & Heating',
      'Fully Equipped Kitchen',
      'Bath Tub',
      'Dishwasher',
      'Washing Machine',
      'High Chair Requested',
      'Crib Requested',
      'Nespresso Coffee Maker',
      'Weekly Cleaning'
    ],
    notes: 'Spectacular seafront condo on Platja de la Ribera. REMINDER: Check in 4 days ahead to confirm early arrival. NOTE: Crib was an extra €30 (paid during booking).',
    bookingRating: '9.5',
    bookingRatingUrl: 'https://www.booking.com/hotel/es/insitges-ribera-s-beach.html?aid=318615&label=New_English_EN_DC%3A_District_of_Columbia_23537597665-XcYwniZq%2A8lLA08pBZKiYgS217287666922%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&sid=d374d059fca94a2c487b679a3beaa213&dest_id=-403043&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1778342884&srpvid=27a3716fc19803be&type=total&ucfs=1&'
  }
];

export const TICKETS: TicketInfo[] = [
  {
    id: 't-park-guell',
    name: 'Park Güell',
    date: 'May 27',
    time: '10:30 AM',
    location: '08024 Barcelona',
    confirmation: '8417815',
    proofOfPurchase: '700574131810',
    bookedVia: 'Direct (Official Website)',
    isBooked: true,
    price: '€36.00 (Cam free)',
    attachmentUrl: '/tickets/park-guell.pdf',
    attachmentLabel: 'View Ticket PDF',
    passes: [
      { label: 'Carolyn', group: 'General',         qrUrl: '/tickets/park-guell-qr-carolyn.png' },
      { label: 'Olivia',  group: 'General',         qrUrl: '/tickets/park-guell-qr-olivia.png' },
      { label: 'Cameron', group: 'Child 0–6 (free)',qrUrl: '/tickets/park-guell-qr-cameron.png' },
    ],
  },
  {
    id: 't-sagrada-familia',
    name: 'Sagrada Família',
    date: 'May 28',
    time: '9:45 AM',
    location: 'Carrer de Mallorca, 401',
    confirmation: '98060987',
    proofOfPurchase: '2152994372',
    bookedVia: 'Tiqets App',
    isBooked: true,
    price: '€65.00',
    attachmentUrl: '/tickets/sagrada-familia.pdf',
    attachmentLabel: 'View Ticket PDF',
    passes: [
      { label: 'Cameron',  group: 'Child under 11', qrUrl: '/tickets/sagrada-familia-qr-cameron.png',  code: '292486298' },
      { label: 'Carolyn',  group: 'General',        qrUrl: '/tickets/sagrada-familia-qr-general-1.png', code: '292486299' },
      { label: 'Olivia',   group: 'General',        qrUrl: '/tickets/sagrada-familia-qr-general-2.png', code: '292486300' },
    ],
    details: [
      {
        title: 'Entry Instructions',
        content: 'Starting point: Carrer de la Marina, 253, L\'Eixample, 08013 Barcelona, Spain',
        items: [
          'Enter through Gate C at the Nativity Façade (Carrer de la Marina)',
          'Present your smartphone ticket along with your ID',
          'Entrance is guaranteed at your booked timeslot, but security checks may cause short waits during busy periods',
          'Make sure to bring a valid ID'
        ]
      },
      {
        title: 'Audio Guide Access',
        content: 'Download the Sagrada Familia Official app following the instructions on your ticket for 45 minutes of audio content.',
        items: [
          'Download the "Sagrada Familia Official" app',
          'Enter the visit date, your email address, and reservation number',
          'The reservation number is found under "Code" in your ticket'
        ]
      },
      {
        title: 'Dress Code & Important Info',
        content: 'Sagrada Família is a church. Dress appropriately to ensure entry.',
        items: [
          'Shoulders and knees must be covered',
          'No see-through clothing, plunging necklines, or exposed bellies/backs',
          'No swimwear or short trousers/skirts',
          'Use of headphones is mandatory for any audio content inside the temple'
        ]
      },
      {
        title: 'Silent Hour (9:00 - 10:00 AM)',
        content: 'Daily hour of silence to preserve spiritual character.',
        items: [
          'Headphones are strictly mandatory for all devices',
          'Visitors must maintain silence inside the temple',
          'Visits continue as usual'
        ]
      },
      {
        title: 'Cancellation & Policy',
        content: 'You can cancel or reschedule for free until 09:44 on 26 May 2026.'
      }
    ]
  },
  {
    id: 't-casa-batllo',
    name: 'Casa Batlló',
    date: 'May 29',
    time: '9:15 AM',
    location: 'Passeig de Gràcia, 43',
    confirmation: 'PENDING',
    isBooked: false,
    bookingUrl: 'https://www.casabatllo.es/en/online-tickets/',
    price: '€35.00'
  },
  {
    id: 't-casa-vicens',
    name: 'Casa Vicens',
    date: 'May 29',
    time: 'Afternoon',
    location: 'Carrer de les Carolines, 20',
    confirmation: 'NEED TO BOOK',
    isBooked: false,
    bookingUrl: 'https://fareharbor.com/embeds/book/casavicens/?full-items=yes&flow=554438&language=en-us&from-ssl=yes&ga=UA-88296598-1%2C1761224922.1778341940%3B&g4=yes&cp=no&csp=yes&back=https%3A%2F%2Fcasavicens.org%2Fbuy-tickets&ga4t=AW-819506467%2Cundefined__undefined%3BG-PBR2NTTFQ0%2C1761224922.1778341940__1778341939%3B&u=ae3d2e2f-57eb-4a47-9a38-27cfea704520',
    price: '€20.00'
  },
  {
    id: 't-teleferic',
    name: 'Telefèric de Montjuïc',
    date: 'May 31',
    time: '10:00 AM',
    location: 'Avinguda de Miramar, 30',
    confirmation: 'PENDING',
    isBooked: false,
    bookingUrl: 'https://www.telefericdemontjuic.cat/en',
    price: '€15.00'
  }
];

export const EMERGENCY: EmergencyContact[] = [
  {
    label: 'Police/Emergency (EU)',
    number: '112',
    location: 'Spain',
    description: 'General emergency number for police, fire, or ambulance across the EU.'
  },
  {
    label: 'Pediatric ER (Barcelona)',
    number: '+34 932 532 100',
    location: 'Hospital Sant Joan de Déu',
    description: 'Leading children’s hospital in Barcelona. Best for specialized infant care.'
  },
  {
    label: 'Pediatric ER (Alexandria, VA)',
    number: '+1 703-516-1000',
    location: 'Inova Alexandria Hospital',
    description: 'Local ER back home for pre-trip concerns.'
  },
  {
    label: 'US Embassy (Madrid)',
    number: '+34 915 872 200',
    location: 'Calle de Serrano, 75',
    description: 'For lost passports or urgent consular assistance.'
  },
  {
    label: 'US Consulate (Barcelona)',
    number: '+34 932 802 227',
    location: 'Passeig de la Reina Elisenda, 23',
    description: 'Local consulate in Barcelona for non-emergency citizen services.'
  }
];
