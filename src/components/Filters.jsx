

import React from 'react';

const Filters = ({ specialties, onSort, onToggleSpecialty, onConsultation, currentSort }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 space-y-6">
      <div>
        <h3 className="font-semibold text-gray-800 mb-2">Sort by</h3>
        <label className="block mb-1 text-sm text-gray-600">
          <input
            type="radio"
            name="sort"
            checked={currentSort === 'fees'}
            onChange={() => onSort('fees')}
          /> Price: Low–High
        </label>
        <label className="block text-sm text-gray-600">
          <input
            type="radio"
            name="sort"
            checked={currentSort === 'experience'}
            onChange={() => onSort('experience')}
          /> Experience – Most first
        </label>
      </div>

      {/* Specialities */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-2">Specialities</h3>
        <div className="max-h-40 overflow-y-auto space-y-1 pr-1">
          {specialties.map((s) => (
            <label key={s} className="block text-sm text-gray-600">
              <input
                type="checkbox"
                onChange={() => onToggleSpecialty(s)}
                className="mr-1"
              />
              {s}
            </label>
          ))}
        </div>
      </div>

      {/* Mode of Consultation */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-2">Consultation Type</h3>
        <label className="block text-sm text-gray-600">
          <input type="radio" name="consultation" onChange={() => onConsultation('Video')} className="mr-1" />
          Video Consultation
        </label>
        <label className="block text-sm text-gray-600">
          <input type="radio" name="consultation" onChange={() => onConsultation('In Clinic')} className="mr-1" />
          In Clinic
        </label>
        <label className="block text-sm text-gray-600">
          <input type="radio" name="consultation" onChange={() => onConsultation(null)} className="mr-1" />
          All
        </label>
      </div>
    </div>
  );
};

export default Filters;
