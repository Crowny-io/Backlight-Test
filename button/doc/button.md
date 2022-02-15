```js script
import Button from '../src/Button.vue';
```

# Button

This is a very simple example of a button

## Usage

### Specifying a name

```js preview-story
export const named = () => ({
  components: { Button },
  template: `<Button name='Dave' />`,
});
```

### Without a name

```js preview-story
export const anonymous = () => ({
  components: { Button },
  template: `<Button />`,
});
```

## Variants

### Outlined

```js preview-story
export const outlined = () => ({
  components: { Button },
  template: `<Button outlined />`,
});
```
