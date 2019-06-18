
import { newE2EPage } from '@stencil/core/testing';

describe('zoo-input', () => {
	it('renders', async () => {
		const page = await newE2EPage();

		await page.setContent('<zoo-input></zoo-input>');
		const element = await page.find('zoo-input');
		expect(element).toHaveClass('hydrated');
	});
});