import { FormEvent, MouseEvent, useState } from 'react';
import { useContextSetters } from 'smart-context-hooks';
import { appContext } from '../../context/AppContext';

const SearchProducts = () => {
    const { setSearchTerm } = useContextSetters(appContext);
    const [search, setSearch] = useState('');

    const handleFormSubmit = (
        e?: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
    ) => {
        e?.preventDefault();
        setSearchTerm(search);
    };

    return (
        <form
            onSubmit={handleFormSubmit}
            className='SearchProducts input-group my-3'
        >
            <label
                htmlFor='productSearch'
                className='input-group-text d-none d-sm-flex'
            >
                Search Products:
            </label>
            <input
                id='productSearch'
                type='search'
                value={search}
                onInput={(event) => {
                    if (
                        (event.target as EventTarget & HTMLInputElement)
                            .value === ''
                    ) {
                        setSearch('');
                        setSearchTerm('');
                    }
                }}
                onChange={(event) => setSearch(event.target.value)}
                className='form-control'
            />
            <button
                type='submit'
                className='btn btn-primary btn-sm'
                onClick={handleFormSubmit}
            >
                <span className='d-none d-sm-inline'>Search</span>
                <span className='d-sm-none'>Search Products</span>
            </button>
        </form>
    );
};

export default SearchProducts;
