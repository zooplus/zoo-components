import { newE2EPage } from '@stencil/core/testing';

describe('zoo-input-info', () => {
	it('renders', async () => {
		const page = await newE2EPage();

		await page.setContent('<zoo-input-info></zoo-input-info>');
		const element = await page.find('zoo-input-info');
		expect(element).toHaveClass('hydrated');
	});
});