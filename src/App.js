import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Layout from './components/Layout';
import './App.css';

const App = () => {
    return (
        <>
            <section className="Layout">
                <Layout />
            </section>
            <section className="Sidebar">
                <Sidebar />
            </section>
            <section className="Navbar">
                <Navbar />
            </section>



        </>
    );
};

export default App;