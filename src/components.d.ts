/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface ZooButton {
    'disabled': boolean;
    'size': string;
    'type': string;
  }
  interface ZooCheckbox {
    'disabled': boolean;
    'highlighted': boolean;
    'label': string;
    'valid': boolean;
  }
  interface ZooCollapsableList {
    'highlighted': boolean;
    'items': Array<any>;
  }
  interface ZooCollapsableListItem {}
  interface ZooFeedback {
    'text': string;
    'type': string;
  }
  interface ZooFooter {
    'copyright': string;
    'links': any[];
  }
  interface ZooHeader {
    'headertext': string;
    'imgalt': string;
    'imgsrc': string;
  }
  interface ZooInput {
    'errormsg': string;
    'infotext': string;
    'label': string;
    'labelposition': string;
    'linkhref': string;
    'linktarget': string;
    'linktext': string;
    'nopadding': boolean;
    'valid': boolean;
  }
  interface ZooInputInfo {
    'errormsg': string;
    'text': string;
    'valid': boolean;
  }
  interface ZooInputLabel {
    'text': string;
    'valid': boolean;
  }
  interface ZooLink {
    'disabled': boolean;
    'href': string;
    'target': string;
    'text': string;
    'textalign': string;
    'type': string;
  }
  interface ZooModal {
    'closeModal': () => Promise<void>;
    'openModal': () => Promise<void>;
    'text': string;
  }
  interface ZooNavigation {}
  interface ZooPreloader {}
  interface ZooRadio {
    'errormsg': string;
    'text': string;
    'valid': boolean;
  }
  interface ZooSearchableSelect {
    'errormsg': string;
    'infotext': string;
    'label': string;
    'labelposition': string;
    'linkhref': string;
    'linktarget': string;
    'linktext': string;
    'loading': boolean;
    'placeholder': string;
    'valid': boolean;
  }
  interface ZooSelect {
    'errormsg': string;
    'infotext': string;
    'label': string;
    'labelposition': string;
    'linkhref': string;
    'linktarget': string;
    'linktext': string;
    'loading': boolean;
    'showicons': boolean;
    'valid': boolean;
  }
}

