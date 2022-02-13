/* eslint-disable @typescript-eslint/no-explicit-any */
export const isObject = (item: unknown) => {
  return typeof item === 'object' && !Array.isArray(item) && item !== null;
};

export const walkObject = (
  root: Record<string, any>,
  callback: (arg: {
    value: string | number;
    key: string;
    location: string[];
    isLeaf: boolean;
  }) => void
) => {
  const walk = (obj: Record<string, any>, location: string[] = []) => {
    Object.keys(obj).forEach((key) => {
      // Value is an array, do nothing
      if (Array.isArray(obj[key])) {
        // do nothing
        console.error(
          'Object key with array value detected. Array values will be ignored.',
          obj[key]
        );
        // Value is an object, walk the keys of the object
      } else if (isObject(obj[key])) {
        callback({
          value: obj[key],
          key,
          location: [...location, ...[key]],
          isLeaf: false,
        });
        walk(obj[key], [...location, ...[key]]);

        // We've reached a leaf node, call fn on the leaf with the location
      } else {
        callback({
          value: obj[key],
          key,
          location: [...location, ...[key]],
          isLeaf: true,
        });
      }
    });
  };

  walk(root);
};
