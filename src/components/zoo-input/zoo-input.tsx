

import { Component, Prop, h, Element, Watch } from '@stencil/core';

@Component({
	tag: 'zoo-input',
	styleUrl: 'zoo-input.scss',
	shadow: true
})
export class ZooInput {

	@Prop() labelposition = 'top';
	@Prop() label = '';
	@Prop() linktext = '';
	@Prop() linkhref = '';
	@Prop() linktarget = 'about:blank';
	@Prop() errormsg = '';
	@Prop() infotext = '';
	@Prop() valid = true;
	@Prop() nopadding = false;
	slottedInput: HTMLElement;
	@Element() host: HTMLElement;

	getBoxClasses() {
		let classes = '';
		if (this.labelposition) classes += this.labelposition;
		if (!this.valid) classes += ' error';
		return `box ${classes}`;
	}

	@Watch('valid')
	changeInputClass(newValue: boolean, oldValue: boolean) {
		if (newValue !== oldValue) {
			if (newValue) {
				this.slottedInput.classList.add('error');
			} else if (!newValue) {
				this.slottedInput.classList.remove('error');
			}
		}
	}

	getInputSlotClasses() {
		return `input-slot ${this.nopadding ? 'no-padding': ''}`;
	}

	componentDidLoad() {
		let slotted = this.host.children;
		const input = (Array.from(slotted).find(el => el.nodeName === 'INPUT') as HTMLElement);
		this.slottedInput = input;
		if (!this.valid) {
			this.slottedInput.classList.add('error');
		}
	}

	getZooLink() {
		if (this.linkhref || this.linktext) {
			return <zoo-link class="input-link" href={this.linkhref} target={this.linktarget} type="grey" text={this.linktext} textalign="right">
			</zoo-link>
		}
	}

	render() {
		return <div class={this.getBoxClasses()}>
			<div class="top-row">
				{this.label
					? <zoo-input-label class="input-label" valid={this.valid} text={this.label}></zoo-input-label>
					: null
				}
				{this.getZooLink()}
			</div>
			<div class={this.getInputSlotClasses()}>
				<slot name="input"></slot>
				{this.valid
					? <slot name="inputicon"></slot>
					: <svg class="error-triangle" width="22" height="22" viewBox="0 0 24 24"><path d="M12 18a1.125 1.125 0 1 1 .001 2.25A1.125 1.125 0 0 1 12 18H12zm.75-2.25a.75.75 0 1 1-1.5 0v-7.5a.75.75 0 1 1 1.5 0v7.5zm1.544-14.32l9.473 19.297A2.271 2.271 0 0 1 21.728 24H2.272a2.271 2.271 0 0 1-2.04-3.272L9.707 1.429a2.556 2.556 0 0 1 4.588 0zm-2.76.178c-.21.103-.379.273-.482.482L1.58 21.39a.771.771 0 0 0 .693 1.111h19.456a.771.771 0 0 0 .693-1.112L12.948 2.091a1.056 1.056 0 0 0-1.414-.483z"/></svg>
				}
			</div>
			{this.infotext
				? <zoo-input-info class="input-info" valid={this.valid} errormsg={this.errormsg} text={this.infotext}></zoo-input-info>
				: null
			}
		</div>
	}
}