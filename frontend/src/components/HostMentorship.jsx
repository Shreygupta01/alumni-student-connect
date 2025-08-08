import React, { useState } from 'react';

const HostMentorshipForm = ({ onCancel }) => {
  const [mentorshipDetails, setMentorshipDetails] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [allMentorships, setAllMentorships] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMentorshipDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMentorship = { ...mentorshipDetails, id: Date.now() };
    setAllMentorships((prevMentorships) => [...prevMentorships, newMentorship]);
    console.log('Mentorship details submitted:', newMentorship);
    setIsSubmitted(true);
  };

  const handleNewMentorship = () => {
    setMentorshipDetails({
      title: '',
      description: '',
      date: '',
      time: '',
    });
    setIsSubmitted(false);
  };

  const renderMentorshipList = () => (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">All Mentorship Events</h3>
      {allMentorships.map((mentorship) => (
        <div key={mentorship.id} className="bg-gray-100 rounded-lg p-4 mb-4">
          <h4 className="font-semibold">{mentorship.title}</h4>
          <p className="text-sm text-gray-600">{mentorship.description}</p>
          <p className="text-sm text-gray-600">
            Date: {mentorship.date} | Time: {mentorship.time}
          </p>
        </div>
      ))}
    </div>
  );

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-4 m-4">
        <h2 className="text-2xl font-bold mb-4">Mentorship Event Created</h2>
        <div className="mb-4">
          <p className="font-semibold">Event Details:</p>
          <p>{mentorshipDetails.title}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Description:</p>
          <p>{mentorshipDetails.description}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Date:</p>
          <p>{mentorshipDetails.date}</p>
        </div>
        <div className="mb-4">
          <p className="font-semibold">Time:</p>
          <p>{mentorshipDetails.time}</p>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleNewMentorship}
            className="mr-2 px-4 py-2 bg-secondary text-white rounded-lg"
          >
            Create New Mentorship
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-primary text-white rounded-lg"
          >
            Close
          </button>
        </div>
        {renderMentorshipList()}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 m-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Event Details</label>
          <input
            type="text"
            name="title"
            value={mentorshipDetails.title}
            onChange={handleChange}
            required
            className="border rounded-lg w-full py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={mentorshipDetails.description}
            onChange={handleChange}
            required
            className="border rounded-lg w-full py-2 px-3"
          />
        </div>
        <div className="mb-4 flex space-x-2">
          <div className="flex-1">
            <label className="block text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              value={mentorshipDetails.date}
              onChange={handleChange}
              required
              className="border rounded-lg w-full py-2 px-3"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700">Time</label>
            <input
              type="time"
              name="time"
              value={mentorshipDetails.time}
              onChange={handleChange}
              required
              className="border rounded-lg w-full py-2 px-3"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="mr-2 px-4 py-2 bg-secondary text-white rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
      {renderMentorshipList()}
    </div>
  );
};

export default HostMentorshipForm;


