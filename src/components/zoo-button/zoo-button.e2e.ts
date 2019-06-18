
import { newE2EPage } from '@stencil/core/testing';

describe('zoo-button', () => {
	it('renders', async () => {
		const page = await newE2EPage();

		await page.setContent('<zoo-button></zoo-button>');
		const element = await page.find('zoo-button');
		expect(element).toHaveClass('hydrated');
	});

	it('reacts to disabled attr', async () => {
		const page = await newE2EPage();

		await page.setContent('<zoo-button></zoo-button>');
		const element = await page.find('zoo-button');
		element.setAttribute('disabled', 'true');
		await page.waitForChanges();
		const button = await element.find('button');
		expect(element).toHaveAttribute('disabled');
		expect(element).toEqualAttribute('disabled', true);
		expect(button).toHaveAttribute('disabled');
		expect(button).toEqualAttribute('disabled', 'true');
	});
});