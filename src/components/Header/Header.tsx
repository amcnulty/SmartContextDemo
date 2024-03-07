import { useContextSelector, useContextSetters } from 'smart-context';
import { appContext, selectCount } from '../../context/AppContext';
import './Header.scss';

const Header = () => {
    const { setHeaderRenderCount } = useContextSetters(appContext);
    const count = useContextSelector(appContext, selectCount);

    setHeaderRenderCount((prev) => prev + 1);

    return (
        <div className='Header w-100 border-bottom'>
            <div className='container'>header - {count}</div>
        </div>
    );
};

export default Header;
