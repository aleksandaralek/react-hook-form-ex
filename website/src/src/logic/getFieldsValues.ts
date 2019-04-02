import getFieldValue from './getFieldValue';

export default function getFieldsValues(fields, filedNames?: string | Array<string>) {
  return Object.values(fields).reduce((previous, data: any) => {
    if (Array.isArray(data)) return;
    const { ref, ref: { name } } = data;
    const value = getFieldValue(fields, ref);

    if (typeof filedNames === 'string') {
      if (name === filedNames) {
        return value;
      }

      return previous;
    }

    const copy = { ...(previous || {}) };
    if (Array.isArray(filedNames)) {
      if (filedNames.includes(name)) {
        copy[name] = value;
      }
    } else {
      copy[name] = value;
    }

    return copy;
  }, undefined);
}
