import React, { useState, useEffect } from 'react';
import HostMentorshipForm from './HostMentorshipForm';

const MentorPage = () => {
  const [mentorships, setMentorships] = useState([]); // State for mentorships
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch mentorships from the API
  useEffect(() => {
    const fetchMentorships = async () => {
      try {
        const response = await fetch('/api/mentorships'); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch mentorships');
        }
        const data = await response.json();
        setMentorships(data);
      } catch (error) {
        console.error('Error fetching mentorships:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMentorships();
  }, []);

  // Handle form submission
  const handleMentorshipSubmit = async (newMentorship) => {
    try {
      const response = await fetch('/api/mentorships', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMentorship),
      });

      if (!response.ok) {
        throw new Error('Failed to save mentorship');
      }

      const savedMentorship = await response.json();
      setMentorships((prevMentorships) => [...prevMentorships, savedMentorship]); // Add to list
    } catch (error) {
      console.error('Error submitting mentorship:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Mentorship Programs</h1>

      {/* Host Mentorship Form */}
      <HostMentorshipForm onMentorshipSubmit={handleMentorshipSubmit} />

      {/* Display Mentorship List */}
      <div className="mt-6">
        {loading ? (
          <p className="text-gray-600">Loading mentorships...</p>
        ) : mentorships.length === 0 ? (
          <p className="text-gray-600">No mentorships available. Create one!</p>
        ) : (
          <ul>
            {mentorships.map((mentorship) => (
              <li
                key={mentorship.id}
                className="border rounded-lg p-4 mb-2 shadow-sm bg-gray-50"
              >
                <h2 className="text-xl font-semibold">{mentorship.title}</h2>
                <p className="text-gray-700">{mentorship.description}</p>
                <p className="text-gray-600">
                  Date: {mentorship.date} | Time: {mentorship.time}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MentorPage;
