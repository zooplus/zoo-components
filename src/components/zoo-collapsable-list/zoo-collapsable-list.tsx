import { Component, Prop, h, State } from '@stencil/core';

@Component({
	tag: 'zoo-collapsable-list',
	styleUrl: 'zoo-collapsable-list.scss',
	shadow: true
})
export class ZooCollapsableList {
	@Prop() items: Array<any> = [];
	@Prop() highlighted = true;
	@State() _items;

	componentDidLoad() {
		this._items = this.items.slice();
	}

	handleItemHeaderClick(idx) {
		// todo think of a more reactive way to do this
		this._items = this.items.slice();
		if (this._items[idx].active) {
			this._items[idx].active = false;
		} else {
			for (const item of this._items) {
				item.active = false;
			}
			this._items[idx].active = true;
		}
	}

	getItemClasses(idx) {
		return `item ${this._items && this._items[idx].active ? 'active': ''}`;
	}

	render() {
		return <div class="box">
			<ul>
				{this.items.map((item, idx) => 
					<li class={this.getItemClasses(idx)}> 
						<span class="header" onClick={() => this.handleItemHeaderClick(idx)}>
							{item.header}
							<svg width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
						</span>
						<slot name={'item' + idx}></slot>
					</li>
				)}
			</ul>
		</div>
	}
}