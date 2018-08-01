const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function () {
    const result = cinema.getAllTitles();
    assert.strictEqual(result[0], 'Moonlight');
  });

  it('should be able to find a film by title', function () {
    const result = cinema.findByTitle("Dunkirk");
    assert.deepStrictEqual(result, dunkirk);
  });
  it('should be able to filter films by genre', function () {
      const list = cinema.filmsByGenre("drama");
      const result = list.length;
      assert.deepStrictEqual(result, 2);
  });
  it('should be able to check whether there are some films from a particular year', function(){
    const list = cinema.filmsByYear(2017);
    const result = list.length;
    assert.strictEqual(result, 3);

  });

  it('should be able to check whether there are no films from a particular year', function(){
    const result = cinema.filmExistForYear(2020);
    assert.strictEqual(result, false);
  });

  it('should be able to check whether all films are over a particular length', function(){
    const result = cinema.allFilmsOver(100);
    const result2 = cinema.allFilmsOver(90);
    assert.strictEqual(result, false);
    assert.strictEqual(result2, true);
  });

  it('should be able to calculate total running time of all films', function(){
    const result = cinema.totalRunTime();
    assert.strictEqual(result, 622);
  });

  it("should be able to filter films by year/genre", function () {
    const list = cinema.filmsByProperty("year", 2017);
    const list2 = cinema.filmsByProperty("genre", "drama");
    const result = list.length;
    const result2 = list2.length;
    assert.deepStrictEqual(result, 3);
    assert.deepStrictEqual(result2, 2);
  })
});

module.exports = Cinema;
