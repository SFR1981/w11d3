const Cinema = function (films) {
  this.films = films;
};

module.exports = Cinema;

Cinema.prototype.getAllTitles = function () {
  const titles = this.films.map(film => film.title);
  return titles;
};
