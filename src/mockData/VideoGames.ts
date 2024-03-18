export interface VideoGame {
    id: number;
    name: string;
    category: Category;
    price: number;
    inStock: boolean;
}

export type Category =
    | 'Action'
    | 'Horror'
    | 'Platformer'
    | 'Racing'
    | 'RPG'
    | 'Simulation'
    | 'Strategy';

export const fakeVideoGames: VideoGame[] = [
    {
        id: 1,
        name: 'Cyber Slayers',
        category: 'RPG',
        price: 49.99,
        inStock: true
    },
    {
        id: 2,
        name: 'Galactic Racers',
        category: 'Racing',
        price: 39.99,
        inStock: false
    },
    {
        id: 3,
        name: 'Mythical Heroes',
        category: 'Strategy',
        price: 29.99,
        inStock: true
    },
    {
        id: 4,
        name: 'Arcane Adventures',
        category: 'RPG',
        price: 59.99,
        inStock: true
    },
    {
        id: 5,
        name: 'Neon Knights',
        category: 'Platformer',
        price: 19.99,
        inStock: false
    },
    {
        id: 6,
        name: 'Skybound',
        category: 'Simulation',
        price: 44.99,
        inStock: true
    },
    {
        id: 7,
        name: 'Battle Mages',
        category: 'RPG',
        price: 34.99,
        inStock: true
    },
    {
        id: 8,
        name: 'Dino Frontier',
        category: 'Action',
        price: 24.99,
        inStock: false
    },
    {
        id: 9,
        name: 'Ghost Hunters Inc.',
        category: 'Horror',
        price: 39.99,
        inStock: true
    },
    {
        id: 10,
        name: 'Cosmos Defenders',
        category: 'Strategy',
        price: 14.99,
        inStock: true
    },
    {
        id: 11,
        name: 'Cyber Speedway',
        category: 'Racing',
        price: 29.99,
        inStock: false
    },
    {
        id: 12,
        name: 'Forgotten Ruins',
        category: 'Platformer',
        price: 19.99,
        inStock: true
    },
    {
        id: 13,
        name: 'Realm of Champions',
        category: 'RPG',
        price: 49.99,
        inStock: true
    },
    {
        id: 14,
        name: 'Planetary Pioneers',
        category: 'Simulation',
        price: 39.99,
        inStock: true
    },
    {
        id: 15,
        name: 'Shadow Strikers',
        category: 'Action',
        price: 29.99,
        inStock: false
    },
    {
        id: 16,
        name: 'Galactic Chefs',
        category: 'Simulation',
        price: 19.99,
        inStock: true
    },
    {
        id: 17,
        name: 'Arcane Academy',
        category: 'Simulation',
        price: 34.99,
        inStock: true
    },
    {
        id: 18,
        name: 'Temporal Drifters',
        category: 'Horror',
        price: 24.99,
        inStock: false
    },
    {
        id: 19,
        name: 'Robot Riot',
        category: 'Action',
        price: 14.99,
        inStock: true
    },
    {
        id: 20,
        name: 'Heroic Tales',
        category: 'RPG',
        price: 49.99,
        inStock: true
    }
];
