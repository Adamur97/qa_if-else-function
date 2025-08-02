'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  it('should call first callback when condition returns true', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(first).toHaveBeenCalledTimes(1);
    expect(second).not.toHaveBeenCalled();
  });

  it('should call second callback when condition returns false', () => {
    const condition = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledTimes(1);
    expect(first).not.toHaveBeenCalled();
  });

  it('should call condition callback without arguments', () => {
    const condition = jest.fn(() => true);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalledWith();
  });

  it('should call first or second callback without arguments', () => {
    const conditionTrue = jest.fn(() => true);
    const conditionFalse = jest.fn(() => false);
    const first = jest.fn();
    const second = jest.fn();

    ifElse(conditionTrue, first, second);
    expect(first).toHaveBeenCalledWith();
    expect(second).not.toHaveBeenCalled();

    first.mockClear();
    second.mockClear();

    ifElse(conditionFalse, first, second);
    expect(second).toHaveBeenCalledWith();
    expect(first).not.toHaveBeenCalled();
  });
});
