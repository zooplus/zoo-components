import { newE2EPage } from '@stencil/core/testing';
import { ZooButton } from './zoo-button';

describe('zoo-button', () => {
	it('Makes initial calls', async () => {
		const zooButton = new ZooButton();
		spyOn(zooButton, 'getClasses').and.callThrough();
		zooButton.render();
		expect(zooButton.getClasses).toHaveBeenCalled();
	});

	it('button classes defaults to cold and small when no type attribute specified', async () => {
		const page = await newE2EPage();
		await page.setContent('<zoo-button><span>Test</span></zoo-button>');
		await page.waitForChanges();

		const button = await page.find('zoo-button >>> button');
		expect(button).toHaveClasses(['small', 'cold', 'zoo-btn']);
	});

	it('sets attributes size, type and disabled', async () => {
		const page = await newE2EPage();
		await page.setContent('<zoo-button size="medium" type="hot" disabled><span>Test</span></zoo-button>');
		await page.waitForChanges();

		const button = await page.find('zoo-button >>> button');
		expect(button).toHaveClasses(['medium', 'hot', 'zoo-btn']);
		expect(button).toHaveAttribute('disabled');
	});

	it('reacts to attributes change', async () => {
		const page = await newE2EPage();
		await page.setContent('<zoo-button><span>Test</span></zoo-button>');
		await page.waitForChanges();

		const button = await page.find('zoo-button >>> button');
		expect(button).toHaveClasses(['small', 'cold', 'zoo-btn']);

		const element = await page.find('zoo-button');
		element.setAttribute('size', 'medium');
		element.setAttribute('type', 'hot');
		element.setAttribute('disabled', true);
		await page.waitForChanges();

		expect(button).toHaveClasses(['medium', 'hot', 'zoo-btn']);
		expect(button).toHaveAttribute('disabled');
	});

	it('renders unnamed slot', async () => {
		const page = await newE2EPage();
		const spanText = 'Test';
		await page.setContent(`<zoo-button><span>${spanText}</span></zoo-button>`);
		await page.waitForChanges();

		const span = await page.find('span');
		expect(span.innerHTML).toEqual(spanText);
	});

	it('renders multiple unnamed slots', async () => {
		const page = await newE2EPage();
		const spanText = 'Test';
		const spanText2 = 'Test2';
		await page.setContent(`<zoo-button><span class="span1">${spanText}</span><span class="span2">${spanText2}</span></zoo-button>`);
		await page.waitForChanges();

		const span1 = await page.find('.span1');
		expect(span1.innerHTML).toEqual(spanText);
		const span2 = await page.find('.span2');
		expect(span2.innerHTML).toEqual(spanText2);
	});
});