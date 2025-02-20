// src/App.jsx

import Navbar from "./components/Navbar";
import "./global.css";

const App = () => {
    return (
        <div>
            <Navbar />
            <main className="section">
                <h1>Bienvenue sur mon Portfolio</h1>
                <p>Développeur Web & Ingénieur Logiciel.</p>
            </main>
        </div>
    );
};

export default App;
