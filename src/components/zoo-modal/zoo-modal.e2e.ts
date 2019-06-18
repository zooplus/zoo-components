import { newE2EPage } from '@stencil/core/testing';

describe('zoo-modal', () => {
	it('renders', async () => {
		const page = await newE2EPage();

		await page.setContent('<zoo-modal></zoo-modal>');
		const element = await page.find('zoo-modal');
		expect(element).toHaveClass('hydrated');
	});
});