import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Snowman from './Snowman';

let game;

const img0 = 'img0';
const img1 = 'img1';
const img2 = 'img2';

beforeEach(function() {
  game = render(<Snowman
    words={['apple']}
    maxWrong={3}
    images={[img0, img1, img2]}/>);
});

/** clickLetter: clicks on a letter in an effort to aid tests
 *
 * letter: string
 */

function clickLetter(letter) {
  fireEvent.click(game.getByText(letter));
}

// Feels redundant given beforeEach
it('renders successfully', function() {
  render(<Snowman />);
});

it('matches initial snapshot', function() {
  expect(game).toMatchSnapshot();
});

it('matches snapshot after loss', function() {
  clickLetter('b');
  clickLetter('c');
  clickLetter('d');

  expect(game).toMatchSnapshot();
});

it('only allows maxWrong guesses and renders correct endgame', function() {
  clickLetter('b');
  clickLetter('c');
  clickLetter('d');

  expect(game.getByText('You lose')).toBeInTheDocument();
});