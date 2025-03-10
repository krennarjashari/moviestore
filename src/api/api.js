import axios from "axios";

const api_url =
  "https://api.themoviedb.org/3/discover/movie?api_key=a6b8d52f206f999a1339233f41a9f8c4";

export async function getMovies() {
  const resp = await axios.get(api_url);
  return resp;
}
