import { ChangeEvent, useEffect, useState } from 'react';
import { useContextSetters } from 'smart-context-hooks';
import { appContext } from '../../context/AppContext';

export interface PriceFilters {
    low?: boolean;
    med?: boolean;
    high?: boolean;
}

const PriceFilter = () => {
    const { filterGames } = useContextSetters(appContext);
    const [priceFilters, setPriceFilters] = useState<PriceFilters>({});

    useEffect(() => {
        filterGames({ prices: priceFilters });
    }, [filterGames, priceFilters]);

    const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        setPriceFilters((prev) => ({
            ...prev,
            [e.target.id]: e.target.checked
        }));
    };

    return (
        <div className='PriceFilter'>
            <div className='form-check'>
                <input
                    id='low'
                    className='form-check-input'
                    type='checkbox'
                    checked={priceFilters.low}
                    onChange={handleCheckbox}
                />
                <label htmlFor='low' className='form-check-label'>
                    $0 - $19.99
                </label>
            </div>
            <div className='form-check'>
                <input
                    id='med'
                    className='form-check-input'
                    type='checkbox'
                    checked={priceFilters.med}
                    onChange={handleCheckbox}
                />
                <label htmlFor='med' className='form-check-label'>
                    $20 - $39.99
                </label>
            </div>
            <div className='form-check'>
                <input
                    id='high'
                    className='form-check-input'
                    type='checkbox'
                    checked={priceFilters.high}
                    onChange={handleCheckbox}
                />
                <label htmlFor='high' className='form-check-label'>
                    $40 - $59.99
                </label>
            </div>
        </div>
    );
};

export default PriceFilter;
