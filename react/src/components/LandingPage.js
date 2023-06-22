import { Link } from "react-router-dom";
import { useEffect } from "react";

function LandingPage({setStep, data}) {
    useEffect(() => {
        setStep(1);
    }, []);

    return (
        <main className="container">
            <h2>Select an option:</h2>
            <ul>
            {
                data.map(option => (
                    <li><Link to={option.id}>{option.name}</Link></li>
                ))
            }
            </ul>
        </main>
    );
}

export default LandingPage;
  