import { Component, h } from '@stencil/core';

@Component({
	tag: 'zoo-collapsable-list-item',
	styleUrl: 'zoo-collapsable-list-item.scss',
	shadow: true
})
export class ZooCollapsableListItem {
	render() {
		return <ul><li><slot></slot></li></ul>
	}
}