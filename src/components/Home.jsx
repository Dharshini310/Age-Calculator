import './Home.css';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { Route, Routes } from 'react-router-dom';  // Import Route and Routes
import Form from '../components/Form.jsx';  // Import your Form component

function Home() {
    return (
        <div className="h">
            <h1>AGE CALCULATOR</h1>
            <h2>Would you like to find out your exact age? Simply provide your birthdate, and I'll calculate it for you!</h2><br />
            <button id="u"><Link to="/form" id='h'>Open Age Calculator</Link></button>  
            <Routes>
                <Route path="/form" element={<Form />} /> 
            </Routes>
        </div>
    );
}

export default Home;
