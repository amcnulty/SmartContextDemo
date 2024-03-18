import { useContextSetters } from 'smart-context-hooks';
import './SideBar.scss';
import { appContext } from '../../context/AppContext';
import Icon, { IconName } from '../Icon/Icon';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import PriceFilter from '../PriceFilter/PriceFilter';

const SideBar = () => {
    const { setSideBarRenderCount } = useContextSetters(appContext);
    setSideBarRenderCount((prev) => prev + 1);

    const isCompact = false;

    return (
        <div
            className={`SideBar overflow-auto h-100 border-end ${
                isCompact ? 'compact' : ''
            }`}
        >
            <div className='d-flex align-items-center border-bottom overflow-hidden py-3 ps-2'>
                <Icon name={IconName.catalog} size={24} />
                <span className='ms-2 text-nowrap'>Products</span>
            </div>
            <div className='d-flex align-items-center border-bottom overflow-hidden py-3 ps-2'>
                <Icon name={IconName.heart} size={24} />
                <span className='ms-2 text-nowrap'>Wishlist</span>
            </div>
            <div className='d-flex align-items-center border-bottom overflow-hidden py-3 ps-2'>
                <Icon name={IconName.tag} size={24} />
                <span className='ms-2 text-nowrap'>Promotions</span>
            </div>
            <div className='d-flex align-items-center border-bottom overflow-hidden py-3 ps-2'>
                <Icon name={IconName.chat} size={24} />
                <span className='ms-2 text-nowrap'>Help & Support</span>
            </div>
            <section className='ps-2'>
                <div className='d-flex align-items-center overflow-hidden py-3'>
                    <Icon name={IconName.filter} size={24} />
                    <span className='ms-2 text-nowrap'>Filters</span>
                </div>
                <p className='fw-bold'>Category</p>
                <CategoryFilter />
                <p className='fw-bold'>Price</p>
                <PriceFilter />
            </section>
        </div>
    );
};

export default SideBar;