declare global {


  interface HTMLZooButtonElement extends Components.ZooButton, HTMLStencilElement {}
  var HTMLZooButtonElement: {
    prototype: HTMLZooButtonElement;
    new (): HTMLZooButtonElement;
  };

  interface HTMLZooCheckboxElement extends Components.ZooCheckbox, HTMLStencilElement {}
  var HTMLZooCheckboxElement: {
    prototype: HTMLZooCheckboxElement;
    new (): HTMLZooCheckboxElement;
  };

  interface HTMLZooCollapsableListElement extends Components.ZooCollapsableList, HTMLStencilElement {}
  var HTMLZooCollapsableListElement: {
    prototype: HTMLZooCollapsableListElement;
    new (): HTMLZooCollapsableListElement;
  };

  interface HTMLZooCollapsableListItemElement extends Components.ZooCollapsableListItem, HTMLStencilElement {}
  var HTMLZooCollapsableListItemElement: {
    prototype: HTMLZooCollapsableListItemElement;
    new (): HTMLZooCollapsableListItemElement;
  };

  interface HTMLZooFeedbackElement extends Components.ZooFeedback, HTMLStencilElement {}
  var HTMLZooFeedbackElement: {
    prototype: HTMLZooFeedbackElement;
    new (): HTMLZooFeedbackElement;
  };

  interface HTMLZooFooterElement extends Components.ZooFooter, HTMLStencilElement {}
  var HTMLZooFooterElement: {
    prototype: HTMLZooFooterElement;
    new (): HTMLZooFooterElement;
  };

  interface HTMLZooHeaderElement extends Components.ZooHeader, HTMLStencilElement {}
  var HTMLZooHeaderElement: {
    prototype: HTMLZooHeaderElement;
    new (): HTMLZooHeaderElement;
  };

  interface HTMLZooInputElement extends Components.ZooInput, HTMLStencilElement {}
  var HTMLZooInputElement: {
    prototype: HTMLZooInputElement;
    new (): HTMLZooInputElement;
  };

  interface HTMLZooInputInfoElement extends Components.ZooInputInfo, HTMLStencilElement {}
  var HTMLZooInputInfoElement: {
    prototype: HTMLZooInputInfoElement;
    new (): HTMLZooInputInfoElement;
  };

  interface HTMLZooInputLabelElement extends Components.ZooInputLabel, HTMLStencilElement {}
  var HTMLZooInputLabelElement: {
    prototype: HTMLZooInputLabelElement;
    new (): HTMLZooInputLabelElement;
  };

  interface HTMLZooLinkElement extends Components.ZooLink, HTMLStencilElement {}
  var HTMLZooLinkElement: {
    prototype: HTMLZooLinkElement;
    new (): HTMLZooLinkElement;
  };

  interface HTMLZooModalElement extends Components.ZooModal, HTMLStencilElement {}
  var HTMLZooModalElement: {
    prototype: HTMLZooModalElement;
    new (): HTMLZooModalElement;
  };

  interface HTMLZooNavigationElement extends Components.ZooNavigation, HTMLStencilElement {}
  var HTMLZooNavigationElement: {
    prototype: HTMLZooNavigationElement;
    new (): HTMLZooNavigationElement;
  };

  interface HTMLZooPreloaderElement extends Components.ZooPreloader, HTMLStencilElement {}
  var HTMLZooPreloaderElement: {
    prototype: HTMLZooPreloaderElement;
    new (): HTMLZooPreloaderElement;
  };

  interface HTMLZooRadioElement extends Components.ZooRadio, HTMLStencilElement {}
  var HTMLZooRadioElement: {
    prototype: HTMLZooRadioElement;
    new (): HTMLZooRadioElement;
  };

  interface HTMLZooSearchableSelectElement extends Components.ZooSearchableSelect, HTMLStencilElement {}
  var HTMLZooSearchableSelectElement: {
    prototype: HTMLZooSearchableSelectElement;
    new (): HTMLZooSearchableSelectElement;
  };

  interface HTMLZooSelectElement extends Components.ZooSelect, HTMLStencilElement {}
  var HTMLZooSelectElement: {
    prototype: HTMLZooSelectElement;
    new (): HTMLZooSelectElement;
  };
  interface HTMLElementTagNameMap {
    'zoo-button': HTMLZooButtonElement;
    'zoo-checkbox': HTMLZooCheckboxElement;
    'zoo-collapsable-list': HTMLZooCollapsableListElement;
    'zoo-collapsable-list-item': HTMLZooCollapsableListItemElement;
    'zoo-feedback': HTMLZooFeedbackElement;
    'zoo-footer': HTMLZooFooterElement;
    'zoo-header': HTMLZooHeaderElement;
    'zoo-input': HTMLZooInputElement;
    'zoo-input-info': HTMLZooInputInfoElement;
    'zoo-input-label': HTMLZooInputLabelElement;
    'zoo-link': HTMLZooLinkElement;
    'zoo-modal': HTMLZooModalElement;
    'zoo-navigation': HTMLZooNavigationElement;
    'zoo-preloader': HTMLZooPreloaderElement;
    'zoo-radio': HTMLZooRadioElement;
    'zoo-searchable-select': HTMLZooSearchableSelectElement;
    'zoo-select': HTMLZooSelectElement;
  }
}

