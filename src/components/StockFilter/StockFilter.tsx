import { useEffect } from 'react';
import { useContextSelector, useContextSetters } from 'smart-context-hooks';
import { appContext, selectInStockChecked } from '../../context/AppContext';

const StockFilter = () => {
    const { filterGames, setInStockChecked } = useContextSetters(appContext);
    const checked = useContextSelector(appContext, selectInStockChecked);

    useEffect(() => {
        filterGames({ inStock: checked });
    }, [checked, filterGames]);

    return (
        <div className='StockFilter'>
            <div className='form-check'>
                <input
                    id='inStock'
                    className='form-check-input'
                    type='checkbox'
                    checked={checked}
                    onChange={(e) => setInStockChecked(e.target.checked)}
                />
                <label htmlFor='inStock' className='form-check-label'>
                    In Stock
                </label>
            </div>
        </div>
    );
};

export default StockFilter;
