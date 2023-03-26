import { fireEvent, render, screen } from "@testing-library/react";
import MyTest from "./myTest";
import { logRoles } from '@testing-library/dom'

describe('myTest test', () => {
  // afterAll(() => {
  //   console.log('--------------------After All-----------------------------------');
  // });
  // beforeAll(() => {
  //   console.log('--------------------Before All-----------------------------------');
  // });
  // afterEach(() => {
  //   console.log('--------------------After Each-----------------------------------');
  // });
  // beforeEach(() => {
  //   console.log('--------------------Before Each-----------------------------------');
  // });
  it('renders learn react link', () => {
    console.log('llllllllllllllllllllllllllllllllllllllllll');
    // given
    render(<MyTest />);
    // when
    const linkElement = screen.getByText(/this is value/i);
    // then
    expect(linkElement).toBeInTheDocument();
  });

  test('renders learn test case', () => {
    // given
    render(<MyTest />);
    // when
    const linkElement = screen.getByRole("textbox");
    // then
    fireEvent.change(linkElement, { target: { value: 'abc' } })
    expect(linkElement).toHaveValue('abc')
    const span = screen.getByRole('lj');
    logRoles(span)
    expect(span).toHaveTextContent('abc');
  });
});