import { Component, h } from '@stencil/core';

@Component({
	tag: 'zoo-preloader',
	styleUrl: 'zoo-preloader.scss',
	shadow: true
})
export class ZooPreloader {

	render() {
		return <div class="bounce">
			<div class="bounce1"></div>
			<div class="bounce2"></div>
			<div class="bounce3"></div>
		</div>
	}
}