import { useContextSelector } from 'smart-context-hooks';
import { appContext, selectSearchTerm } from '../../context/AppContext';

const SearchTermMessage = () => {
    const searchTerm = useContextSelector(appContext, selectSearchTerm);

    return (
        <div className='SearchTermMessage'>
            {searchTerm && <p>Showing results for "{searchTerm}"</p>}
        </div>
    );
};

export default SearchTermMessage;
