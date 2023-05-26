/**
 * String utils - Comprises of utils for string manipulation
 *
 */

function startCase(input) {
  return input[0].toUpperCase() + input.substring(1);
}

export default {
  startCase,
};
