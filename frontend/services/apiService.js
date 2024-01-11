// apiService.js
export const getResponse = async (query) => {
  try {
    const url = new URL(`https://aaryush.pythonanywhere.com/get_response`);
    url.search = new URLSearchParams({ query }).toString();

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseText = await response.text();

    // Log the response text for debugging
    console.log("Response from API:", responseText);

    return responseText;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};
