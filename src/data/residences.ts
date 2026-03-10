import pkKitchen from "@/assets/pk-kitchen.jpg";
import pkInteriorLiving from "@/assets/pk-interior-living.jpg";
import pkBedroom from "@/assets/pk-bedroom.jpg";
import penthouseSunset from "@/assets/penthouse-sunset.jpg";
import penthouseLiving from "@/assets/penthouse-living.jpg";
import pkInteriorPanoramic from "@/assets/pk-interior-panoramic.jpg";
import skyLounge from "@/assets/sky-lounge.jpg";
import grandLobby from "@/assets/grand-lobby.jpg";
import lifestylePool from "@/assets/lifestyle-pool-sunset.jpg";
import smartHome from "@/assets/smart-home.jpg";
import privateDining from "@/assets/private-dining.jpg";
import privateCinema from "@/assets/private-cinema.jpg";
import royalSpa from "@/assets/royal-spa.jpg";
import floorplan2bed from "@/assets/floorplan-2bed.jpg";
import floorplan3bed from "@/assets/floorplan-3bed.jpg";
import floorplanPenthouse from "@/assets/floorplan-penthouse.jpg";

export interface Residence {
  id: string;
  slug: string;
  name: string;
  type: "penthouse" | "suite";
  floor: string;
  floorRange: [number, number];
  size: string;
  sizeRange: [number, number];
  beds: number;
  bedsLabel: string;
  price: string;
  priceValue: number;
  image: string;
  tag: string;
  gallery: string[];
  floorPlan: string;
  description: string;
  specifications: { label: string; value: string }[];
  amenities: string[];
}

