
import { newE2EPage } from '@stencil/core/testing';

describe('zoo-header', () => {
	it('renders', async () => {
		const page = await newE2EPage();

		await page.setContent('<zoo-header></zoo-header>');
		const element = await page.find('zoo-header');
		expect(element).toHaveClass('hydrated');
	});
});