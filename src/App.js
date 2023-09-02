import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Layout from './components/Layout';
import './App.css';

const App = () => {
    return (
        <>
            <div className="main-page">
                <section className="Navbar">
                    <Navbar />
                </section>
                 <section className="Sidebar">
                    <Sidebar />
                    </section>
                 <section className="Layout">
                    <Layout />
                </section>
            </div>
        </>
    );
};

export default App;