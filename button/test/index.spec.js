import chai from 'chai/chai.js';
// import spies from 'chai-spies';
const expect = chai.expect;
import { shallowMount } from '@vue/test-utils';
import Button from '../src/Button.vue';

// console.log(spies);

describe('Button', async () => {
  const wrapper = shallowMount(Button);
  const buttonTest = wrapper.find('button');

  it('should render correctly', () => {});

  it('should default: Hello John Doe', () => {
    expect(buttonTest.text()).to.equal('Hello John Doe');
  });

  it('should change text to Clicked upon Click', async () => {
    buttonTest.trigger('click');
    await wrapper.vm.$nextTick();
    expect(buttonTest.text()).to.equal('Clicked');
  });
});
