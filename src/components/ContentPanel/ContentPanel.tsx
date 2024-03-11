import { useContextSetters } from 'smart-context-hooks';
import DataGrid, { Column } from 'react-data-grid';
import { appContext } from '../../context/AppContext';
import EditUser from '../EditUser/EditUser';
import './ContentPanel.scss';

const columns: Column<VideoGame>[] = [
    {
        key: 'id',
        name: 'ID',
        width: 70,
        headerCellClass: 'text-end',
        cellClass: 'text-end'
    },
    { key: 'name', name: 'Product Name', width: 200 },
    { key: 'category', name: 'Category', width: 150 },
    {
        key: 'price',
        name: 'Price',
        width: 100,
        headerCellClass: 'text-end',
        cellClass: 'text-end',
        renderCell: (props) => <span>${props.row.price}</span>
    },
    {
        key: 'inStock',
        name: 'In Stock',
        width: 90,
        cellClass: 'text-center',
        renderCell: (props) =>
            props.row.inStock ? (
                <span className='fw-bold text-success h4'>✓</span>
            ) : (
                <span className='fw-bold text-danger h4'>✗</span>
            )
    }
];

interface VideoGame {
    id: number;
    name: string;
    category: string;
    price: number;
    inStock: boolean;
}

const fakeVideoGames: VideoGame[] = [
    {
        id: 1,
        name: 'Cyber Slayers',
        category: 'Action RPG',
        price: 49.99,
        inStock: true
    },
    {
        id: 2,
        name: 'Galactic Racers',
        category: 'Racing Simulator',
        price: 39.99,
        inStock: false
    },
    {
        id: 3,
        name: 'Mythical Heroes',
        category: 'Turn-Based Strategy',
        price: 29.99,
        inStock: true
    },
    {
        id: 4,
        name: 'Arcane Adventures',
        category: 'Open World RPG',
        price: 59.99,
        inStock: true
    },
    {
        id: 5,
        name: 'Neon Knights',
        category: 'Action Platformer',
        price: 19.99,
        inStock: false
    },
    {
        id: 6,
        name: 'Skybound',
        category: 'Flight Simulation',
        price: 44.99,
        inStock: true
    },
    {
        id: 7,
        name: 'Battle Mages',
        category: 'Action RPG',
        price: 34.99,
        inStock: true
    },
    {
        id: 8,
        name: 'Dino Frontier',
        category: 'Survival',
        price: 24.99,
        inStock: false
    },
    {
        id: 9,
        name: 'Ghost Hunters Inc.',
        category: 'Horror Adventure',
        price: 39.99,
        inStock: true
    },
    {
        id: 10,
        name: 'Cosmos Defenders',
        category: 'Tower Defense',
        price: 14.99,
        inStock: true
    },
    {
        id: 11,
        name: 'Cyber Speedway',
        category: 'Arcade Racing',
        price: 29.99,
        inStock: false
    },
    {
        id: 12,
        name: 'Forgotten Ruins',
        category: 'Puzzle Platformer',
        price: 19.99,
        inStock: true
    },
    {
        id: 13,
        name: 'Realm of Champions',
        category: 'MMORPG',
        price: 49.99,
        inStock: true
    },
    {
        id: 14,
        name: 'Planetary Pioneers',
        category: 'City Building',
        price: 39.99,
        inStock: true
    },
    {
        id: 15,
        name: 'Shadow Strikers',
        category: 'Stealth Action',
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
        category: 'Life Sim',
        price: 34.99,
        inStock: true
    },
    {
        id: 18,
        name: 'Temporal Drifters',
        category: 'Puzzle Adventure',
        price: 24.99,
        inStock: false
    },
    {
        id: 19,
        name: 'Robot Riot',
        category: 'Party Game',
        price: 14.99,
        inStock: true
    },
    {
        id: 20,
        name: 'Heroic Tales',
        category: 'Action RPG',
        price: 49.99,
        inStock: true
    }
];

const ContentPanel = () => {
    const { setContentPanelRenderCount } = useContextSetters(appContext);

    setContentPanelRenderCount((prev) => prev + 1);

    return (
        <div className='ContentPanel flex-grow-1 overflow-auto'>
            <div className='h-100 p-3'>
                <div className='d-flex justify-content-end'>
                    <EditUser />
                </div>
                <h4>Game Catalog</h4>
                <div className='gridWrapper pb-5 overflow-auto'>
                    <DataGrid columns={columns} rows={fakeVideoGames} />
                </div>
            </div>
        </div>
    );
};

export default ContentPanel;
