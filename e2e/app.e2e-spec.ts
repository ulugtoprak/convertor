import { ConvertorPage } from './app.po';

describe('convertor App', function() {
  let page: ConvertorPage;

  beforeEach(() => {
    page = new ConvertorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
