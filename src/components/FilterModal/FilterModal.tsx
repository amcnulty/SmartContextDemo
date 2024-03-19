import { useContextSelector, useContextSetters } from 'smart-context-hooks';
import { appContext, selectShowModal } from '../../context/AppContext';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import PriceFilter from '../PriceFilter/PriceFilter';
import StockFilter from '../StockFilter/StockFilter';

const FilterModal = () => {
    const showModal = useContextSelector(appContext, selectShowModal);
    const { setShowModal } = useContextSetters(appContext);

    return (
        <div className='FilterModal'>
            {showModal && (
                <>
                    <div className='modal d-block' tabIndex={-1}>
                        <div className='modal-dialog  modal-dialog-centered modal-dialog-scrollable'>
                            <div className='modal-content'>
                                <div className='modal-header'>
                                    <h5 className='modal-title'>Modal Title</h5>
                                    <button
                                        type='button'
                                        className='btn-close'
                                        data-bs-dismiss='modal'
                                        aria-label='Close'
                                        onClick={() => setShowModal(false)}
                                    ></button>
                                </div>
                                <div className='modal-body'>
                                    <p className='fw-bold'>Category</p>
                                    <CategoryFilter />
                                    <p className='fw-bold'>Price</p>
                                    <PriceFilter />
                                    <p className='fw-bold'>Availability</p>
                                    <StockFilter />
                                </div>
                                <div className='modal-footer'>
                                    <button
                                        type='button'
                                        className='btn btn-primary'
                                        onClick={() => setShowModal(false)}
                                    >
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='modal-backdrop show' />
                </>
            )}
        </div>
    );
};

export default FilterModal;
