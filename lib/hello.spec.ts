import { describe, expect, test } from 'vitest';
import { hello } from './hello';

describe('test', () => {
  test('hoge', () => {
    expect(hello()).toBe(true);
  });
});
