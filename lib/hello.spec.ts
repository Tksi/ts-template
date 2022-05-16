import { main } from './hello';

describe('test', () => {
  test('hoge', () => {
    expect(main()).toBe(true);
  });
});
