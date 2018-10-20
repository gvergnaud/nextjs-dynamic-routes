export const mapValues = mapper => obj =>
  Object.keys(obj).reduce((acc, k) => Object.assign(acc, {
    [k]: mapper(obj[k], k, obj)
  }), {})

export const mapKeys = mapper => obj =>
  Object.keys(obj).reduce((acc, k) => Object.assign(acc, {
    [mapper(k, obj[k], obj)]: obj[k]
  }), {})

export const filterValues = (predicate, obj) =>
  Object.entries(obj).reduce(
    (acc, [k, v]) =>
      predicate(v, k) ? Object.assign(acc, { [k]: v }) : acc,
    {}
  )

export const splitProperties = (isLeft, obj) =>
  Object.entries(obj).reduce(
    ([left, right], [k, v]) =>
      isLeft(v, k)
        ? [{ ...left, [k]: v }, right]
        : [left, { ...right, [k]: v }],
    [{}, {}]
  )
