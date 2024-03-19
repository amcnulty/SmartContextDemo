import { useEffect, useState } from 'react';
import { useContextSetters } from 'smart-context-hooks';
import { appContext } from '../../context/AppContext';

const StockFilter = () => {
    const { filterGames } = useContextSetters(appContext);
    const [checked, setChecked] = useState(false);

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
                    onChange={(e) => setChecked(e.target.checked)}
                />
                <label htmlFor='inStock' className='form-check-label'>
                    In Stock
                </label>
            </div>
        </div>
    );
};

export default StockFilter;
