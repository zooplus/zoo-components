import { Component, Prop, h, State, Element } from '@stencil/core';

@Component({
	tag: 'zoo-radio',
	styleUrl: 'zoo-radio.scss',
	shadow: true
})
export class ZooRadio {
	@Prop() valid = true;
	@Prop() errormsg = '';
	@Prop() text = '';
	@State() focused = false;
	@Element() host: HTMLElement;
	slottedInput: HTMLElement;

	componentWillLoad() {
		let slotted = this.host.children;
		const input = (Array.from(slotted).find(el => el.nodeName === 'INPUT') as HTMLElement);
		this.slottedInput = input;
	}

	componentDidLoad() {
		if (!this.slottedInput) {
			throw new Error('No slotted input provided for zoo-radio');
		} else {
			this.slottedInput.addEventListener('focus', () => {
				this.slottedInput.classList.add('focused');
			});
			this.slottedInput.addEventListener('blur', () => {
				this.slottedInput.classList.remove('focused');
			});
		}
	}

	getInfoSection() {
		if (this.text) {
			return <zoo-input-info class="input-info" valid={this.valid} errormsg={this.errormsg} text={this.text}></zoo-input-info>
		}
	}

	render() {
		return ([
			<span class="template-slot">
				<slot></slot>
			</span>,
			this.getInfoSection()
		])
	}
}