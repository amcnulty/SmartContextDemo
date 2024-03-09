import { useState } from 'react';

const SearchProducts = () => {
    const [search, setSearch] = useState('');

    return (
        <div className='SearchProducts input-group my-3'>
            <label
                htmlFor='username'
                className='input-group-text d-none d-sm-flex'
            >
                Search Products:
            </label>
            <input
                id='username'
                type='text'
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className='form-control'
            />
            <button
                type='button'
                className='btn btn-primary btn-sm'
                // onClick={handleSaveClick}
            >
                <span className='d-none d-sm-inline'>Search</span>
                <span className='d-sm-none'>Search Products</span>
            </button>
        </div>
    );
};

export default SearchProducts;
