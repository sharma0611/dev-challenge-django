// Tests for RadioInput.js component
import React from 'react';
import RadioInput from '../RadioInput';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

test('Radio button value changes on change', () => {

  const fakeChange = (fieldId, fieldValue) => {
  }

  const component = shallow(
    <RadioInput fieldId='interestPeriod' defaultValue={12} onFieldChange={fakeChange}/>,
  );
  // check initial state
  expect(component.state().value).toEqual(12);

  // manually trigger change with value
  component.simulate('change', { target: { value: '3' } });

  // check post change state
  expect(component.state().value).toEqual(3);

});

test('Exactly 3 radio buttons exist', () => {

  const fakeChange = (fieldId, fieldValue) => {
  }

  const component = shallow(
    <RadioInput fieldId='interestPeriod' defaultValue={3} onFieldChange={fakeChange}/>,
  );
  // check initial state
  expect(component.state().value).toEqual(3);

  // check number of radio buttons produced
  expect(component.find('input')).toHaveLength(3);

});

