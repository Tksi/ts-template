import { describe, expect, test } from 'vitest';
import { hello } from './hello.js';

describe('test', () => {
  test('hoge', () => {
    expect(hello()).toBe(true);
  });
});
