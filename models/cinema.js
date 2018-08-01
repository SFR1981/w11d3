const Cinema = function (films) {
  this.films = films;
};

module.exports = Cinema;

Cinema.prototype.getAllTitles = function () {
  const titles = this.films.map(film => film.title);
  return titles;
};

Cinema.prototype.findByTitle = function (title) {
  const result = this.films.find(film => film.title === title);
  return result;
};


Cinema.prototype.filmsByGenre = function (genre) {
  const result = this.films.filter(film => film.genre === genre);
  return result;
};

Cinema.prototype.filmsByYear = function (year) {
  const result = this.films.filter(film => film.year === year);
  return result;

};

Cinema.prototype.filmExistForYear = function (year) {
  const result = this.films.find(film => film.year === year);
  return !!result;

};

Cinema.prototype.allFilmsOver = function (time) {
  const result = this.films.filter(film => film.length > time );
  return (result.length === this.films.length);

};


Cinema.prototype.totalRunTime = function () {
  const result = this.films.reduce((total, film) => {
    return total + film.length;
  },0);
  return result;
};

Cinema.prototype.filmsByProperty = function (property, value) {
  const result = this.films.filter(film => film[property] === value);
  return result;
};
