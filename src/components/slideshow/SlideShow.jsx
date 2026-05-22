import React, { useEffect, useState } from 'react';
import styles from "./slideshow.module.css";
import MovieCard from '../MovieCard/MovieCard';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function SlideShow({ title, movies }) {
    console.log(movies);
    return (
      <div>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.Row}>
                <Swiper
                    modules={[Navigation]}
                  navigation
                  spaceBetween={20}
                  slidesPerView={5.8}  
          >
                    {movies?.map((movie) => (
                <SwiperSlide key={movie.id}>
                            <MovieCard key={movie.id} movie={movie} />
                </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
}

export default SlideShow;