export interface Product {
  type: string;
  name: string;
  price: number;
  rating: number;
  review_count: number;
  stock: number;
  priority: number;
  product_id: string;
  main_image: string;
  description: string;
}

export interface Category {
  name: string;
  type: string;
  icon: string;
}

export const products: Product[] = [{
  type: 'chair',
  name: 'Modern Black Lamp',
  price: 45.00,
  rating: 4.75,
  review_count: 85,
  stock: 15,
  priority: 1,
  product_id: '00000001',
  main_image: '/assets/image/black-lamp.png',
  description: 'A sleek and modern black lamp that fits into any modern decor.'
},
  {
    type: 'table',
    name: 'Stylish Black Dining Table',
    price: 120.50,
    rating: 4.4,
    review_count: 45,
    stock: 30,
    priority: 2,
    product_id: '00000002',
    main_image: '/assets/image/chair-white.png',
    description: 'A versatile dining table with a sleek black finish and minimalist design.' 
},
  {
    type: 'armchair',
    name: 'Comfortable Armchair',
    price: 75.99,
    rating: 4.1,
    review_count: 125,
    stock: 8,
    priority: 3,
    product_id: '00000003',
    main_image: '/assets/image/coffee-chair.png',
    description: 'A plush armchair designed for comfort and relaxation.' 
},
  {
    type: 'bed',
    name: 'Premium King Bed',
    price: 799.99,
    rating: 4.9,
    review_count: 220,
    stock: 5,
    priority: 10,
    product_id: '00000004',
    main_image: '/assets/image/simple-desk.png',
    description: 'A luxurious king bed with memory foam mattress for ultimate comfort.' 
},
  {
    type: 'chair',
    name: 'White Elegant Chair',
    price: 89.99,
    rating: 3.8,
    review_count: 20,
    stock: 12,
    priority: 5,
    product_id: '00000005',
    main_image: '/assets/image/black-lamp.png',
    description: 'A stylish white chair that adds elegance to any room.' 
},
  {
    type: 'table',
    name: 'Modern White Coffee Table',
    price: 220.00,
    rating: 4.8,
    review_count: 300,
    stock: 10,
    priority: 4,
    product_id: '00000006',
    main_image: '/assets/image/chair-white.png',
    description: 'A sleek white coffee table with minimalist design perfect for modern living spaces.' 
},
  {
    type: 'armchair',
    name: 'Luxury White Armchair',
    price: 1200.00,
    rating: 4.3,
    review_count: 50,
    stock: 3,
    priority: 8,
    product_id: '00000007',
    main_image: '/assets/image/coffee-chair.png',
    description: 'A luxurious white armchair designed for the modern home, offering superior comfort and style.' 
}
];

export const categories: Category[] = [
  { name: 'Trending Now', type: 'trending', icon: '/assets/image/Poplular.png' },
  { name: 'Chairs & Stools', type: 'chair', icon: '/assets/image/Chair-category.svg' },
  { name: 'Tables & Desks', type: 'table', icon: '/assets/image/Table-category.svg' },
  { name: 'Comfort Armchairs', type: 'armchair', icon: '/assets/image/Armchair-category.svg' },
  { name: 'Beds & Mattresses', type: 'bed', icon: '/assets/image/Bed-category.svg' },
];