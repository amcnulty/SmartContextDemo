import { useContextSetters } from 'smart-context';
import { appContext } from '../../context/AppContext';

const ContentPanel = () => {
    console.log('rendering content panel');
    const { setCount } = useContextSetters(appContext);
    return (
        <div className='ContentPanel flex-grow-1'>
            <div className='container h-100'>
                content panel
                <button
                    className='btn btn-primary'
                    onClick={() => setCount((previous) => previous + 1)}
                >
                    Increment
                </button>
            </div>
        </div>
    );
};

export default ContentPanel;
