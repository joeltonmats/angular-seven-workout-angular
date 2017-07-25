import { AngularByExamplePage } from './app.po';

describe('angular-by-example App', () => {
  let page: AngularByExamplePage;

  beforeEach(() => {
    page = new AngularByExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
