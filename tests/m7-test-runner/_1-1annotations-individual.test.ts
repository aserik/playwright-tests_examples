import {test, expect} from '@playwright/test';

//test.skip(); unconditional skip

test.skip ('will not run', async ({page}) => {
    console.log('This should not be printed');
});

//conditional skip

 test ('Skip (un)conditionally', async ({page, browserName}) => {
    test.skip(browserName === 'chromium', 'Chromium is not supported');
    test.skip(await page.getByTestId('someId').count() === 0, 'Element with test id "someId" is not present');
 });


test.fixme('Fixme', async () => {
});


test('will fail', async () => {
    test.fail();     // the test should fail, but it will not fail the test suite
    expect(2).toEqual(3);
});