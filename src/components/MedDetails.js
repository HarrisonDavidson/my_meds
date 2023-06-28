import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useNavigate } from "react-router-dom";

const MedDetails = () => {
    const { id } = useParams();
    const { data: med } = useFetch('http://localhost:8088/meds/' + id);
    const  navigate  = useNavigate();

const handleDelete = (med) => {
    fetch(`http://localhost:8088/meds/${med.id}`, {
        method: 'DELETE'
    }).then(() => {
        navigate('/');
    })
}

const handleStatus = (med) => {
    fetch(`http://localhost:8088/meds/${med.id}`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "!ALREADY TAKEN!"})
    }).then(() => {
        navigate('/');
    })
}

    return (
        <div className="med-details">
                { med && <article>
                    <h2>{ med.name }</h2>
                    <p>{ med.dosage } / { med.interval } / { med.status }</p>
                </article>}
                    <button onClick={()=>handleDelete(med)}>Delete</button>
                    <button onClick={()=>handleStatus(med)}>Mark as Taken</button>
        </div>
    );
}
 
export default MedDetails;