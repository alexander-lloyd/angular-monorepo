import { Component, Input } from '@angular/core';

/**
 * Button Type.
 */
export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary'
}

/**
 * Button Size.
 */
export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

@Component({
  selector: 'al-button',
  styleUrls: ['button.component.scss'],
  templateUrl: 'button.component.html'
})
export class ButtonComponent {

  @Input() public size: ButtonSize = ButtonSize.MEDIUM;
  @Input() public type: ButtonType = ButtonType.PRIMARY;
}
