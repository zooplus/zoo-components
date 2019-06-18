import { newE2EPage } from '@stencil/core/testing';

describe('zoo-input-label', () => {
	it('renders', async () => {
		const page = await newE2EPage();

		await page.setContent('<zoo-input-label></zoo-input-label>');
		const element = await page.find('zoo-input-label');
		expect(element).toHaveClass('hydrated');
	});
});