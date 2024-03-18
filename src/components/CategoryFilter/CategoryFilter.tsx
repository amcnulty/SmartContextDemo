import { ChangeEvent, useEffect, useState } from 'react';
import { useContextSetters } from 'smart-context-hooks';
import { appContext } from '../../context/AppContext';

export interface FilterCategories {
    Action?: boolean;
    Horror?: boolean;
    Platformer?: boolean;
    Racing?: boolean;
    RPG?: boolean;
    Simulation?: boolean;
    Strategy?: boolean;
}

const CategoryFilter = () => {
    const { filterGames } = useContextSetters(appContext);
    const [filterCategories, setFilterCategories] = useState<FilterCategories>(
        {}
    );

    useEffect(() => {
        filterGames({ categories: filterCategories });
    }, [filterCategories, filterGames]);

    const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        setFilterCategories((prev) => ({
            ...prev,
            [e.target.id]: e.target.checked
        }));
    };

    return (
        <div className='CategoryFilter'>
            <div className='form-check'>
                <input
                    id='Action'
                    className='form-check-input'
                    type='checkbox'
                    checked={filterCategories.Action}
                    onChange={handleCheckbox}
                />
                <label htmlFor='Action' className='form-check-label'>
                    Action
                </label>
            </div>
            <div className='form-check'>
                <input
                    id='Horror'
                    className='form-check-input'
                    type='checkbox'
                    checked={filterCategories.Horror}
                    onChange={handleCheckbox}
                />
                <label htmlFor='Horror' className='form-check-label'>
                    Horror
                </label>
            </div>
            <div className='form-check'>
                <input
                    id='Platformer'
                    className='form-check-input'
                    type='checkbox'
                    checked={filterCategories.Platformer}
                    onChange={handleCheckbox}
                />
                <label htmlFor='Platformer' className='form-check-label'>
                    Platformer
                </label>
            </div>
            <div className='form-check'>
                <input
                    id='Racing'
                    className='form-check-input'
                    type='checkbox'
                    checked={filterCategories.Racing}
                    onChange={handleCheckbox}
                />
                <label htmlFor='Racing' className='form-check-label'>
                    Racing
                </label>
            </div>
            <div className='form-check'>
                <input
                    id='RPG'
                    className='form-check-input'
                    type='checkbox'
                    checked={filterCategories.RPG}
                    onChange={handleCheckbox}
                />
                <label htmlFor='RPG' className='form-check-label'>
                    RPG
                </label>
            </div>
            <div className='form-check'>
                <input
                    id='Simulation'
                    className='form-check-input'
                    type='checkbox'
                    checked={filterCategories.Simulation}
                    onChange={handleCheckbox}
                />
                <label htmlFor='Simulation' className='form-check-label'>
                    Simulation
                </label>
            </div>
            <div className='form-check'>
                <input
                    id='Strategy'
                    className='form-check-input'
                    type='checkbox'
                    checked={filterCategories.Strategy}
                    onChange={handleCheckbox}
                />
                <label htmlFor='Strategy' className='form-check-label'>
                    Strategy
                </label>
            </div>
        </div>
    );
};

export default CategoryFilter;
