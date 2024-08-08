const search = async (query) => {
  const response = await fetch(`/search?q=${query}`);
  const text = await response.text();
  try {
    const data = JSON.parse(text);
    return data;
  } catch (error) {
    console.error('Error parsing JSON:', error);
    console.error('Response text:', text);
    throw new Error('Failed to parse JSON');
  }
};

export default search;
