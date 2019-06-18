
import { newE2EPage } from '@stencil/core/testing';

describe('zoo-checkbox', () => {
	it('renders', async () => {
		const page = await newE2EPage();

		await page.setContent('<zoo-checkbox></zoo-checkbox>');
		const element = await page.find('zoo-checkbox');
		expect(element).toHaveClass('hydrated');
	});
});