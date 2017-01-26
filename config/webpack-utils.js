// Transforms a list of components to a webpack `entry` object.
function componentsToEntry(components, path) {
  return (
    components
      .reduce((entry, module) => {
        const pathSplit = module.split('/')
        entry[pathSplit[pathSplit.length - 1]] = `${path}/${module}.js`
        return entry
      }, {})
  )
}

module.exports = {
  componentsToEntry,
}
