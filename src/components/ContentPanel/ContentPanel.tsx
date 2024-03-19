import { useContextSelector, useContextSetters } from 'smart-context-hooks';
import DataGrid, { Column } from 'react-data-grid';
import {
    appContext,
    selectSearchTerm,
    selectVideoGames
} from '../../context/AppContext';
import EditUser from '../EditUser/EditUser';
import { VideoGame } from '../../mockData/VideoGames';
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

const ContentPanel = () => {
    const { setContentPanelRenderCount } = useContextSetters(appContext);
    const videoGames = useContextSelector(appContext, selectVideoGames);
    const searchTerm = useContextSelector(appContext, selectSearchTerm);

    setContentPanelRenderCount((prev) => prev + 1);

    return (
        <div className='ContentPanel flex-grow-1 overflow-auto'>
            <div className='h-100 p-3'>
                <div className='d-flex justify-content-end'>
                    <EditUser />
                </div>
                <h4>Game Catalog</h4>
                {searchTerm && <p>Showing results for "{searchTerm}"</p>}
                <div className='gridWrapper pb-5 overflow-auto'>
                    <DataGrid columns={columns} rows={videoGames} />
                </div>
            </div>
        </div>
    );
};

export default ContentPanel;
