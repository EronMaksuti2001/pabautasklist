import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function OptionPage({setStep, data}) {
    const { postId } = useParams();
    useEffect(() => {
      setStep(2);
    }, []);
    const selectedOption = data.find(option => option.id == postId);
  
    return (
        <main className="container">
            <div>
            <Link to="/" className="back-button">Back</Link>
            </div>
            <br></br>
            <h2>Selected option:</h2>
            <p>{selectedOption.name}</p>
        </main>

    );
}

export default OptionPage;