import { TourOfHeroesPage } from './app.po';
/*
describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });
});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should add a new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });

});
*/
describe('Tour of heroes, busqueda de heroe', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
  });

  it('debe buscar un heroe', () => {
    page.navigateTo();
    page.findHeroInInput('magneta');
  });

});

describe('Tour of heroes, edición un heroe', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('debe editar un heroe', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.navigateTo();
    page.findHeroInInput('magneta');
    page.editHeroInInput('magneto');
  });

});
/*
describe('Tour of heroes, navigate in Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should navigate to hero', () => {
    page.navigateToHeroes();
    page.navigateToHeroInDashboard('Bombasto');
  });*/

describe('Tour of heroes, navegar a heroe desde la busqueda', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
  });

  it('debe navegar a heroe desde la busqueda', () => {
    page.navigateTo();
    page.navigateToHeroInFinder('Zero');
  });
});

