
import { newE2EPage } from '@stencil/core/testing';

describe('zoo-collapsable-list', () => {
	it('renders', async () => {
		const page = await newE2EPage();

		await page.setContent('<zoo-collapsable-list></zoo-collapsable-list>');
		const element = await page.find('zoo-collapsable-list');
		expect(element).toHaveClass('hydrated');
	});
});