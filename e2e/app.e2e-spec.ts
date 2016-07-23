import { CiphyappPage } from './app.po';

describe('ciphyapp App', function() {
  let page: CiphyappPage;

  beforeEach(() => {
    page = new CiphyappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
