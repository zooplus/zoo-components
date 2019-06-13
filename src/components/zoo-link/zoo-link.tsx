import { Component, Prop, h } from '@stencil/core';

@Component({
	tag: 'zoo-link',
	styleUrl: 'zoo-link.scss',
	shadow: true
})
export class ZooLink {
	@Prop() href = "";
	@Prop() text = "";
	@Prop() target = "about:blank";
	@Prop() type = "standard";
	@Prop() disabled = false;
	@Prop() textalign = 'center';

	getClasses() {
		return `${this.type} ${this.disabled ? 'disabled':''}`;
	}

	getTextAlign() {
		return this.textalign
			? {'text-align': `${this.textalign}`}
			: {}
	}

	render() {
		return <div class="box">
			<a style={this.getTextAlign()} href={this.href} target={this.target} class={this.getClasses()}>
				<span>{this.text}</span>
				<div class="bottom-line"></div>
			</a>
		</div>
	}
}