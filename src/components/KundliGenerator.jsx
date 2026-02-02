import React, { useState } from 'react';

const BirthChart = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    day: '', month: '', year: '',
    hour: '', min: '', amPm: 'AM',
    city: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Helper: Convert 12h to 24h format
  const get24HourFormat = (hourStr, amPm) => {
    let h = parseInt(hourStr, 10);
    if (isNaN(h)) return 0;
    if (amPm === 'PM' && h < 12) h += 12;
    if (amPm === 'AM' && h === 12) h = 0;
    return h;
  };

  const fetchChart = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      // --- STEP 1: Get Lat, Lng, Country from City Name (OpenStreetMap) ---
      const geoUrl = `https://nominatim.openstreetmap.org/search?q=${formData.city}&format=json&addressdetails=1&limit=1`;
      const geoRes = await fetch(geoUrl);
      const geoData = await geoRes.json();

      if (!geoData.length) {
        throw new Error("City not found. Please check spelling.");
      }

      const location = geoData[0];
      const lat = location.lat;
      const lng = location.lon;
      const countryCode = location.address.country_code.toUpperCase(); // e.g., 'IN', 'US', 'FR'
      
      // Auto-detect user's timezone (e.g., 'Asia/Kolkata')
      // Note: Ideally this should match the birth city, but browser TZ is a safe default for free apps.
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; 

      // --- STEP 2: Prepare Query Parameters for GET Request ---
      const hour24 = get24HourFormat(formData.hour, formData.amPm);
      
      const params = new URLSearchParams({
        name: formData.name,
        year: formData.year,
        month: formData.month,
        day: formData.day,
        hour: hour24,
        minute: formData.min,
        lat: lat,
        lng: lng,
        city: formData.city,
        country: countryCode, // Auto-fetched from OpenStreetMap
        tz: timeZone          // Auto-detected from browser
      });

      // --- STEP 3: Call the Numerology API ---
      const apiUrl = `https://the-numerology-api.p.rapidapi.com/birth-chart?${params.toString()}`;
      
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "X-Rapidapi-Key": "237804f170msh96f240c78ece6fdp173d80jsnb656b026fae3", // ⚠️ PASTE YOUR KEY HERE
          "X-Rapidapi-Host": "the-numerology-api.p.rapidapi.com"
        }
      });

      if (!response.ok) {
        throw new Error("Failed to fetch chart. Check inputs or API limit.");
      }

      const data = await response.json();
      setResult(data);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold text-gray-900">
            Vedic <span className="text-orange-600">Birth Chart</span>
          </h2>
          <p className="text-gray-600 mt-2">Discover your planetary positions</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          
          {/* LEFT: Input Form */}
          <div className="w-full lg:w-1/3 bg-white p-6 rounded-2xl shadow-xl border-t-4 border-orange-500">
            <form onSubmit={fetchChart} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Name</label>
                <input name="name" onChange={handleChange} className="w-full p-2 border rounded focus:ring-orange-500 outline-none" placeholder="Enter Name" required />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Date of Birth</label>
                <div className="flex gap-2">
                  <input name="day" type="number" placeholder="DD" onChange={handleChange} className="w-full p-2 border rounded focus:ring-orange-500 outline-none" required min="1" max="31" />
                  <input name="month" type="number" placeholder="MM" onChange={handleChange} className="w-full p-2 border rounded focus:ring-orange-500 outline-none" required min="1" max="12" />
                  <input name="year" type="number" placeholder="YYYY" onChange={handleChange} className="w-full p-2 border rounded focus:ring-orange-500 outline-none" required min="1900" max="2100" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Time of Birth</label>
                <div className="flex gap-2">
                  <input name="hour" type="number" placeholder="HH" onChange={handleChange} className="w-1/3 p-2 border rounded focus:ring-orange-500 outline-none" required min="1" max="12" />
                  <input name="min" type="number" placeholder="MM" onChange={handleChange} className="w-1/3 p-2 border rounded focus:ring-orange-500 outline-none" required min="0" max="59" />
                  <select name="amPm" onChange={handleChange} className="w-1/3 p-2 border rounded focus:ring-orange-500 bg-white outline-none">
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">City</label>
                <input name="city" onChange={handleChange} className="w-full p-2 border rounded focus:ring-orange-500 outline-none" placeholder="e.g. New Delhi" required />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg shadow-md transition-all"
              >
                {loading ? "Calculating..." : "Generate Chart"}
              </button>

              {error && <p className="text-red-500 text-xs text-center mt-2">{error}</p>}
            </form>
          </div>

          {/* RIGHT: Result Display */}
          <div className="w-full lg:w-2/3 bg-white p-6 rounded-2xl shadow-xl min-h-[400px]">
            {!result ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-400 opacity-50">
                 <p>Enter your details to view your astrological chart.</p>
              </div>
            ) : (
              <div className="animate-fade-in">
                <div className="border-b pb-4 mb-4">
                  <h3 className="text-xl font-bold text-gray-800">Birth Chart for {formData.name}</h3>
                  <p className="text-sm text-gray-500">
                    {formData.city} • {formData.day}/{formData.month}/{formData.year}
                  </p>
                </div>

                {/* Raw JSON Dump (Customize this once you see the exact API response structure) */}
                <div className="bg-gray-50 p-4 rounded-lg overflow-auto max-h-[500px] border border-gray-200">
                  <pre className="text-xs text-gray-700 whitespace-pre-wrap">
                    {JSON.stringify(result, null, 2)}
                  </pre>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BirthChart;