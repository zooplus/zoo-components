import { Component, Prop, h } from '@stencil/core';

@Component({
	tag: 'zoo-footer',
	styleUrl: 'zoo-footer.scss',
	shadow: true
})
export class ZooFooter {
	@Prop({ reflect: true }) links = [];
	@Prop({ reflect: true }) copyright = '';

	render() {
		return ([
			<div class="footer-links">
				<div class="list-holder">
					<ul>
						{this.links.map((link) => 
							<li>
								<zoo-link href={link.href} target={link.target} type={link.type}
								disabled={link.disabled} text={link.text}>
								</zoo-link>
							</li>
						)}
					</ul>
				</div>
			</div>,
			<div class="footer-copyright">
				{this.copyright}
			</div>
		])
	}
}