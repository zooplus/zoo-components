
import { newE2EPage } from '@stencil/core/testing';

describe('zoo-footer', () => {
	it('renders', async () => {
		const page = await newE2EPage();

		await page.setContent('<zoo-footer></zoo-footer>');
		const element = await page.find('zoo-footer');
		expect(element).toHaveClass('hydrated');
	});
});