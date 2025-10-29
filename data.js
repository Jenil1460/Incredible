const INDIA_DESTINATIONS = [
    {
        "id": 1,
        "name": "Leh-Ladakh",
        "state": "Ladakh (Union Territory)",
        "description": "High-altitude desert region in the Himalayas known for landscapes, mountains, monasteries, and culture. A hub for adventure and nature.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/17712/CT784852.jpg?date=Wed%20Oct%2001%202025%2022:16:50%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "Pangong Lake",
            "Nubra Valley",
            "Khardung La Pass",
            "Shanti Stupa",
            "Leh Palace"
        ],
        "activities": [
            "Biking",
            "High-altitude trekking",
            "River rafting on the Zanskar River",
            "Camping under the stars",
            "Visiting monasteries"
        ],
        "best_time": "June to September for road travel; winter for Chadar Trek."
    },
    {
        "id": 2,
        "name": "Agra",
        "state": "Uttar Pradesh",
        "description": "Home to the Taj Mahal, Agra is steeped in Mughal history and architecture and is part of the Golden Triangle.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/13878/DY500513.jpg?date=Wed%20Oct%2001%202025%2022:18:38%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "Taj Mahal",
            "Agra Fort",
            "Fatehpur Sikri",
            "Mehtab Bagh"
        ],
        "activities": [
            "Viewing the Taj Mahal at sunrise or sunset",
            "Exploring Mughal architecture",
            "Shopping for local crafts",
            "Savoring Mughlai cuisine"
        ],
        "best_time": "October to March."
    },
    {
        "id": 3,
        "name": "Jaipur",
        "state": "Rajasthan",
        "description": "The 'Pink City' is famous for palaces, forts, and markets, showcasing Mughal and Rajput architecture.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/10952/HQ314938.jpg?date=Wed%20Oct%2001%202025%2022:19:19%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "Amer Fort",
            "Hawa Mahal",
            "City Palace",
            "Jantar Mantar"
        ],
        "activities": [
            "Elephant ride at Amer Fort",
            "Shopping for textiles and jewelry",
            "Exploring the old city",
            "Attending the Jaipur Literature Festival (January)"
        ],
        "best_time": "October to March."
    },
    {
        "id": 4,
        "name": "Goa",
        "state": "Goa",
        "description": "India's beach paradise known for sands, nightlife, Portuguese heritage, and relaxed culture.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/15523/ES628519.jpg?date=Wed%20Oct%2001%202025%2022:20:12%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "Baga Beach",
            "Calangute Beach",
            "Fort Aguada",
            "Old Goa Churches"
        ],
        "activities": [
            "Water sports like jet skiing and parasailing",
            "Relaxing at beach shacks",
            "Attending parties and festivals",
            "Exploring spice plantations"
        ],
        "best_time": "October to March."
    },
    {
        "id": 5,
        "name": "Kerala",
        "state": "Kerala",
        "description": "'God's Own Country' offers backwaters, beaches, hill stations, and wildlife.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/11413/DD336106.jpg?date=Wed%20Oct%2001%202025%2022:21:04%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "Alleppey Backwaters",
            "Munnar",
            "Periyar National Park",
            "Kochi",
            "Kovalam"
        ],
        "activities": [
            "Houseboat cruises in the backwaters",
            "Ayurvedic treatments",
            "Trekking in hill stations",
            "Wildlife safaris"
        ],
        "best_time": "October to March; monsoons (June–September) for Ayurveda."
    },
    {
        "id": 6,
        "name": "Varanasi",
        "state": "Uttar Pradesh",
        "description": "One of the oldest cities, a spiritual hub with ghats on the Ganges and the Ganga Aarti ceremony.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/10879/SS310874.jpg?date=Wed%20Oct%2001%202025%2022:21:58%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "Dasashvamedh Ghat",
            "Kashi Vishwanath Temple",
            "Sarnath",
            "Ganga Aarti"
        ],
        "activities": [
            "Witnessing the evening aarti",
            "Taking a sunrise boat ride on the Ganges",
            "Exploring ancient temples",
            "Trying local street food"
        ],
        "best_time": "October to March."
    },
    {
        "id": 7,
        "name": "Ranthambore",
        "state": "Rajasthan",
        "description": "Premier wildlife destination known for its national park and tiger reserve.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/1460/SM45867.jpg?date=Wed%20Oct%2001%202025%2022:23:24%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "Ranthambore National Park",
            "Ranthambhore Fort"
        ],
        "activities": [
            "Jungle safaris",
            "Wildlife spotting",
            "Bird watching",
            "Photography"
        ],
        "best_time": "October to April."
    },
    {
        "id": 8,
        "name": "Jaisalmer",
        "state": "Rajasthan",
        "description": "The 'Golden City' features golden sandstone architecture and the Jaisalmer Fort in the Thar Desert.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/2356/SM91326.jpg?date=Wed%20Oct%2001%202025%2022:24:07%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "Jaisalmer Fort",
            "Patwon Ki Haveli",
            "Sam Sand Dunes",
            "Gadisar Lake"
        ],
        "activities": [
            "Camel safaris",
            "Overnight desert camping",
            "Exploring havelis",
            "Dune bashing"
        ],
        "best_time": "October to March."
    },
    {
        "id": 9,
        "name": "Manali",
        "state": "Himachal Pradesh",
        "description": "Popular hill station in the Himalayas known for valleys and adventure sports.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/18839/SM868450.jpg?date=Wed%20Oct%2001%202025%2022:24:48%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "Solang Valley",
            "Hadimba Devi Temple",
            "Rohtang Pass",
            "Old Manali"
        ],
        "activities": [
            "Paragliding",
            "Skiing and snowboarding (winter)",
            "River rafting",
            "Trekking"
        ],
        "best_time": "April to June and October to March (specific activities vary by season)."
    },
    {
        "id": 10,
        "name": "Udaipur",
        "state": "Rajasthan",
        "description": "The 'City of Lakes,' a romantic destination with palaces and lakes, showing Rajputana grandeur.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/9868/BK265421.jpg?date=Wed%20Oct%2001%202025%2022:26:02%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "City Palace",
            "Lake Pichola",
            "Jag Mandir",
            "Monsoon Palace"
        ],
        "activities": [
            "Sunset boat rides on Lake Pichola",
            "Exploring palaces and temples",
            "Shopping in local markets",
            "Watching traditional Rajasthani dances"
        ],
        "best_time": "October to March."
    },
    {
        "id": 11,
        "name": "Mumbai",
        "state": "Maharashtra",
        "description": "India's financial hub and 'City of Dreams,' blending history, architecture, nightlife, and street food.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/9056/SM231431.jpg?date=Wed%20Oct%2001%202025%2022:27:06%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "Gateway of India",
            "Marine Drive",
            "Chhatrapati Shivaji Maharaj Terminus",
            "Elephanta Caves"
        ],
        "activities": [
            "Walking along Marine Drive",
            "Exploring colonial-era architecture",
            "Ferry rides to Elephanta Caves",
            "Indulging in street food"
        ],
        "best_time": "October to February."
    },
    {
        "id": 12,
        "name": "Meghalaya",
        "state": "Meghalaya",
        "description": "The 'abode of the clouds' with living root bridges, waterfalls, green hills, and indigenous culture.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/15435/BK622313.jpg?date=Wed%20Oct%2001%202025%2022:28:02%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "Living Root Bridges in Cherrapunji",
            "Nohkalikai Falls",
            "Dawki",
            "Umiam Lake"
        ],
        "activities": [
            "Trekking to living root bridges",
            "Caving",
            "Exploring waterfalls",
            "Visiting Mawlynnong (Asia's cleanest village)"
        ],
        "best_time": "September to May; post-monsoon (October–November) for lush landscapes."
    },
    {
        "id": 13,
        "name": "Amritsar",
        "state": "Punjab",
        "description": "Spiritual and patriotic city with the Golden Temple, offering insight into Sikh culture and history.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/17466/IA774633.jpg?date=Wed%20Oct%2001%202025%2022:28:31%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "Golden Temple (Harmandir Sahib)",
            "Wagah Border",
            "Jallianwala Bagh"
        ],
        "activities": [
            "Witnessing the Wagah Border ceremony",
            "Participating in the Langar at the Golden Temple",
            "Exploring the old city and markets",
            "Learning about Sikh history"
        ],
        "best_time": "October to March."
    },
    {
        "id": 14,
        "name": "Andaman and Nicobar Islands",
        "state": "Andaman and Nicobar Islands (Union Territory)",
        "description": "Tropical getaway with beaches, clear waters, and marine life, ideal for relaxation and adventure.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/17501/ID776358.jpg?date=Wed%20Oct%2001%202025%2022:29:03%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "Havelock Island",
            "Radhanagar Beach",
            "Elephant Beach",
            "Cellular Jail"
        ],
        "activities": [
            "Scuba diving and snorkeling",
            "Sea walking",
            "Glass-bottom boat tours",
            "Kayaking"
        ],
        "best_time": "October to May."
    },
    {
        "id": 15,
        "name": "Coorg",
        "state": "Karnataka",
        "description": "The 'Scotland of India,' a hill station with coffee plantations, green hills, and waterfalls.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/18743/HS857394.jpg?date=Wed%20Oct%2001%202025%2022:30:11%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "Abbey Falls",
            "Mandalpatti Peak",
            "Raja's Seat",
            "Dubare Elephant Camp"
        ],
        "activities": [
            "Trekking",
            "Exploring coffee and spice plantations",
            "River rafting",
            "Wildlife safaris"
        ],
        "best_time": "October to March."
    },
    {
        "id": 16,
        "name": "Hampi",
        "state": "Karnataka",
        "description": "UNESCO World Heritage site with ancient temples, rock-cut monuments, and boulder landscapes.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/15681/CN640660.jpg?date=Wed%20Oct%2001%202025%2022:30:51%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "Virupaksha Temple",
            "Vittala Temple",
            "Lotus Palace",
            "Matanga Hill"
        ],
        "activities": [
            "Exploring historical ruins and temples",
            "Bouldering",
            "Coracle boat rides on the Tungabhadra River",
            "Watching the sunset from Matanga Hill"
        ],
        "best_time": "October to March."
    },
    {
        "id": 17,
        "name": "Darjeeling",
        "state": "West Bengal",
        "description": "Charming hill station known for tea plantations, views of the Himalayas, and the 'toy train'.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/12606/HQ416786.jpg?date=Wed%20Oct%2001%202025%2022:31:34%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "Darjeeling Himalayan Railway (Toy Train)",
            "Tiger Hill",
            "Batasia Loop",
            "Tea Gardens"
        ],
        "activities": [
            "Riding the toy train",
            "Watching the sunrise over Kanchenjunga",
            "Exploring tea estates",
            "Visiting monasteries"
        ],
        "best_time": "February to March and September to December."
    },
    {
        "id": 18,
        "name": "Srinagar",
        "state": "Jammu and Kashmir (Union Territory)",
        "description": "'Paradise on Earth' with Dal Lake, houseboats, Mughal gardens, and mountain views.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/20121/HQ992452.jpg?date=Wed%20Oct%2001%202025%2022:31:57%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "Dal Lake",
            "Mughal Gardens (Shalimar Bagh, Nishat Bagh)",
            "Shikara rides",
            "Tulip Garden"
        ],
        "activities": [
            "Shikara rides on Dal Lake",
            "Staying in a houseboat",
            "Exploring Mughal gardens",
            "Shopping for local crafts and saffron"
        ],
        "best_time": "April to October (excluding monsoon months); winter for snow."
    },
    {
        "id": 19,
        "name": "Pondicherry",
        "state": "Puducherry (Union Territory)",
        "description": "Former French colony blending French and Indian cultures with architecture, cafes, and beaches.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/4728/BZ133621.jpg?date=Wed%20Oct%2001%202025%2022:32:32%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "Aurobindo Ashram",
            "Auroville",
            "Promenade Beach",
            "French Quarter"
        ],
        "activities": [
            "Exploring the French Quarter",
            "Relaxing at beaches",
            "Visiting the ashram and Auroville",
            "Cycling around the city"
        ],
        "best_time": "October to March."
    },
    {
        "id": 20,
        "name": "Rishikesh",
        "state": "Uttarakhand",
        "description": "'Yoga Capital of the World,' a spiritual and adventure hotspot in the Himalayas along the Ganges.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/6786/HI164239.jpg?date=Wed%20Oct%2001%202025%2022:33:45%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "Lakshman Jhula",
            "Ram Jhula",
            "Beatles Ashram",
            "Neelkanth Mahadev Temple"
        ],
        "activities": [
            "White-water rafting",
            "Bungee jumping and zip-lining",
            "Yoga and meditation",
            "Camping"
        ],
        "best_time": "September to June (activities vary by season)."
    },
    {
        "id": 21,
        "name": "Ooty",
        "state": "Tamil Nadu",
        "description": "The 'Queen of Hill Stations' with tea gardens, misty hills, and scenic mountain railway.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/17528/GP776962.jpg?date=Wed%20Oct%2001%202025%2022:34:31%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "Nilgiri Mountain Railway",
            "Ooty Lake",
            "Botanical Gardens",
            "Dolphin's Nose"
        ],
        "activities": [
            "Riding the toy train",
            "Boating on the lake",
            "Visiting tea plantations",
            "Enjoying panoramic views"
        ],
        "best_time": "Throughout the year; peak season is April-June."
    },
    {
        "id": 22,
        "name": "Kaziranga National Park",
        "state": "Assam",
        "description": "UNESCO World Heritage Site known for the one-horned rhinoceros and biodiversity.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/11878/CG366509.jpg?date=Wed%20Oct%2001%202025%2022:36:09%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "One-horned Rhinoceros",
            "Tiger Reserve"
        ],
        "activities": [
            "Elephant safaris",
            "Jeep safaris",
            "Wildlife spotting",
            "Bird watching"
        ],
        "best_time": "October to March."
    },
    {
        "id": 23,
        "name": "Munnar",
        "state": "Kerala",
        "description": "Tranquil hill station in the Western Ghats with tea plantations and mist-covered hills.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/17799/LA788644.jpg?date=Wed%20Oct%2001%202025%2022:36:42%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "Mattupetty Dam",
            "Anamudi Peak",
            "Kolukkumalai Tea Estate",
            "Eravikulam National Park"
        ],
        "activities": [
            "Tea plantation tours",
            "Boating at Mattupetty Dam",
            "Trekking and hiking",
            "Wildlife watching"
        ],
        "best_time": "September to May."
    },
    {
        "id": 24,
        "name": "Shimla",
        "state": "Himachal Pradesh",
        "description": "Picturesque hill station with colonial architecture, pleasant climate, and lush landscapes.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/4129/SR119400.jpg?date=Wed%20Oct%2001%202025%2022:37:13%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "Mall Road",
            "Jakhu Temple",
            "Christ Church",
            "Kufri"
        ],
        "activities": [
            "Leisurely strolls on Mall Road",
            "Shopping and dining",
            "Hiking to Jakhu Temple",
            "Winter sports in Kufri"
        ],
        "best_time": "October to June."
    },
    {
        "id": 25,
        "name": "Mysore",
        "state": "Karnataka",
        "description": "The 'City of Palaces' with Mysore Palace, culture, tradition, and festivals like Dussehra.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/4727/BZ133671.jpg?date=Wed%20Oct%2001%202025%2022:37:50%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "Mysore Palace",
            "Chamundi Hills",
            "Brindavan Gardens",
            "Somnathapura Temple"
        ],
        "activities": [
            "Witnessing the illumination of Mysore Palace",
            "Shopping for silk sarees and sandalwood",
            "Exploring royal architecture",
            "Visiting the Chamundi Hills temple"
        ],
        "best_time": "Throughout the year; Dasara Festival (September/October) is a highlight."
    },
    {
        "id": 26,
        "name": "Khajuraho",
        "state": "Madhya Pradesh",
        "description": "UNESCO World Heritage Site with ancient temples featuring intricate carvings.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/3859/BG117486.jpg?date=Wed%20Oct%2001%202025%2022:38:17%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "Western Group of Temples",
            "Kandariya Mahadev Temple",
            "Light and Sound Show"
        ],
        "activities": [
            "Exploring ancient temples and sculptures",
            "Attending the Light and Sound Show",
            "Learning about ancient Indian art and culture"
        ],
        "best_time": "July to March."
    },
    {
        "id": 27,
        "name": "Ellora and Ajanta Caves",
        "state": "Maharashtra",
        "description": "UNESCO World Heritage sites with rock-cut cave complexes and frescoes.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/16644/FY717056.jpg?date=Wed%20Oct%2001%202025%2022:38:45%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "Kailasa Temple (Ellora)",
            "Buddhist Caves (Ajanta)",
            "Jain and Hindu Caves (Ellora)"
        ],
        "activities": [
            "Exploring ancient rock-cut caves",
            "Studying ancient art and architecture",
            "Learning about religious tolerance in ancient India"
        ],
        "best_time": "October to March."
    },
    {
        "id": 28,
        "name": "Delhi",
        "state": "Delhi (Union Territory)",
        "description": "India's capital, a blend of history and modern life with monuments, markets, and cuisine.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/9604/HP254662.jpg?date=Wed%20Oct%2001%202025%2022:39:18%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "Red Fort",
            "Qutub Minar",
            "Humayun's Tomb",
            "India Gate"
        ],
        "activities": [
            "Exploring historical landmarks",
            "Shopping at markets like Chandni Chowk",
            "Indulging in street food",
            "Attending cultural events"
        ],
        "best_time": "October to March."
    },
    {
        "id": 29,
        "name": "Rann of Kutch",
        "state": "Gujarat",
        "description": "Vast white salt flats in the Thar Desert, offering a surreal landscape and hosting the Rann Utsav.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/18424/HX824226.jpg?date=Wed%20Oct%2001%202025%2022:39:49%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "White Salt Desert",
            "Kutch Desert Wildlife Sanctuary"
        ],
        "activities": [
            "Attending Rann Utsav",
            "Camel safaris",
            "Wildlife spotting",
            "Exploring Kutchhi culture and handicrafts"
        ],
        "best_time": "October to March, particularly during the Rann Utsav (November-February)."
    },
    {
        "id": 30,
        "name": "Lakshadweep",
        "state": "Lakshadweep (Union Territory)",
        "description": "Archipelago of islands with beaches, clear waters, and coral reefs, perfect for marine lovers.",
        "image": "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-old/17521/HQ776811.jpg?date=Wed%20Oct%2001%202025%2022:40:17%20GMT+0530%20(India%20Standard%20Time)",
        "attractions": [
            "Minicoy Island",
            "Agatti Islands",
            "Kalpeni Island",
            "Coral Reefs"
        ],
        "activities": [
            "Scuba diving and snorkeling",
            "Kayaking and water sports",
            "Relaxing on unspoiled beaches",
            "Exploring the diverse marine life"
        ],
        "best_time": "September to May."
    }
];


