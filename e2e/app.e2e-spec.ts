import { ParticleSystemPage } from './app.po';

describe('particle-system App', () => {
  let page: ParticleSystemPage;

  beforeEach(() => {
    page = new ParticleSystemPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
