import { ECommercePage } from './app.po';

describe('e-commerce App', function() {
  let page: ECommercePage;

  beforeEach(() => {
    page = new ECommercePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