declare namespace LocalJSX {
  interface ZooButton extends JSXBase.HTMLAttributes<HTMLZooButtonElement> {
    'disabled'?: boolean;
    'size'?: string;
    'type'?: string;
  }
  interface ZooCheckbox extends JSXBase.HTMLAttributes<HTMLZooCheckboxElement> {
    'disabled'?: boolean;
    'highlighted'?: boolean;
    'label'?: string;
    'valid'?: boolean;
  }
  interface ZooCollapsableList extends JSXBase.HTMLAttributes<HTMLZooCollapsableListElement> {
    'highlighted'?: boolean;
    'items'?: Array<any>;
  }
  interface ZooCollapsableListItem extends JSXBase.HTMLAttributes<HTMLZooCollapsableListItemElement> {}
  interface ZooFeedback extends JSXBase.HTMLAttributes<HTMLZooFeedbackElement> {
    'text'?: string;
    'type'?: string;
  }
  interface ZooFooter extends JSXBase.HTMLAttributes<HTMLZooFooterElement> {
    'copyright'?: string;
    'links'?: any[];
  }
  interface ZooHeader extends JSXBase.HTMLAttributes<HTMLZooHeaderElement> {
    'headertext'?: string;
    'imgalt'?: string;
    'imgsrc'?: string;
  }
  interface ZooInput extends JSXBase.HTMLAttributes<HTMLZooInputElement> {
    'errormsg'?: string;
    'infotext'?: string;
    'label'?: string;
    'labelposition'?: string;
    'linkhref'?: string;
    'linktarget'?: string;
    'linktext'?: string;
    'nopadding'?: boolean;
    'valid'?: boolean;
  }
  interface ZooInputInfo extends JSXBase.HTMLAttributes<HTMLZooInputInfoElement> {
    'errormsg'?: string;
    'text'?: string;
    'valid'?: boolean;
  }
  interface ZooInputLabel extends JSXBase.HTMLAttributes<HTMLZooInputLabelElement> {
    'text'?: string;
    'valid'?: boolean;
  }
  interface ZooLink extends JSXBase.HTMLAttributes<HTMLZooLinkElement> {
    'disabled'?: boolean;
    'href'?: string;
    'target'?: string;
    'text'?: string;
    'textalign'?: string;
    'type'?: string;
  }
  interface ZooModal extends JSXBase.HTMLAttributes<HTMLZooModalElement> {
    'text'?: string;
  }
  interface ZooNavigation extends JSXBase.HTMLAttributes<HTMLZooNavigationElement> {}
  interface ZooPreloader extends JSXBase.HTMLAttributes<HTMLZooPreloaderElement> {}
  interface ZooRadio extends JSXBase.HTMLAttributes<HTMLZooRadioElement> {
    'errormsg'?: string;
    'text'?: string;
    'valid'?: boolean;
  }
  interface ZooSearchableSelect extends JSXBase.HTMLAttributes<HTMLZooSearchableSelectElement> {
    'errormsg'?: string;
    'infotext'?: string;
    'label'?: string;
    'labelposition'?: string;
    'linkhref'?: string;
    'linktarget'?: string;
    'linktext'?: string;
    'loading'?: boolean;
    'placeholder'?: string;
    'valid'?: boolean;
  }
  interface ZooSelect extends JSXBase.HTMLAttributes<HTMLZooSelectElement> {
    'errormsg'?: string;
    'infotext'?: string;
    'label'?: string;
    'labelposition'?: string;
    'linkhref'?: string;
    'linktarget'?: string;
    'linktext'?: string;
    'loading'?: boolean;
    'showicons'?: boolean;
    'valid'?: boolean;
  }

  interface IntrinsicElements {
    'zoo-button': ZooButton;
    'zoo-checkbox': ZooCheckbox;
    'zoo-collapsable-list': ZooCollapsableList;
    'zoo-collapsable-list-item': ZooCollapsableListItem;
    'zoo-feedback': ZooFeedback;
    'zoo-footer': ZooFooter;
    'zoo-header': ZooHeader;
    'zoo-input': ZooInput;
    'zoo-input-info': ZooInputInfo;
    'zoo-input-label': ZooInputLabel;
    'zoo-link': ZooLink;
    'zoo-modal': ZooModal;
    'zoo-navigation': ZooNavigation;
    'zoo-preloader': ZooPreloader;
    'zoo-radio': ZooRadio;
    'zoo-searchable-select': ZooSearchableSelect;
    'zoo-select': ZooSelect;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


