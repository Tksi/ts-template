import { describe, expect, test } from 'vitest';
import { main } from './hello';

describe('test', () => {
  test('hoge', () => {
    expect(main()).toBe(true);
  });
});
