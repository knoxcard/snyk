module.exports = walk;

function walk(deps, filter) {
  return new Promise(function (resolve) {
    if (!deps) {

      return resolve([]);
    }

    if (deps.dependencies) {
      deps = deps.dependencies;
    }

    const promises = Object.keys(deps).map(function (name) {
      return new Promise(function (resolve) {
        return resolve(filter(deps[name], name, deps));
      }).then(function (res) {
        if (!res && deps[name] && deps[name].dep) {
          return walk(deps[name].dependencies, filter);
        }
      });
    });

    resolve(Promise.all(promises));
  });
}
