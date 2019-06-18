import { newE2EPage } from '@stencil/core/testing';

describe('zoo-link', () => {
	it('renders', async () => {
		const page = await newE2EPage();

		await page.setContent('<zoo-link></zoo-link>');
		const element = await page.find('zoo-link');
		expect(element).toHaveClass('hydrated');
	});
});