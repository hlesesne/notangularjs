import { GoogleAngularPage } from './app.po';

describe('google-angular App', () => {
  let page: GoogleAngularPage;

  beforeEach(() => {
    page = new GoogleAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
