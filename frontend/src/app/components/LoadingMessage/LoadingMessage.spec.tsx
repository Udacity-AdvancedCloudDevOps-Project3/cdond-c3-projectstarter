import * as React from 'react';
import { shallow } from 'enzyme';
import { LoadingMessage } from 'app/components/LoadingMessage';

describe('<LoadingMessage>', () => {
  describe('Props', () => {
    describe('message', () => {
      it('Should render the props message', () => {
        const message = 'Hello!';
        const wrapper = shallow(<LoadingMessage message={message} />);
        // zak-original-line-not-commented
        // expect(wrapper.contains(<span>{message}?</span>)).toBeTruthy(); //remove the question mark to make the test pass
        expect(wrapper.contains(<span>{message}</span>)).toBeTruthy(); // Removing the "?" question mark fixed frontend unit test
      });
    });
  });
});
