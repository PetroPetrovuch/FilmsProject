"use strict";

let numberOFFilms = +prompt("Скільки фільмів ви переглянули?",0);


const personalMovieDB = {

    count : numberOFFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};





for(let i=0;i<personalMovieDB.count;i++){
    const film = prompt("Останій переглянутий фільм?","");
    const rating = prompt("На скільки ви його оцінюєте","");

    if(film!=null && rating!=null && film !="" && rating!="" && film.length < 50)
    {
        personalMovieDB.movies[film]=rating;
        console.log("done");
    }
    else
    {
        console.log("error");
        i--;
    }
    

}

console.log(personalMovieDB);