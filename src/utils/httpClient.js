const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjk3NWFiNDRlZmJlYWI3MDg3NTU5N2I2YTY3ZDA1YiIsInN1YiI6IjYyMDcwOGFkZDk1NDIwMDA2OGRlNTMzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k_VpBu5Tq7Ts3NSXrgeKyFRYcUGmMI0Y-Wye5cwEdDE",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
