import { Component, Prop, h } from '@stencil/core';

@Component({
	tag: 'zoo-feedback',
	styleUrl: 'zoo-feedback.scss',
	shadow: true
})
export class ZooFeedback {

	@Prop() type = 'info'; // error, success
	@Prop() text = '';

	getSvg() {
		if (this.type === 'error') {
			return <svg width="30" height="30" viewBox="0 0 24 24"><path d="M20.485 3.515c4.687 4.686 4.687 12.284 0 16.97-4.686 4.687-12.284 4.687-16.97 0-4.687-4.686-4.687-12.284 0-16.97 4.686-4.687 12.284-4.687 16.97 0zm-1.06 1.06c-4.1-4.1-10.75-4.1-14.85 0s-4.1 10.75 0 14.85 10.75 4.1 14.85 0 4.1-10.75 0-14.85zm-.705 13.092a.75.75 0 1 1-1.344.666 6.002 6.002 0 0 0-10.756 0 .75.75 0 1 1-1.344-.666 7.502 7.502 0 0 1 13.444 0zM9.375 9a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0zm7.5 0a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0z"/></svg>;
		} else if (this.type === 'info') {
			return <svg width="30" height="30" viewBox="0 0 24 24"><path d="M14.25 15.75a.75.75 0 1 1 0 1.5h-.75A2.25 2.25 0 0 1 11.25 15v-3.75h-.75a.75.75 0 0 1 0-1.5h.75a1.5 1.5 0 0 1 1.5 1.5V15c0 .414.336.75.75.75h.75zM11.625 6a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm8.86-2.485c4.687 4.686 4.687 12.284 0 16.97-4.686 4.687-12.284 4.687-16.97 0-4.687-4.686-4.687-12.284 0-16.97 4.686-4.687 12.284-4.687 16.97 0zm-1.06 1.06c-4.1-4.1-10.75-4.1-14.85 0s-4.1 10.75 0 14.85 10.75 4.1 14.85 0 4.1-10.75 0-14.85z"/></svg>;
		} else if (this.type === 'success') {
			return <svg width="30" height="30" viewBox="0 0 24 24"><path d="M20.485 3.515c4.687 4.686 4.687 12.284 0 16.97-4.686 4.687-12.284 4.687-16.97 0-4.687-4.686-4.687-12.284 0-16.97 4.686-4.687 12.284-4.687 16.97 0zm-1.06 1.06c-4.1-4.1-10.75-4.1-14.85 0s-4.1 10.75 0 14.85 10.75 4.1 14.85 0 4.1-10.75 0-14.85zM9.375 9a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0zm7.5 0a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0zm.501 5.667a.75.75 0 1 1 1.344.666 7.502 7.502 0 0 1-13.444 0 .75.75 0 0 1 1.344-.666 6.002 6.002 0 0 0 10.756 0z"/></svg>;
		}
	}

	getClasses() {
		return `box ${this.type}`;
	}

	render() {
		return <div class={this.getClasses()}>
			{this.getSvg()}
			<span class="text">{this.text}</span>
		</div>
	}
}
