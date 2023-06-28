import { Link } from 'react-router-dom';

const MedList = ({meds}) => {

    return (
        <div className="med-list">
            {meds.map(med => (
                <div className="med-preview" key={med.id}>
                    <Link to={`/meds/${med.id}`}>
                        <h2>{med.name}</h2>
                        <p>{med.dosage} / {med.interval} / { med.status }</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default MedList;