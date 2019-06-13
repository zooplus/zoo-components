import { Component, h } from '@stencil/core';

@Component({
	tag: 'zoo-navigation',
	styleUrl: 'zoo-navigation.scss',
	shadow: true
})
export class ZooNavigation {
	render() {
		return <div class="box"><slot></slot></div>
	}
}