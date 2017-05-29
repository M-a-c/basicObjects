import { BasicObjectsPage } from './app.po';

describe('basic-objects App', () => {
  let page: BasicObjectsPage;

  beforeEach(() => {
    page = new BasicObjectsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
