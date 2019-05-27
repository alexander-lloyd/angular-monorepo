import { storiesOf } from '@storybook/angular';

import { ButtonComponent } from './button.component';

storiesOf('Button', module)
  .add('Buttons', () => ({
    moduleMetadata: {
      declarations: [ButtonComponent]
    },
    template: `
<style>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  padding: 10px;
}
</style>

<div class="grid-container">
  <al-button [size]="'small'" [type]="'primary'">Hello World</al-button>
  <al-button [size]="'small'" [type]="'secondary'">Hello World</al-button>
  <al-button [size]="'small'" [type]="'tertiary'">Hello World</al-button>

  <al-button [size]="'medium'" [type]="'primary'">Hello World</al-button>
  <al-button [size]="'medium'" [type]="'secondary'">Hello World</al-button>
  <al-button [size]="'medium'" [type]="'tertiary'">Hello World</al-button>

  <al-button [size]="'large'" [type]="'primary'">Hello World</al-button>
  <al-button [size]="'large'" [type]="'secondary'">Hello World</al-button>
  <al-button [size]="'large'" [type]="'tertiary'">Hello World</al-button>
</div>
`
  }));
