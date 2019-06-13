import { Component, Prop, h, Element, Method, State } from '@stencil/core';

@Component({
	tag: 'zoo-modal',
	styleUrl: 'zoo-modal.scss',
	shadow: true
})
export class ZooModal {
	@Prop() text = '';
	@Element() host: HTMLElement;
	@State() timeoutVar;
	@State() hidden = false;
	modalRoot;

	@Method()
	async openModal() {
		this.host.style.display = 'block';
	}
	@Method()
	async closeModal() {
		if (this.timeoutVar) return;
		this.hidden = !this.hidden;
		this.timeoutVar = setTimeout(() => {
			this.host.style.display = 'none';
			this.host.dispatchEvent(new Event("modalClosed"));
			this.hidden = !this.hidden;
			this.timeoutVar = undefined;
		}, 300);
	}

	handleModalClick(e) {
		if (e.target == this.modalRoot) {
			this.closeModal();
		}
	}

	getBoxClasses() {
		return `box ${this.hidden ? 'hide':'show'}`;
	}

	render() {
		return <div class={this.getBoxClasses()} onClick={e => this.handleModalClick(e)} ref={(el) => this.modalRoot = el as HTMLInputElement}>
			<div class="dialog-content">
				<div class="heading">
					<h2>{this.text}</h2>
					<div class="close" onClick={() => this.closeModal()}>
						<svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
					</div>
				</div>
				<div class="content">
					<slot></slot>
				</div>
			</div>
		</div>
	}
}