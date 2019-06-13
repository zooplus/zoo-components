

import { Component, Prop, h, Element, Watch, State } from '@stencil/core';

@Component({
	tag: 'zoo-select',
	styleUrl: 'zoo-select.scss',
	shadow: true
})
export class ZooSelect {

	@Prop() labelposition = 'top';
	@Prop() label = '';
	@Prop() linktext = '';
	@Prop() linkhref = '';
	@Prop() linktarget = 'about:blank';
	@Prop() errormsg = '';
	@Prop() infotext = '';
	@Prop() valid = true;
	@Prop() showicons = true;
	@Prop({ reflect: true }) loading = false;
	@Element() host: HTMLElement;
	@State() multiple: boolean;
	slottedSelect: HTMLSelectElement;
	@State() valueSelected: boolean;

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
				this.slottedSelect.classList.add('error');
			} else if (!newValue) {
				this.slottedSelect.classList.remove('error');
			}
		}
	}

	componentDidLoad() {
		let slotted = this.host.children;
		const select = (Array.from(slotted).find(el => el.nodeName === 'SELECT') as any);
		this.slottedSelect = select;
		if (select.multiple) {
			this.multiple = true;
		}
		select.addEventListener('change', e => this.valueSelected = e.target.value ? true : false);
		if (!this.valid) {
			this.slottedSelect.classList.add('error');
		}
	}

	getZooLink() {
		if (this.linkhref || this.linktext) {
			return <zoo-link class="input-link" href={this.linkhref} target={this.linktarget} type="grey" text={this.linktext} textalign="right">
			</zoo-link>
		}
	}

	getSvgClasses() {
		return `arrows ${this.valid ? '' : 'error'}`;
	}

	handleCrossClick() {
		this.slottedSelect.value = null;
		this.slottedSelect.dispatchEvent(new Event("change"));
	}

	renderIfNotMultiple() {
		if (!this.multiple) {
			return <svg class={this.getSvgClasses()} viewBox="0 0 24 24" width="16" height="16"><path d="M12 1.75L6.545 7.516a.75.75 0 1 1-1.09-1.03l5.47-5.78A1.499 1.499 0 0 1 13.06.69l5.485 5.793a.75.75 0 0 1-1.09 1.031L12 1.751zM6.545 16.486L12 22.249l5.455-5.764a.75.75 0 0 1 1.09 1.03l-5.47 5.78a1.499 1.499 0 0 1-2.135.014l-5.485-5.793a.75.75 0 0 1 1.09-1.031z"/></svg>
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
			<div class="input-slot">
				<slot name="select"></slot>
				{this.renderIfNotMultiple()}
				{this.loading
					? <zoo-preloader></zoo-preloader>
					: ''
				}
				{this.valueSelected
					? <div class="close" onClick={() => this.handleCrossClick()}>
						<svg width="14" height="14" viewBox="0 0 24 24"><path d="M10.94 12L.22 1.28A.75.75 0 0 1 1.28.22L12 10.94 22.72.22a.75.75 0 0 1 1.06 1.06L13.06 12l10.72 10.72a.75.75 0 0 1-1.06 1.06L12 13.06 1.28 23.78a.75.75 0 0 1-1.06-1.06L10.94 12z"/></svg>
					</div>
					: ''
				}
			</div>
			{this.infotext
				? <zoo-input-info class="input-info" valid={this.valid} errormsg={this.errormsg} text={this.infotext}></zoo-input-info>
				: null
			}
		</div>
	}
}