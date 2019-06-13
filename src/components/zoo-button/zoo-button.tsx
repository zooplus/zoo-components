import { Component, Prop, h } from '@stencil/core';

@Component({
	tag: 'zoo-button',
	styleUrl: 'zoo-button.scss',
	shadow: true
})
export class ZooButton {
	@Prop() type = "cold"; //'hot'
	@Prop() size = "small"; //'medium', 'big',
	@Prop() disabled = false;

	getClasses() {
		return `${this.type} ${this.size} zoo-btn`;
	}

	render() {
		return <div class="box">
			<button disabled={this.disabled ? true : null} class={this.getClasses()} type="button">
				<slot></slot>
			</button>
		</div>
	}
}