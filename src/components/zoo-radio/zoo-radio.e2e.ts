import { newE2EPage } from '@stencil/core/testing';

describe('zoo-radio', () => {
	it('renders', async () => {
		const page = await newE2EPage();

		await page.setContent('<zoo-radio></zoo-radio>');
		const element = await page.find('zoo-radio');
		expect(element).toHaveClass('hydrated');
	});
});