export const nonNullable = <T>(value: T): value is NonNullable<T> => (
  value !== null && value !== undefined
);

export const isFulfilled = <T>(input: PromiseSettledResult<T>): input is PromiseFulfilledResult<T> => (
  input.status === 'fulfilled'
);