import { useContextSetters } from 'smart-context';
import './SideBar.scss';
import { appContext } from '../../context/AppContext';

const SideBar = () => {
    const { setSideBarRenderCount } = useContextSetters(appContext);
    setSideBarRenderCount((prev) => prev + 1);

    return <div className='SideBar h-100 border-end'>sidebar</div>;
};

export default SideBar;
