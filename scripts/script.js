"use strict";

let numberOFFilms = +prompt("Скільки фільмів ви переглянули?","");


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

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);