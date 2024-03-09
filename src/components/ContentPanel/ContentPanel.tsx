import { useContextSetters } from 'smart-context-hooks';
import { appContext } from '../../context/AppContext';
import EditUser from '../EditUser/EditUser';

const ContentPanel = () => {
    const { setContentPanelRenderCount } = useContextSetters(appContext);

    setContentPanelRenderCount((prev) => prev + 1);

    return (
        <div className='ContentPanel flex-grow-1'>
            <div className='container h-100 p-3'>
                <div className='d-flex justify-content-end'>
                    <EditUser />
                </div>
            </div>
        </div>
    );
};

export default ContentPanel;
