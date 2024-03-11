import { useContextSelector } from 'smart-context-hooks';
import {
    appContext,
    selectContentPanelRenderCount,
    selectHeaderRenderCount,
    selectSideBarRenderCount
} from '../../context/AppContext';

const Footer = () => {
    const headerRenders = useContextSelector(
        appContext,
        selectHeaderRenderCount
    );
    const sideBarRenders = useContextSelector(
        appContext,
        selectSideBarRenderCount
    );
    const contentPanelRenders = useContextSelector(
        appContext,
        selectContentPanelRenderCount
    );

    return (
        <div className='Footer border-top'>
            <div className='container d-flex flex-column align-items-center py-5'>
                <h4>Component Render Counts</h4>
                <p>
                    Watch how only the specific component that needs to render
                    updates as you interact with the UI.
                </p>
                <div className='card text-bg-secondary h4'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-center'>
                            <div className='d-flex'>
                                <span className='fw-bold me-2'>Header:</span>
                                <span>{headerRenders}</span>
                            </div>
                            <div className='d-flex mx-4'>
                                <span className='fw-bold me-2'>Side Bar:</span>
                                <span>{sideBarRenders}</span>
                            </div>
                            <div className='d-flex'>
                                <span className='fw-bold me-2'>
                                    Content Panel:
                                </span>
                                <span>{contentPanelRenders}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
