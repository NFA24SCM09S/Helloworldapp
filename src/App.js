import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  // This useEffect will fetch data from the Flask backend
  useEffect(() => {
    // Replace with the URL of your Flask backend
    fetch('http://127.0.0.1:5000') // Flask backend is running on this URL by default
      .then((response) => response.text()) // Convert the response to text
      .then((data) => setMessage(data)) // Set the data to 'message' state
      .catch((error) => console.error('Error fetching data:', error)); // Handle any errors
  }, []); // Empty array ensures this runs only once when the component mounts

  return (
    <div>
      <h1>{message}</h1> {/* Display the fetched data */}
    </div>
  );
}

export default App;