// --- QUIZ QUESTIONS (Retained as is, as they are not the source of your error) ---
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Which of the Seven Wonders of the World is located in Agra, built by Emperor Shah Jahan?",
    options: ["Qutub Minar", "Hawa Mahal", "Taj Mahal", "Red Fort"],
    answer: "Taj Mahal",
    destination: "Agra"
  },
  {
    id: 2,
    question: "The 'Golden Temple' (Harmandir Sahib), the spiritual center of Sikhism, is located in which city?",
    options: ["Ludhiana", "Amritsar", "Chandigarh", "Patna"],
    answer: "Amritsar",
    destination: "Amritsar"
  },
  {
    id: 3,
    question: "Which major Indian city is home to the Gateway of India and is famously known as the 'Financial Capital of India'?",
    options: ["Chennai", "Kolkata", "Mumbai", "New Delhi"],
    answer: "Mumbai",
    destination: "Mumbai"
  },
  {
    id: 4,
    question: "The serene backwaters and traditional 'Houseboat' cruises are the hallmark of which South Indian state?",
    options: ["Tamil Nadu", "Karnataka", "Kerala", "Goa"],
    answer: "Kerala",
    destination: "Kerala"
  },
  {
    id: 5,
    question: "Which 'Pink City' is famous for its Hawa Mahal (Palace of Winds) and Amber Fort?",
    options: ["Udaipur", "Jodhpur", "Jaipur", "Bikaner"],
    answer: "Jaipur",
    destination: "Jaipur"
  },
  {
    id: 6,
    question: "Varanasi, the spiritual capital of India, is situated on the banks of which holy river?",
    options: ["Yamuna", "Ganges (Ganga)", "Brahmaputra", "Godavari"],
    answer: "Ganges (Ganga)",
    destination: "Varanasi"
  },
  {
    id: 7,
    question: "The high-altitude desert region known for Pangong Lake, high mountain passes, and a strong Tibetan Buddhist culture is:",
    options: ["Sikkim", "Manali", "Ladakh", "Auli"],
    answer: "Ladakh",
    destination: "Ladakh"
  },
  {
    id: 8,
    question: "The 'Queen of the Arabian Sea' and a major hub for colonial heritage, including Chinese Fishing Nets, is the city of:",
    options: ["Kochi (Cochin)", "Goa", "Puducherry", "Mangalore"],
    answer: "Kochi (Cochin)",
    destination: "Kerala"
  },
  {
    id: 9,
    question: "The famous Konark Sun Temple, a UNESCO World Heritage Site shaped like a gigantic chariot, is located in which state?",
    options: ["West Bengal", "Odisha", "Bihar", "Assam"],
    answer: "Odisha",
    destination: "Konark"
  },
  {
    id: 10,
    question: "Which city is the starting and ending point for the famous 'Golden Triangle' circuit, featuring the Red Fort and India Gate?",
    options: ["Jaipur", "Mumbai", "Kolkata", "New Delhi"],
    answer: "New Delhi",
    destination: "New Delhi"
  }
];
// --- NEW DATA FOR CAROUSEL AND GALLERY ---

