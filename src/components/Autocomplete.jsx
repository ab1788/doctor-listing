import React from 'react';

const Autocomplete = ({ query, doctors, onChange, onSearch }) => {
  const filteredSuggestions = doctors
    .filter((d) => d.name.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 5);

  return (
    <div className="relative">
      <input
        data-testid="autocomplete-input"
        className="w-full p-3 rounded-md shadow-sm border border-gray-300"
        placeholder="Search Symptoms, Doctors, Specialists, Clinics"
        value={query}
        onChange={onChange}
        onKeyDown={(e) => e.key === 'Enter' && onSearch(query)}
      />
      {query && (
        <ul className="absolute z-10 bg-white shadow-lg mt-1 max-h-60 overflow-auto w-full rounded-md border">
          {filteredSuggestions.map((d) => (
            <li
              data-testid="suggestion-item"
              key={d.id}
              className="flex items-center gap-4 p-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
              onClick={() => onSearch(d.name)}
            >
              <img
                src={d.photo || 'https://dummyimage.com/40x40/ccc/000&text=Dr'}
                alt="doctor"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="font-medium">{d.name}</div>
                <div className="text-xs text-gray-500 uppercase">
                  {d.specialties?.[0] || 'Doctor'}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
