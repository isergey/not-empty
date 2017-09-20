const UNDEFINED = 'undefined';
const NUMBER = 'number';
const STRING = 'string';
const FUNCTION = 'function';
const OBJECT = 'Object';
const MAP = 'Map';
const SET = 'Set';
const FILE = 'File';

export default function notEmpty(value: any) {
  if (value === null || value === false) {
    return false;
  }
  const valueType = typeof value;
  switch (valueType) {
    case UNDEFINED:
      return false;
    case NUMBER:
      if (isNaN(value)) {
        return false;
      }
      return value !== 0;
    case STRING:
      return value.length !== 0;
    case FUNCTION:
      return true;
  }

  if (Array.isArray(value)) {
    return value.length !== 0;
  }

  const cn = value.constructor.name;
  if (cn === OBJECT) {
    return Object.keys(value).length !== 0
  } else if (cn === MAP || cn === SET || cn === FILE) {
    return value.size !== 0;
  }
  return true;
}