// List of gallery images and their captions
const GALLERY_IMAGES = [
    { url: INDIA_DESTINATIONS[0].image, caption: "Leh-Ladakh: High-altitude beauty" },
    { url: INDIA_DESTINATIONS[1].image, caption: "Agra: The majestic Taj Mahal" },
    { url: INDIA_DESTINATIONS[2].image, caption: "Jaipur: The Pink City's heritage" },
    { url: INDIA_DESTINATIONS[3].image, caption: "Goa: Sunny beaches and relaxed vibes" },
    { url: INDIA_DESTINATIONS[4].image, caption: "Kerala: Backwaters and lush nature" },
    { url: INDIA_DESTINATIONS[5].image, caption: "Varanasi: Spiritual banks of the Ganges" },
    { url: INDIA_DESTINATIONS[8].image, caption: "Manali: Himalayan hill station" },
    { url: INDIA_DESTINATIONS[9].image, caption: "Udaipur: City of Lakes sunset" }
];

// List of slides for the Bootstrap Carousel
const CAROUSEL_SLIDES = [
    { 
        image: INDIA_DESTINATIONS[1].image, 
        title: "Where Love Becomes Eternal", 
        text: "Taj Mahal – Agra",
        subtitle: "Discover the timeless symbol of love and architectural marvel"
    },
    { 
        image: INDIA_DESTINATIONS[0].image, 
        title: "Adventure Awaits in the Himalayas", 
        text: "Leh-Ladakh",
        subtitle: "Experience breathtaking landscapes and ancient Buddhist monasteries"
    },
    { 
        image: INDIA_DESTINATIONS[4].image, 
        title: "Serenity in God's Own Country", 
        text: "Kerala Backwaters",
        subtitle: "Cruise through tranquil waters surrounded by lush greenery"
    },
    { 
        image: INDIA_DESTINATIONS[2].image, 
        title: "Royal Heritage of Rajasthan", 
        text: "Jaipur – The Pink City",
        subtitle: "Explore magnificent palaces and vibrant culture"
    },
    { 
        image: INDIA_DESTINATIONS[3].image, 
        title: "Sun, Sand & Portuguese Charm", 
        text: "Goa Beaches",
        subtitle: "Relax on golden shores with a perfect blend of culture"
    },
    { 
        image: INDIA_DESTINATIONS[5].image, 
        title: "Spiritual Heart of India", 
        text: "Varanasi – The Holy City",
        subtitle: "Witness ancient rituals on the sacred banks of the Ganges"
    },
    { 
        image: INDIA_DESTINATIONS[9].image, 
        title: "Romance by the Lakes", 
        text: "Udaipur – City of Lakes",
        subtitle: "Experience royal grandeur amidst stunning water palaces"
    },
    { 
        image: INDIA_DESTINATIONS[8].image, 
        title: "Mountain Paradise Awaits", 
        text: "Manali – Himachal Pradesh",
        subtitle: "Adventure sports and scenic valleys in the lap of Himalayas"
    }
];
