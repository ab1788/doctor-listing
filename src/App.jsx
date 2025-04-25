import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Autocomplete from './components/Autocomplete';
import Filters from './components/Filters';
import DoctorList from './components/DoctorList';

const API_URL = 'https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json';

const getQueryArray = (param) => {
  if (!param) return [];
  return Array.isArray(param) ? param : [param];
};

const App = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetch(API_URL).then((res) => res.json()).then(setDoctors);
  }, []);

  const specialties = useMemo(() => {
    const set = new Set();
    doctors.forEach((doc) => (doc.specialties || []).forEach((s) => set.add(s)));
    return Array.from(set).sort();
  }, [doctors]);

  useEffect(() => {
    let filtered = [...doctors];
    const search = searchParams.get('search') || '';
    const consultation = searchParams.get('consultation');
    const sort = searchParams.get('sort');
    const selectedSpecialties = getQueryArray(searchParams.getAll('specialties'));

    if (search) {
      filtered = filtered.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (consultation) {
      filtered = filtered.filter((d) => d.consultationType === consultation);
    }
    if (selectedSpecialties.length > 0) {
      filtered = filtered.filter((d) => selectedSpecialties.some((s) => d.specialties.includes(s)));
    }
    if (sort === 'fees') {
      filtered.sort((a, b) => a.fees - b.fees);
    } else if (sort === 'experience') {
      filtered.sort((a, b) => b.experience - a.experience);
    }

    setQuery(search);
    setFilteredDoctors(filtered);
  }, [searchParams, doctors]);

  const handleSearch = (value) => {
    const params = new URLSearchParams(searchParams.toString());
    value ? params.set('search', value) : params.delete('search');
    setSearchParams(params);
  };

  const toggleSpecialty = (s) => {
    const params = new URLSearchParams(searchParams.toString());
    let current = params.getAll('specialties');
    current.includes(s) ? (current = current.filter((i) => i !== s)) : current.push(s);
    params.delete('specialties');
    current.forEach((i) => params.append('specialties', i));
    setSearchParams(params);
  };

  const setConsultation = (type) => {
    const params = new URLSearchParams(searchParams.toString());
    type ? params.set('consultation', type) : params.delete('consultation');
    setSearchParams(params);
  };

  const setSort = (sort) => {
    const params = new URLSearchParams(searchParams.toString());
    sort ? params.set('sort', sort) : params.delete('sort');
    setSearchParams(params);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="bg-[#2455a6] py-4 px-6">
        <div className="max-w-6xl mx-auto">
          <Autocomplete query={query} doctors={doctors} onChange={(e) => setQuery(e.target.value)} onSearch={handleSearch} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 px-4 py-6 max-w-6xl mx-auto">
        {/* Filters Sidebar */}
        <div className="lg:w-1/4 w-full">
          <Filters
            specialties={specialties}
            onSort={setSort}
            onToggleSpecialty={toggleSpecialty}
            onConsultation={setConsultation}
          />
        </div>

        {/* Doctor List */}
        <div className="lg:w-3/4 w-full">
          <DoctorList doctors={filteredDoctors} />
        </div>
      </div>

    </div>
  );
};

export default App;
