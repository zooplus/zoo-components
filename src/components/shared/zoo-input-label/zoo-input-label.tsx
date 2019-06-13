import { Component, Prop, h } from '@stencil/core';

@Component({
	tag: 'zoo-input-label',
	styleUrl: 'zoo-input-label.scss',
	shadow: true
})
export class ZooInputLabel {
	@Prop() text = '';
	@Prop() valid = true;

	getClasses() {
		return `label ${!this.valid ? 'error':''}`
	}

	getLabel() {
		return <div class={this.getClasses()}>
			<span>{this.text}</span>
		</div>
	}

	render() {
		return this.getLabel()
	}
}