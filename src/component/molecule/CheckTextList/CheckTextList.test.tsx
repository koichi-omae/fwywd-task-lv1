import { render, screen } from '@testing-library/react';
import { CheckTextList, baseId } from './CheckTextList';
import { propObj } from './CheckTextList.props';
import { CheckTextListProps } from './CheckTextList.type';

let props: CheckTextListProps;

describe('component/molecule/CheckTextList', () => {
  describe('default', () => {
    beforeEach(() => {
      props = propObj.default;
    });

    it('component/molecule/CheckTextList のテストケースを書くこと', () => {
      render(<CheckTextList {...props} />);
      expect(screen.getByTestId(baseId)).toBeInTheDocument();
    });
  });
});