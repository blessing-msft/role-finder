const search = async (query) => {
  try {
    const response = await fetch(`http://localhost:5000/search?q=${query}`);
    if (!response.ok) {
      console.error('Network response was not ok:', response.statusText);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const text = await response.text();
    try {
      const data = JSON.parse(text);
      return data;
    } catch (error) {
      console.error('Failed to parse JSON:', error);
      console.error('Response text:', text);
      throw new Error('Failed to parse JSON');
    }
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
export default search;
