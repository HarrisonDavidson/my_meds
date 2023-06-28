import { useState, useEffect } from 'react';
import MedList from '../MedList';

const Home = () => {
    const [meds, setMeds] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8088/meds')
        .then(res => {
            return res.json();
    })
    .then ((data) => {
        setMeds(data);
    })
    }, []);




    return (
        <div className="home">
            <MedList meds={meds} title="All Meds"/>
        </div>
    );
}
 
export default Home;