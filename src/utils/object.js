export const mapValues = mapper => obj =>
  Object.keys(obj).reduce((acc, k) => Object.assign(acc, {
    [k]: mapper(obj[k], k, obj)
  }), {})

export const mapKeys = mapper => obj =>
  Object.keys(obj).reduce((acc, k) => Object.assign(acc, {
    [mapper(k, obj[k], obj)]: obj[k]
  }), {})
