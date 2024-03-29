import { useContextSelector, useContextSetters } from 'smart-context-hooks';
import { appContext, selectUsername } from '../../context/AppContext';
import './Header.scss';
import SearchProducts from '../SearchProducts/SearchProducts';
import Icon, { IconName } from '../Icon/Icon';

const Header = () => {
    const username = useContextSelector(appContext, selectUsername);
    const { setHeaderRenderCount, setIsCompact } =
        useContextSetters(appContext);

    setHeaderRenderCount((prev) => prev + 1);

    return (
        <div className='Header w-100 border-bottom'>
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <img className='logoImage' src='favicon.png' alt='logo' />
                        <h3 className='d-none d-sm-block m-0'>
                            Smart Context Hooks Demo
                        </h3>
                    </div>
                    <div className='d-sm-none'>
                        <h5 className='m-0'>Smart Context</h5>
                        <h5 className='m-0'>Hooks Demo</h5>
                    </div>
                    <div className='d-flex align-items-center'>
                        <Icon size={24} name={IconName.user} />
                        <span className='ms-1'>{username}</span>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='form-switch p-0 d-flex flex-column align-items-center'>
                        <label
                            className='form-check-label mb-1'
                            htmlFor='toggleSwitch'
                        >
                            Compact
                        </label>
                        <input
                            className='form-check-input'
                            type='checkbox'
                            id='toggleSwitch'
                            defaultChecked={window.innerWidth < 576}
                            onChange={() => setIsCompact((prev) => !prev)}
                        />
                    </div>
                    <div className='col-9 col-md-8 col-lg-6 col-xxl-5 mx-auto'>
                        <SearchProducts />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
