import { newE2EPage } from '@stencil/core/testing';

describe('zoo-navigation', () => {
	it('renders', async () => {
		const page = await newE2EPage();

		await page.setContent('<zoo-navigation></zoo-navigation>');
		const element = await page.find('zoo-navigation');
		expect(element).toHaveClass('hydrated');
	});
});