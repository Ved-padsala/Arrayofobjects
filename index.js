const movies = [
  {
    "name": "Avatar",
    "year": 2009,
    "industry": "Hollywood",
    "language": "English",
    "Genre": "Adventure",
    "LeadActor": "Sam Worthington",
    "Runtime": "162min",
    "Budget": "$237M",
    "BoxOffice": "$2.9B",
    "IMDb": 7.9
  },
  {
    "name": "Interstellar",
    "year": 2014,
    "industry": "Hollywood",
    "language": "English",
    "Genre": "Drama",
    "LeadActor": "Matthew McConaughey",
    "Runtime": "169min",
    "Budget": "$165M",
    "BoxOffice": "$730M",
    "IMDb": 8.7
  },
  {
    "name": "The Dark Knight",
    "year": 2008,
    "industry": "Hollywood",
    "language": "English",
    "Genre": "Action",
    "LeadActor": "Christian Bale",
    "Runtime": "152min",
    "Budget": "$185M",
    "BoxOffice": "$1.0B",
    "IMDb": 9.0
  },
  {
    "name": "Dangal",
    "year": 2016,
    "industry": "Bollywood",
    "language": "Hindi",
    "Genre": "Sports Drama",
    "LeadActor": "Aamir Khan",
    "Runtime": "161min",
    "Budget": "₹70Cr",
    "BoxOffice": "₹2000Cr",
    "IMDb": 8.3
  },
  {
    "name": "3 Idiots",
    "year": 2009,
    "industry": "Bollywood",
    "language": "Hindi",
    "Genre": "Comedy Drama",
    "LeadActor": "Aamir Khan",
    "Runtime": "170min",
    "Budget": "₹55Cr",
    "BoxOffice": "₹460Cr",
    "IMDb": 8.4
  },
  {
    "name": "Bajrangi Bhaijaan",
    "year": 2015,
    "industry": "Bollywood",
    "language": "Hindi",
    "Genre": "Drama",
    "LeadActor": "Salman Khan",
    "Runtime": "163min",
    "Budget": "₹90Cr",
    "BoxOffice": "₹970Cr",
    "IMDb": 8.1
  },
  {
    "name": "RRR",
    "year": 2022,
    "industry": "Tollywood",
    "language": "Telugu",
    "Genre": "Action Drama",
    "LeadActor": "NTR Jr, Ram Charan",
    "Runtime": "182min",
    "Budget": "₹550Cr",
    "BoxOffice": "₹1250Cr",
    "IMDb": 7.8
  },
  {
    "name": "Baahubali 2",
    "year": 2017,
    "industry": "Tollywood",
    "language": "Telugu",
    "Genre": "Action Fantasy",
    "LeadActor": "Prabhas",
    "Runtime": "167min",
    "Budget": "₹250Cr",
    "BoxOffice": "₹1800Cr",
    "IMDb": 8.2
  },
  {
    "name": "Pushpa: The Rise",
    "year": 2021,
    "industry": "Tollywood",
    "language": "Telugu",
    "Genre": "Action Crime",
    "LeadActor": "Allu Arjun",
    "Runtime": "179min",
    "Budget": "₹200Cr",
    "BoxOffice": "₹365Cr",
    "IMDb": 7.6
  },
  {
    "name": "Chhello Divas",
    "year": 2015,
    "industry": "Gujarati",
    "language": "Gujarati",
    "Genre": "Comedy Drama",
    "LeadActor": "Malhar Thakar",
    "Runtime": "137min",
    "Budget": "₹2Cr",
    "BoxOffice": "₹18Cr",
    "IMDb": 8.3
  },
  {
    "name": "Hellaro",
    "year": 2019,
    "industry": "Gujarati",
    "language": "Gujarati",
    "Genre": "Drama",
    "LeadActor": "Shraddha Dangar",
    "Runtime": "121min",
    "Budget": "₹3Cr",
    "BoxOffice": "N/A",
    "IMDb": 8.2
  },
  {
    "name": "Fakt Mahilao Maate",
    "year": 2022,
    "industry": "Gujarati",
    "language": "Gujarati",
    "Genre": "Comedy Family",
    "LeadActor": "Yash Soni",
    "Runtime": "144min",
    "Budget": "₹5Cr",
    "BoxOffice": "₹15Cr",
    "IMDb": 8.0
  }
];

const bikes = [
  {
    name: "TVS Ronin",
    year: 2025,
    company: "TVS",
    engine: "225.9cc",
    mileage: "42 kmpl",
    fuelType: "Petrol",
    topSpeed: "120 km/h",
    price: "₹1.50 Lakh",
    rating: 4.5
  },
  {
    name: "Royal Enfield Hunter 350",
    year: 2025,
    company: "Royal Enfield",
    engine: "349cc",
    mileage: "36 kmpl",
    fuelType: "Petrol",
    topSpeed: "114 km/h",
    price: "₹1.75 Lakh",
    rating: 4.6
  },
  {
    name: "Honda Shine 125",
    year: 2025,
    company: "Honda",
    engine: "123.94cc",
    mileage: "55 kmpl",
    fuelType: "Petrol",
    topSpeed: "100 km/h",
    price: "₹95,000",
    rating: 4.4
  },
  {
    name: "Bajaj Pulsar NS200",
    year: 2025,
    company: "Bajaj",
    engine: "199.5cc",
    mileage: "40 kmpl",
    fuelType: "Petrol",
    topSpeed: "136 km/h",
    price: "₹1.60 Lakh",
    rating: 4.5
  },
  {
    name: "Yamaha R15 V4",
    year: 2025,
    company: "Yamaha",
    engine: "155cc",
    mileage: "45 kmpl",
    fuelType: "Petrol",
    topSpeed: "140 km/h",
    price: "₹1.85 Lakh",
    rating: 4.7
  },
  {
    name: "KTM Duke 200",
    year: 2025,
    company: "KTM",
    engine: "199.5cc",
    mileage: "35 kmpl",
    fuelType: "Petrol",
    topSpeed: "142 km/h",
    price: "₹2.05 Lakh",
    rating: 4.6
  },
  {
    name: "Hero Splendor Plus",
    year: 2025,
    company: "Hero",
    engine: "97.2cc",
    mileage: "70 kmpl",
    fuelType: "Petrol",
    topSpeed: "87 km/h",
    price: "₹80,000",
    rating: 4.3
  },
  {
    name: "Suzuki Gixxer 150",
    year: 2025,
    company: "Suzuki",
    engine: "155cc",
    mileage: "45 kmpl",
    fuelType: "Petrol",
    topSpeed: "125 km/h",
    price: "₹1.40 Lakh",
    rating: 4.4
  }
];

console.log("Bikes:", bikes);
console.log("movies:",movies);