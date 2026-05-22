import React, { useEffect, useState } from "react";
import styles from "./DisplayRow.module.css";
import SlideShow from "../slideshow/SlideShow";
import movieInstance from "../../Utility/MovieInstance";
import requests from "../../Utility/requestUrls";

function DisplayRow() {
  const [movies, setMovies] = useState({
    trending: [],
    netflixOriginals: [],
    topRated: [],
    action: [],
    comedy: [],
    horror: [],
    romance: [],
    documentaries: [],
  });

  const fetchMovies = async () => {
    try {
      const [
        trendingRes,
        netflixOriginalsRes,
        topRatedRes,
        actionRes,
        comedyRes,
        horrorRes,
        romanceRes,
        documentariesRes,
      ] = await Promise.all([
        movieInstance.get(requests.fetchTrending),
        movieInstance.get(requests.fetchNetflixOriginals),
        movieInstance.get(requests.fetchTopRatedMovies),
        movieInstance.get(requests.fetchActionMovies),
        movieInstance.get(requests.fetchComedyMovies),
        movieInstance.get(requests.fetchHorrorMovies),
        movieInstance.get(requests.fetchRomanceMovies),
        movieInstance.get(requests.fetchDocumentaries),
      ]);

      setMovies({
        trending: trendingRes.data.results,
        netflixOriginals: netflixOriginalsRes.data.results,
        topRated: topRatedRes.data.results,
        action: actionRes.data.results,
        comedy: comedyRes.data.results,
        horror: horrorRes.data.results,
        romance: romanceRes.data.results,
        documentaries: documentariesRes.data.results,
      });
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className={styles.mainwrapper}>
      <SlideShow title="Trending Now" movies={movies.trending} />

      <SlideShow title="Netflix Originals" movies={movies.netflixOriginals} />

      <SlideShow title="Top Rated" movies={movies.topRated} />

      <SlideShow title="Action Movies" movies={movies.action} />
    </div>
  );
}

export default DisplayRow;
