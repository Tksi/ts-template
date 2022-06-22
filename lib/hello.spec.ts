import { main } from './hello';
import { describe, test, expect } from 'vitest';

describe('test', () => {
  test('hoge', () => {
    expect(main()).toBe(true);
  });
});
