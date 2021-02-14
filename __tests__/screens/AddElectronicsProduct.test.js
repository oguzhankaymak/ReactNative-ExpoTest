import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from '../../src/redux/Store';

import ElectronicsScreen from '../../src/screens/electronicsScreen/ElectronicsScreen';

beforeAll(() => {
  jest.mock('@react-native-community/async-storage');
});

test('render Electronics Screen', () => {
  const { store } = configureStore();

  const screen = (
    <Provider store={store}>
      <ElectronicsScreen />
    </Provider>
  );
  const { getByTestId } = render(screen);

  const productButton = getByTestId('product0');
  const productButton1 = getByTestId('product1');

  fireEvent.press(productButton);
  fireEvent.press(productButton);
  fireEvent.press(productButton);
  fireEvent.press(productButton1);
  fireEvent.press(productButton1);

  const cartItemState = store.getState().cartItem.cartItem;

  // length must be 2 because we added 2 kinds of products
  expect(cartItemState.length).toEqual(2);
});
