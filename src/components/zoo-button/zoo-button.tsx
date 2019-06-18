import { Component, Prop, h } from '@stencil/core';

@Component({
	tag: 'zoo-button',
	styleUrl: 'zoo-button.scss',
	shadow: true
})
export class ZooButton {
	@Prop({ reflect: true }) type: string = 'cold'; //'hot'
	@Prop({ reflect: true }) size: string = 'small'; //'medium', 'big',
	@Prop({ reflect: true }) disabled: boolean = false;

	getClasses() {
		return `${this.type} ${this.size} zoo-btn`;
	}

	render() {
		return <div class='box'>
			<button disabled={this.disabled ? true : null} class={this.getClasses()} type='button'>
				<slot></slot>
			</button>
		</div>
	}
}