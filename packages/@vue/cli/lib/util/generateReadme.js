const descriptions = {
  build: 'Compiles and minifies for production',
  serve: 'Compiles and hot-reloads for development',
  lint: 'Lints and fixes files',
  test: 'Run your tests',
  'test:e2e': 'Run your end-to-end tests',
  'test:unit': 'Run your unit tests'
}

function printScripts (pkg, packageManager) {
  return Object.keys(pkg.scripts).map(key => {
    return [
      `\n### ${descriptions[key]}`,
      `${packageManager} run ${key}\n`
    ].join('\n')
  }).join('')
}

module.exports = function generateReadme (pkg, packageManager) {
  return [
    `# ${pkg.name}\n`,
    '## Project setup',
    `${packageManager} install`,
    printScripts(pkg, packageManager)
  ].join('\n')
}
