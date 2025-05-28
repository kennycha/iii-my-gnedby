export const scale = (value: number): number => {
  const baseWidth = 448;
  const currentWidth = window.innerWidth;

  if (currentWidth <= baseWidth) {
    return (currentWidth / baseWidth) * value;
  }

  return value;
};

const toCamelCase = (str: string): string => {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
};

export const convertKeysToCamelCase = (obj: Record<string, unknown>): Record<string, unknown> => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [toCamelCase(key), value])
  );
};

