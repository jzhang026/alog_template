import { AB_OptimizeHeader } from './ABStrategyPattern';
import { expect, test } from 'vitest'

test('AB optimize', () => {
    let c = new AB_OptimizeHeader('2');
    let option = c.getOption();

    expect(option.getHeaderCopy()).toMatchInlineSnapshot(`"BBB"`);

    c = new AB_OptimizeHeader('3');
    option = c.getOption();

    expect(option.getHeaderCopy()).toMatchInlineSnapshot(`"CCC"`);

    c = new AB_OptimizeHeader('1');
    option = c.getOption();
    expect(option.getHeaderCopy()).toMatchInlineSnapshot(`"AAA"`);
})