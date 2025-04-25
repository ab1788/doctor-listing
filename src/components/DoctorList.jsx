// import React from 'react';
// import DoctorCard from './DoctorCard';

// const DoctorList = ({ doctors }) => {
//   return (
//     <div className="space-y-4">
//       {doctors.map((doc) => (
//         <DoctorCard key={doc.id} doctor={doc} />
//       ))}
//     </div>
//   );
// };

// export default DoctorList;
import React from 'react';
import DoctorCard from './DoctorCard';

const DoctorList = ({ doctors }) => {
  if (!doctors.length) {
    return <p className="text-gray-500 text-sm">No doctors found for selected filters.</p>;
  }

  return (
    <div className="space-y-4">
      {doctors.map((doc) => (
        <DoctorCard key={doc.id} doctor={doc} />
      ))}
    </div>
  );
};

export default DoctorList;
