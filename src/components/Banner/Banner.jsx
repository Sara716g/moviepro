import React, { useEffect, useState } from "react";
import NetflixBannerLogo from "../../assets/ImagesForInitialUse/image/logo.png";
import { Play, Info } from "lucide-react";
import styles from "./Banner.module.css";
import movieInstance from "../../Utility/MovieInstance";
import requests from "../../Utility/requestUrls";

const BANNER_BASE = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [bannerMovie, setBannerMovie] = useState(null);

  useEffect(() => {
    async function fetchBannerDataImage() {
      try {
        const request = await movieInstance.get(requests.fetchNetflixOriginals);

        const results = request?.data?.results;

        if (results && results.length > 0) {
          const randomMovie =
            results[Math.floor(Math.random() * results.length)];

          setBannerMovie(randomMovie);
        }
      } catch (error) {
        console.log("Banner error:", error);
      }
    }

    fetchBannerDataImage();
  }, []);
    
    function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

  return (
    <div
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: bannerMovie
          ? `url("${BANNER_BASE}${bannerMovie.backdrop_path}")`
          : "none",
        backgroundPosition: "center center",
      }}
    >
      <div className={styles.content}>
        <img className={styles.logoImg} src={NetflixBannerLogo} alt="Netflix" />

        <h1 className={styles.title}>{bannerMovie?.name || bannerMovie?.title}</h1>

        <h1 className={styles.description}>
          {truncate(bannerMovie?.overview, 150)}
        </h1>

        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            <Play size={30} />
            play
          </button>

          <button className={styles.button}>
            <Info size={30} />
            My List
          </button>
        </div>
      </div>

      <div className={styles.fadeBottom}></div>
    </div>
  );
}

export default Banner;
