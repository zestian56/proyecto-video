import { ProyectoVideoPage } from './app.po';

describe('proyecto-video App', () => {
  let page: ProyectoVideoPage;

  beforeEach(() => {
    page = new ProyectoVideoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
