
import { newE2EPage } from '@stencil/core/testing';
import { ZooCheckbox } from './zoo-checkbox';

describe('zoo-checkbox', () => {
	it('Makes initial calls', async () => {
		const zooCheckbox = new ZooCheckbox();
		spyOn(zooCheckbox, 'getClasses').and.callThrough();
		zooCheckbox.render();
		expect(zooCheckbox.getClasses).toHaveBeenCalled();
	});

	it('checkbox classes defaults to box when no attributes specified', async () => {
		const page = await newE2EPage();
		await page.setContent('<zoo-checkbox><input slot="checkbox" type="checkbox"/></zoo-checkbox>');
		await page.waitForChanges();

		const box = await page.find('zoo-checkbox >>> div');
		expect(box).toHaveClasses(['box']);
	});

	it('renders span with label attribute value as innerHTML', async () => {
		const page = await newE2EPage();
		const label = 'label';
		await page.setContent(`<zoo-checkbox label="${label}"><input slot="checkbox" type="checkbox"/></zoo-checkbox>`);
		await page.waitForChanges();

		const span = await page.find('zoo-checkbox >>> span');
		expect(span.innerHTML).toEqual(label);
	});

	it('maps attributes to classes', async () => {
		const page = await newE2EPage();
		await page.setContent(`<zoo-checkbox disabled highlighted valid="false"><input slot="checkbox" type="checkbox"/></zoo-checkbox>`);
		await page.waitForChanges();

		const box = await page.find('zoo-checkbox >>> div');
		expect(box).toHaveClasses(['box', 'highlighted', 'disabled', 'error']);
	});

	it('reacts to click when not disabled', async () => {
		const page = await newE2EPage();
		await page.setContent(`<zoo-checkbox><input slot="checkbox" type="checkbox"/></zoo-checkbox>`);
		await page.waitForChanges();

		const box = await page.find('zoo-checkbox >>> div');
		await box.click();
		await page.waitForChanges();
		
		expect(box).toHaveClasses(['box', 'clicked']);
	});

	it('doesn\'t react to click when disabled', async () => {
		const page = await newE2EPage();
		await page.setContent(`<zoo-checkbox disabled><input slot="checkbox" type="checkbox"/></zoo-checkbox>`);
		await page.waitForChanges();

		const box = await page.find('zoo-checkbox >>> div');
		await box.click();
		await page.waitForChanges();

		expect(box).toHaveClasses(['box']);
	});

	it('adds classes when input is focused', async () => {
		const page = await newE2EPage();
		await page.setContent(`<zoo-checkbox><input slot="checkbox" type="checkbox"/></zoo-checkbox>`);
		await page.waitForChanges();

		const box = await page.find('zoo-checkbox >>> div');
		const input = await page.find('input');
		await input.focus();
		await page.waitForChanges();

		expect(box).toHaveClasses(['box', 'focused']);

		await box.focus();
		await page.waitForChanges();
		expect(box).toHaveClasses(['box']);
	});

	it('renders named slot', async () => {
		const page = await newE2EPage();
		await page.setContent(`<zoo-checkbox><input slot="checkbox" type="checkbox"/></zoo-checkbox>`);
		await page.waitForChanges();

		const checkbox = await page.find('zoo-checkbox');
		const input = checkbox.shadowRoot.querySelector('input');
		expect(input).toBeDefined();
	});
});