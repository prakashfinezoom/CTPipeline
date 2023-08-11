import {test,expect} from "@playwright/test"
test.describe('Quiklyz Login', () => {
    test('Login', async ({ page}) => {
        await page.goto('https://sit.quiklyz.com/')
        await page.getByText('Bengaluru', { exact: true }).click()
        await page.getByRole('button', { name: 'Login  ' }).click()
        await page.getByRole('button', { name: 'Login', exact: true }).click()
        await page.getByRole('tabpanel', { name: 'Login' }).getByText('Enter Mobile Number').fill('8838672581')
        await page.getByRole('button', { name: 'Get OTP' }).click()
            for (let i = 1; i <= 6; i++) {
                await page.locator(`div:nth-child(${i}) > .form-control`).first().fill(`${i}`);
              }
            await page.getByRole('button', {name:'Login', exact:true}).click()
    });
});
    
