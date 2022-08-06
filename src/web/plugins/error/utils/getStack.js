function getStack(stack) {
  const val = stack.split('\n').slice(1).map(item => item.replace(/^\s + at/, 'at'));
  return val;
}

export { getStack }
