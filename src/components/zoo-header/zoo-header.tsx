import { Component, Prop, h } from '@stencil/core';

@Component({
	tag: 'zoo-header',
	styleUrl: 'zoo-header.scss',
	shadow: true
})
export class ZooHeader {
	@Prop() headertext = '';
	@Prop() imgsrc = '';
	@Prop() imgalt = '';

	getLogo() {
		if (this.imgsrc) {
			return <img class="app-logo" src={this.imgsrc} alt={this.imgalt}/>
		}
	}

	getHeaderText() {
		if (this.headertext) {
			return <span class="app-name">{this.headertext}</span>;
		}
	}

	render() {
		return <div class="box">
			{this.getLogo()}
			{this.getHeaderText()}
			<slot></slot>
		</div>
	}
}