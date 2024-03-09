import ContentPanel from './components/ContentPanel/ContentPanel';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import { AppContextProvider } from './context/AppContext';

const App = () => {
    return (
        <AppContextProvider>
            <div className='d-flex flex-column screen-height'>
                <Header />
                <div className='d-flex flex-grow-1'>
                    <SideBar />
                    <ContentPanel />
                </div>
                <Footer />
            </div>
        </AppContextProvider>
    );
};

export default App;
