import { Component, Prop, h, Element, State } from '@stencil/core';

@Component({
	tag: 'zoo-checkbox',
	styleUrl: 'zoo-checkbox.scss',
	shadow: true
})
export class ZooCheckbox {
	@Prop({ reflect: true }) label: string = null;
	@Prop({ reflect: true }) valid: boolean = true;
	@Prop({ reflect: true }) disabled: boolean = false;
	@Prop({ reflect: true }) highlighted: boolean = false;
	@State() clicked = false;
	@State() focused = false;
	slottedInput: HTMLElement;

	@Element() host: HTMLElement;

	handleClick(event) {
		if (this.disabled) {
			event.preventDefault();
			return;
		}
		if (event.target !== this.slottedInput && this.slottedInput){
			this.slottedInput.click();
		} else {
			this.clicked = !this.clicked;
		}
	}

	componentWillLoad() {
		let slotted = this.host.children;
		const input = (Array.from(slotted).find(el => el.nodeName === 'INPUT') as HTMLElement);
		this.slottedInput = input;
	}

	componentDidLoad() {
		if (!this.slottedInput) {
			throw new Error('No slotted input provided for zoo-checkbox');
		} else {
			this.slottedInput.addEventListener('focus', () => {
				this.focused = true;
			});
			this.slottedInput.addEventListener('blur', () => {
				this.focused = false;
			});
			this.slottedInput.addEventListener('keypress', e => {
				if (e.keyCode === 13) {
					this.slottedInput.click();
				}
			});
		}
	};

	getClasses() {
		let classes = '';
		if (this.clicked) classes += ' clicked';
		if (this.highlighted) classes += ' highlighted';
		if (this.focused) classes += ' focused';
		if (this.disabled) classes += ' disabled';
		if (!this.valid) classes += ' error';
		return `box ${classes}`;
	}

	render() {
		return (
		<div class={this.getClasses()} onClick={e => this.handleClick(e)}>
			<label class='input-slot'>
				<slot name='checkbox'></slot>
				<span class='input-label'>{this.label}</span>
			</label>
		</div>
		)
	}
}