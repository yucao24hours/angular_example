import { MyCalcAppPage } from './app.po';

describe('my-calc-app App', () => {
  let page: MyCalcAppPage;

  beforeEach(() => {
    page = new MyCalcAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
