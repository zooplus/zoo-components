import { Component, Prop, h } from '@stencil/core';

@Component({
	tag: 'zoo-input-info',
	styleUrl: 'zoo-input-info.scss',
	shadow: true
})
export class ZooInputInfo {
	@Prop() valid = true;
	@Prop() errormsg = '';
	@Prop() text = '';

	getErrorPart() {
		if (!this.valid) {
			return <div class="error-holder">
				<div class="svg-wrapper"><svg class="exclamation-circle" width="22" height="22" viewBox="0 0 24 24"><path d="M12 15.75a1.125 1.125 0 1 1 .001 2.25A1.125 1.125 0 0 1 12 15.75H12zm.75-2.25a.75.75 0 1 1-1.5 0V5.25a.75.75 0 1 1 1.5 0v8.25zm7.205-9.455l.53-.53c4.687 4.686 4.687 12.284 0 16.97-4.686 4.687-12.284 4.687-16.97 0-4.687-4.686-4.687-12.284 0-16.97 4.686-4.687 12.284-4.687 16.97 0l-.53.53zm0 0l-.53.53c-4.1-4.1-10.75-4.1-14.85 0s-4.1 10.75 0 14.85 10.75 4.1 14.85 0 4.1-10.75 0-14.85l.53-.53z"/></svg></div>
				<div class="error-label">{this.errormsg}</div>
			</div>
		}
	}

	getInfoPart() {
		return <div class="info">
			<div class="svg-wrapper"><svg class="info-rounded-circle" width="22" height="22" viewBox="0 0 24 24"><path d="M14.25 15.75a.75.75 0 1 1 0 1.5h-.75A2.25 2.25 0 0 1 11.25 15v-3.75h-.75a.75.75 0 0 1 0-1.5h.75a1.5 1.5 0 0 1 1.5 1.5V15c0 .414.336.75.75.75h.75zM11.625 6a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm8.86-2.485c4.687 4.686 4.687 12.284 0 16.97-4.686 4.687-12.284 4.687-16.97 0-4.687-4.686-4.687-12.284 0-16.97 4.686-4.687 12.284-4.687 16.97 0zm-1.06 1.06c-4.1-4.1-10.75-4.1-14.85 0s-4.1 10.75 0 14.85 10.75 4.1 14.85 0 4.1-10.75 0-14.85z"/></svg></div>
			<span class="info-text">{this.text}</span>
		</div>
	}

	render() {
		return ([this.getErrorPart(), this.getInfoPart()])
	}
}