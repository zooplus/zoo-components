
import { newE2EPage } from '@stencil/core/testing';

describe('zoo-feedback', () => {
	it('renders', async () => {
		const page = await newE2EPage();

		await page.setContent('<zoo-feedback></zoo-feedback>');
		const element = await page.find('zoo-feedback');
		expect(element).toHaveClass('hydrated');
	});
});