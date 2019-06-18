import { newE2EPage } from '@stencil/core/testing';

describe('zoo-select', () => {
	it('renders', async () => {
		const page = await newE2EPage();

		await page.setContent('<zoo-select></zoo-select>');
		const element = await page.find('zoo-select');
		expect(element).toHaveClass('hydrated');
	});
});