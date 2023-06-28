import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState('');
    const [dosage, setDosage] = useState('');
    const [interval, setInterval] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const med = { name, dosage, interval, status };
        
        fetch('http://localhost:8088/meds', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(med)
        }).then(() => {
        navigate('/');
    })
}



  return (
    <div className="create">
      <h2>Add a New Medication</h2>
      <form onSubmit={handleSubmit}>
        <label>Medication Name:</label>
        <input type="text" required value={name} onChange={(e) => setName(e.target.value)}/>
        <label>Medication Dosage:</label>
        <input type="text" required value={dosage} onChange={(e) => setDosage(e.target.value)} />
        <label>Medication Interval:</label>
        <input type="text" required value={interval} onChange={(e) => setInterval(e.target.value)}/>
        <button>Add Medication</button>
      </form>
    </div>
  );
}
 
export default Create;













// import React, { useState } from 'react';

// function MedicationForm({ onAddMedication }) {
//   const [medication, setMedication] = useState({ name: '', time: '' });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onAddMedication(medication);
//     setMedication({ name: '', time: '' });
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setMedication((prevMedication) => ({
//       ...prevMedication,
//       [name]: value,
//     }));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Add Medication</h2>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={medication.name}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="time">Time:</label>
//         <input
//           type="text"
//           id="time"
//           name="time"
//           value={medication.time}
//           onChange={handleInputChange}
//         />
//       </div>
//       <button type="submit">Add</button>
//     </form>
//   );
// }

// export default MedicationForm;
