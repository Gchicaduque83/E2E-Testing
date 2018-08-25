import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }

  findHeroInInput(hero: string) {
    element(by.tagName('input')).sendKeys(hero);
    element(by.className('search-result')).click();
  }

  editHeroInInput(hero: string) {
    element(by.tagName('input')).clear();
    element(by.tagName('input')).sendKeys(hero);
    element(by.buttonText('Save')).click();
  }

  navigateToHeroInDashboard(hero: string) {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).
    element(by.cssContainingText('.module.hero', hero)).click();
  }

  navigateToHeroInFinder(hero: string) {
    element(by.tagName('input')).sendKeys(hero);
    element(by.className('search-result')).click();
    element(by.buttonText('Back')).click();
  }

}