export const residences: Residence[] = [
  {
    id: "exec-a",
    slug: "executive-suite-a",
    name: "Executive Suite A",
    type: "suite",
    floor: "Floor 10",
    floorRange: [8, 20],
    size: "2,400 sq ft",
    sizeRange: [2400, 2400],
    beds: 2,
    bedsLabel: "2 Bedrooms",
    price: "PKR 4.5 Cr",
    priceValue: 45000000,
    image: pkKitchen,
    tag: "Most Popular",
    gallery: [pkKitchen, pkInteriorLiving, smartHome, grandLobby],
    floorPlan: floorplan2bed,
    description: "Open-plan living with floor-to-ceiling glass, Ziarat marble countertops, and smart-home automation. Two generous bedrooms each with en-suite bathrooms and walk-in closets.",
    specifications: [
      { label: "Living Area", value: "780 sq ft" },
      { label: "Master Bedroom", value: "320 sq ft" },
      { label: "Balcony", value: "120 sq ft" },
      { label: "Ceiling Height", value: "10 ft" },
      { label: "Parking", value: "1 Dedicated" },
      { label: "Completion", value: "Q4 2027" },
    ],
    amenities: ["Smart Home System", "Concierge Service", "Gym Access", "Infinity Pool", "Valet Parking", "Biometric Entry"],
  },
  {
    id: "exec-b",
    slug: "executive-suite-b",
    name: "Executive Suite B",
    type: "suite",
    floor: "Floor 15",
    floorRange: [8, 20],
    size: "3,200 sq ft",
    sizeRange: [3200, 3200],
    beds: 3,
    bedsLabel: "3 Bedrooms",
    price: "PKR 5.8 Cr",
    priceValue: 58000000,
    image: pkInteriorLiving,
    tag: "Family",
    gallery: [pkInteriorLiving, pkKitchen, pkBedroom, smartHome],
    floorPlan: floorplan3bed,
    description: "Spacious three-bedroom layout with separate formal and family living areas. Chef's kitchen with imported appliances, wraparound balcony with Margalla Hills views.",
    specifications: [
      { label: "Living Area", value: "980 sq ft" },
      { label: "Master Bedroom", value: "380 sq ft" },
      { label: "Balcony", value: "180 sq ft" },
      { label: "Ceiling Height", value: "10 ft" },
      { label: "Parking", value: "2 Dedicated" },
      { label: "Completion", value: "Q4 2027" },
    ],
    amenities: ["Smart Home System", "Concierge Service", "Gym Access", "Infinity Pool", "Valet Parking", "Biometric Entry", "Private Storage"],
  },
  {
    id: "royal-a",
    slug: "royal-apartment",
    name: "Royal Apartment",
    type: "suite",
    floor: "Floor 25",
    floorRange: [21, 32],
    size: "4,800 sq ft",
    sizeRange: [4800, 4800],
    beds: 4,
    bedsLabel: "4 Bedrooms",
    price: "PKR 9.5 Cr",
    priceValue: 95000000,
    image: pkBedroom,
    tag: "Premium",
    gallery: [pkBedroom, pkInteriorPanoramic, privateDining, skyLounge],
    floorPlan: floorplan3bed,
    description: "Four-bedroom residence occupying a half-floor with 270° panoramic views. Private elevator lobby, formal dining room, staff quarter, and wraparound terrace.",
    specifications: [
      { label: "Living Area", value: "1,400 sq ft" },
      { label: "Master Suite", value: "520 sq ft" },
      { label: "Terrace", value: "350 sq ft" },
      { label: "Ceiling Height", value: "11 ft" },
      { label: "Parking", value: "2 Dedicated" },
      { label: "Completion", value: "Q3 2027" },
    ],
    amenities: ["Smart Home System", "Private Elevator Lobby", "Concierge Service", "Gym Access", "Infinity Pool", "Royal Spa", "Private Cinema", "Valet Parking"],
  },
  {
    id: "sky-penthouse",
    slug: "sky-penthouse",
    name: "Sky Penthouse",
    type: "penthouse",
    floor: "Floor 36",
    floorRange: [33, 39],
    size: "7,500 sq ft",
    sizeRange: [7500, 7500],
    beds: 5,
    bedsLabel: "5 Bed + Staff Quarter",
    price: "PKR 18 Cr",
    priceValue: 180000000,
    image: penthouseSunset,
    tag: "Limited",
    gallery: [penthouseSunset, penthouseLiving, skyLounge, lifestylePool],
    floorPlan: floorplanPenthouse,
    description: "Full-floor penthouse with private terrace, outdoor lounge, and unobstructed 360° views of Margalla Hills and Islamabad skyline. Grand master suite with dressing room and marble bath.",
    specifications: [
      { label: "Living Area", value: "2,200 sq ft" },
      { label: "Master Suite", value: "800 sq ft" },
      { label: "Private Terrace", value: "1,200 sq ft" },
      { label: "Ceiling Height", value: "12 ft" },
      { label: "Parking", value: "3 Dedicated" },
      { label: "Completion", value: "Q2 2027" },
    ],
    amenities: ["Smart Home System", "Private Elevator", "Dedicated Concierge", "Gym Access", "Infinity Pool", "Royal Spa", "Private Cinema", "Private Dining", "Valet Parking", "Wine Cellar"],
  },
  {
    id: "crown-penthouse",
    slug: "crown-penthouse",
    name: "Crown Penthouse",
    type: "penthouse",
    floor: "Floors 40–42",
    floorRange: [40, 42],
    size: "12,000+ sq ft Duplex",
    sizeRange: [12000, 12000],
    beds: 5,
    bedsLabel: "Private Terrace · Pool",
    price: "By Invitation Only",
    priceValue: 500000000,
    image: penthouseLiving,
    tag: "Exclusive",
    gallery: [penthouseLiving, penthouseSunset, skyLounge, lifestylePool, privateDining, privateCinema],
    floorPlan: floorplanPenthouse,
    description: "The Crown Penthouse is a duplex masterpiece spanning the top three floors. Private rooftop infinity pool, grand staircase, entertainment wing, and 360° unobstructed panoramic views. By invitation only.",
    specifications: [
      { label: "Living Area", value: "4,500 sq ft" },
      { label: "Master Suite", value: "1,200 sq ft" },
      { label: "Rooftop Terrace", value: "3,000 sq ft" },
      { label: "Ceiling Height", value: "14 ft (double)" },
      { label: "Parking", value: "4 Dedicated + Valet" },
      { label: "Completion", value: "Q1 2027" },
    ],
    amenities: ["Smart Home System", "Private Elevator", "Dedicated Butler", "Private Pool", "Home Cinema", "Royal Spa Access", "Private Dining", "Wine Cellar", "Helipad Access", "Staff Quarter"],
  },
  {
    id: "exec-c",
    slug: "executive-suite-c",
    name: "Executive Suite C",
    type: "suite",
    floor: "Floor 12",
    floorRange: [8, 20],
    size: "2,800 sq ft",
    sizeRange: [2800, 2800],
    beds: 2,
    bedsLabel: "2 Bedrooms + Study",
    price: "PKR 5.2 Cr",
    priceValue: 52000000,
    image: smartHome,
    tag: "Smart Living",
    gallery: [smartHome, pkKitchen, pkInteriorLiving, grandLobby],
    floorPlan: floorplan2bed,
    description: "A tech-forward 2-bedroom with a dedicated study and the most advanced smart-home integration in the tower. Voice-controlled lighting, climate, and security throughout.",
    specifications: [
      { label: "Living Area", value: "850 sq ft" },
      { label: "Master Bedroom", value: "340 sq ft" },
      { label: "Study", value: "150 sq ft" },
      { label: "Ceiling Height", value: "10 ft" },
      { label: "Parking", value: "1 Dedicated" },
      { label: "Completion", value: "Q4 2027" },
    ],
    amenities: ["Advanced Smart Home", "Concierge Service", "Gym Access", "Infinity Pool", "Valet Parking", "Biometric Entry"],
  },
];

export const getResidenceBySlug = (slug: string) =>
  residences.find((r) => r.slug === slug);
