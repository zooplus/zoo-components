import { newE2EPage } from '@stencil/core/testing';

describe('zoo-searchable-select', () => {
	it('renders', async () => {
		const page = await newE2EPage();

		await page.setContent('<zoo-searchable-select></zoo-searchable-select>');
		const element = await page.find('zoo-searchable-select');
		expect(element).toHaveClass('hydrated');
	});
});