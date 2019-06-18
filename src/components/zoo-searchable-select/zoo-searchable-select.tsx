import { Component, Prop, h, State, Element, Watch } from '@stencil/core';

@Component({
	tag: 'zoo-searchable-select',
	styleUrl: 'zoo-searchable-select.scss',
	shadow: true
})
export class ZooSearchableSelect {
	@Prop({ reflect: true }) labelposition = 'top';
	@Prop({ reflect: true }) label = '';
	@Prop({ reflect: true }) linktext = '';
	@Prop({ reflect: true }) linkhref = '';
	@Prop({ reflect: true }) linktarget = 'about:blank';
	@Prop({ reflect: true }) errormsg = '';
	@Prop({ reflect: true }) infotext = '';
	@Prop({ reflect: true }) placeholder = '';
	@Prop({ reflect: true }) valid = true;
	@Prop({ reflect: true }) loading = false;

	@Element() host: HTMLElement;
	@State() multiple: boolean;
	@State() valueSelected: boolean;
	slottedSelect: HTMLSelectElement;
	searchableInput: HTMLInputElement;
	isMobile: boolean;
	tooltipText: string;
	options: HTMLOptionsCollection;

	@Watch('valid')
	changeInputClass(newValue: boolean, oldValue: boolean) {
		if (newValue !== oldValue) {
			if (newValue) {
				this.slottedSelect.classList.add('error');
			} else if (!newValue) {
				this.slottedSelect.classList.remove('error');
			}
		}
	}

	connectedCallback() {
		const index = navigator.appVersion.indexOf("Mobile");
		if(index > -1) {
			this.isMobile = true;
		}
	}

	handleCrossClick() {
		this.slottedSelect.value = null;
		this.slottedSelect.dispatchEvent(new Event("change"));
	}

	componentWillLoad() {
		let slotted = this.host.children;
		const select = (Array.from(slotted).find(el => el.nodeName === 'SELECT') as any);
		this.slottedSelect = select;
	}

	componentDidLoad() {
		if (!this.slottedSelect) {
			throw new Error('No slotted select provided for zoo-searchable-select');
		} else {
			this.options = this.slottedSelect.options;
			if (!this.options || this.options.length < 1) {
				this.tooltipText = null;
			}
			this.slottedSelect.addEventListener('blur', () => {
				this.hideSelectOptions();
			});
			if (this.slottedSelect.multiple === true) {
				this.multiple = true;
			}
			this.slottedSelect.addEventListener('change', () => this.handleOptionChange());
			this.slottedSelect.addEventListener('keydown', e => this.handleOptionKeydown(e));

			if (this.slottedSelect.disabled) {
				this.searchableInput.disabled = true;
			}

			this.slottedSelect.classList.add('searchable-zoo-select');
			this.slottedSelect.addEventListener('change', e => {
				const target: any = e.target;
				this.valueSelected = target.value ? true : false;
			});
			this.hideSelectOptions();

			this.searchableInput.addEventListener('focus', () => {
				this.slottedSelect.classList.remove('hidden');
				this.openSearchableSelect();
			});
			this.searchableInput.addEventListener('blur', event => {
				if (event.relatedTarget !== this.slottedSelect) {
					this.hideSelectOptions();
				}
			});
		}
	}

	handleOptionChange() {
		let inputValString = '';
		for (const selectedOpts of Array.from(this.slottedSelect.selectedOptions)) {
			inputValString += selectedOpts.text + ', \n';
		}
		inputValString = inputValString.substr(0, inputValString.length - 3);
		this.tooltipText = inputValString;
		this.searchableInput.placeholder = inputValString && inputValString.length > 0 ? inputValString : this.placeholder;
		for (const option of Array.from(this.options)) {
			option.style.display = 'block';
		}
		if (!this.multiple) this.hideSelectOptions();
	}

	handleOptionKeydown(e) {
		if (e.keyCode && e.keyCode === 13) {
			this.handleOptionChange();
		}
	}

	hideSelectOptions() {
		this.slottedSelect.classList.add('hidden');
		this.searchableInput.value = null;
	}

	openSearchableSelect() {
		if (!this.multiple) {
			this.slottedSelect.size = 4;
		}
	}

	handleSearchChange() {
		const inputVal = this.searchableInput.value.toLowerCase();
		for (const option of Array.from(this.options)) {
			if (option.text.toLowerCase().indexOf(inputVal) > -1) option.style.display = 'block';
			else option.style.display = 'none';
		}
	}

	getMobileVersion() {
		return <zoo-select labelposition={this.labelposition} linktext={this.linktext} linkhref={this.linkhref} linktarget={this.linktarget}
		label={this.label} errormsg={this.errormsg} infotext={this.infotext} valid={this.valid}>
			<slot name="select" slot="select"></slot>
		</zoo-select>
	}

	getPreloader() {
		return this.loading ? <zoo-preloader slot="input"></zoo-preloader> : ''
	}

	getDesktopVersion() {
		return ([
			<zoo-input infotext={this.infotext} valid={this.valid} onClick={() => this.openSearchableSelect()}
				label={this.label} errormsg={this.errormsg}
				labelposition={this.labelposition} linktext={this.linktext} linkhref={this.linkhref} linktarget={this.linktarget}>
				<input slot="input" type="text" placeholder={this.placeholder} onInput={() => this.handleSearchChange()} ref={(el) => this.searchableInput = el as HTMLInputElement}/>
				<div slot="input" class="close" onClick={() => this.handleCrossClick()}>
					{this.valueSelected
						? <svg width="14" height="14" viewBox="0 0 24 24"><path d="M10.94 12L.22 1.28A.75.75 0 0 1 1.28.22L12 10.94 22.72.22a.75.75 0 0 1 1.06 1.06L13.06 12l10.72 10.72a.75.75 0 0 1-1.06 1.06L12 13.06 1.28 23.78a.75.75 0 0 1-1.06-1.06L10.94 12z"/></svg>
						: '' 
					}
				</div>
				{this.getPreloader()}
			</zoo-input>,
			<slot name="select"></slot>
		])
	}

	// todo add tooltip
	render() {
		return <div class="box">
			{this.isMobile
				? this.getMobileVersion()
				: this.getDesktopVersion()
			}
		</div>
	}
}