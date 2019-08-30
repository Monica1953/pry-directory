import { AppRoutesIcModule } from './app-routes-ic.module';

describe('AppRoutesIcModule', () => {
  let appRoutesIcModule: AppRoutesIcModule;

  beforeEach(() => {
    appRoutesIcModule = new AppRoutesIcModule();
  });

  it('should create an instance', () => {
    expect(appRoutesIcModule).toBeTruthy();
  });
});
