import axios from "axios";

// Define your API key and base URL
const apiKey = "eeb68daa771306f7f9ebf6a007f536a1";
const baseUrl = "https://api.themoviedb.org/3";

// Function to get all movies
export async function getMovie() {
  try {
    return await axios.get(`${baseUrl}/discover/movie?api_key=${apiKey}`);
  } catch (err) {
    console.log(err.message);
  }
}

// Function to show a specific movie by ID
export async function showMovie(id) {
  try {
    return await axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}`);
  } catch (err) {
    console.log(err.message);
  }
}

// Function to search movies
export async function searchMovies(query) {
  try {
    return await axios.get(`${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`);
  } catch (err) {
    console.log(err.message);
  }
}
