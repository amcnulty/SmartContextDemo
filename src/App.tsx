import ContentPanel from './components/ContentPanel/ContentPanel';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import { AppContextProvider } from './context/AppContext';

const App = () => {
    console.log('rendering app');
    return (
        <AppContextProvider>
            <div className='d-flex flex-column screen-height'>
                <Header />
                <div className='d-flex flex-grow-1'>
                    <SideBar />
                    <ContentPanel />
                </div>
            </div>
        </AppContextProvider>
    );
};

export default App;
