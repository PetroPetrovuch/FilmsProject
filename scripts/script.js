//"use strict";

function start()
{
    console.log("function start");
    let numberOFFilms =  prompt("Скільки фільмів ви переглянули?","");

    while(numberOFFilms=='' || numberOFFilms == null || isNaN(numberOFFilms))
    {
        numberOFFilms = prompt("Скільки фільмів ви переглянули?","");
        console.log("Ведені некоректні дані");
    }
    
    return numberOFFilms;
    
}

let starT = start();


const personalMovieDB = {

    count : starT,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};



function ShowMyDB(hidden)
{

   
    if(!hidden)
    {
        //console.table(personalMovieDB);
        console.log(personalMovieDB);
    }
    return personalMovieDB.privat;
}

ShowMyDB(personalMovieDB.privat);



function rememberMyFilms()
{
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
}

rememberMyFilms();

function detectPersonalLevel()
{

    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
    
    


}

detectPersonalLevel();

function writeYourGeners()
{
    for(let i=0;i<3;++i)
    {
        personalMovieDB.genres[i]=prompt(`Ваш улюблений жанр під номером ${i+1}?`);
    }


}

writeYourGeners();






