// import React from 'react';

// const DoctorCard = ({ doctor }) => {
//   return (
//     <div data-testid="doctor-card" className="bg-white p-5 rounded-xl shadow-md flex items-start gap-5">
//       <img
//         src={doctor.image || 'https://dummyimage.com/80x80/ccc/000&text=Dr'}
//         alt={doctor.name}
//         className="w-20 h-20 rounded-full object-cover"
//       />
//       <div className="flex-1">
//         <h2 data-testid="doctor-name" className="font-semibold text-lg">{doctor.name}</h2>
//         <p data-testid="doctor-specialty" className="text-gray-600 text-sm">{doctor.specialties}</p>
//         <p data-testid="doctor-experience" className="text-sm text-gray-500">{doctor.experience} yrs exp.</p>
//         <p data-testid="doctor-fee" className="text-sm font-medium mt-1 text-gray-700">₹ {doctor.fees}</p>
//         <button className="mt-3 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 text-sm">
//           Book Appointment
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DoctorCard;

import React from 'react';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md flex items-start gap-5">
      <img
        src={doctor.image || 'https://dummyimage.com/80x80/ccc/000&text=Dr'}
        alt={doctor.name}
        className="w-20 h-20 rounded-full object-cover"
      />
      <div className="flex-1">
        <h2 className="font-semibold text-lg">{doctor.name}</h2>
        <p className="text-gray-600 text-sm">{doctor.specialties}</p>
        <p className="text-sm text-gray-500">{doctor.experience} yrs exp.</p>
        <p className="text-sm font-medium mt-1 text-gray-700">₹ {doctor.fees}</p>
        <button className="mt-3 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 text-sm">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
