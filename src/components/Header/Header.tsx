import { useContextSelector } from 'smart-context';
import './Header.scss';
import { appContext, selectCount } from '../../context/AppContext';

const Header = () => {
    console.log('rendering header');
    const count = useContextSelector(appContext, selectCount);

    return (
        <div className='Header w-100 border-bottom'>
            <div className='container'>header - {count}</div>
        </div>
    );
};

export default Header;
