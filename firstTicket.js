'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 'Например: 7, и это только сегодня');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const lastFilm = prompt("Один из последних просмотренных фильмов?", "Наверное Довод?)");
const opinion = +prompt("На сколько оцените его по пятибальной шкале?", "3");
const lastFilm2 = prompt("Один из последних просмотренных фильмов?", "Или не Довод?)");
const opinion2 = +prompt("На сколько оцените его по пятибальной шкале?", "5");
personalMovieDB.movies[lastFilm] = opinion;
personalMovieDB.movies[lastFilm2] = opinion2;

console.log(personalMovieDB);