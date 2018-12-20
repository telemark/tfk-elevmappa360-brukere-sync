module.exports = options => {
  if (!options) {
    throw new Error('Missing required input: options')
  }
  if (!options.masterdata) {
    throw new Error('Missing required input: options.masterdata')
  }
  if (!Array.isArray(options.masterdata)) {
    throw new Error('Invalid format options.masterdata must be an array')
  }
  if (!options.data) {
    throw new Error('Missing required input: options.data')
  }
  if (!Array.isArray(options.data)) {
    throw new Error('Invalid format options.data must be an array')
  }

  const masterIdsList = options.masterdata.map(item => item.username)
  const userIdsList = options.data.map(item => item.userId)
  const isMissing = id => masterIdsList.indexOf(id) === -1
  const missingIdsList = userIdsList.filter(isMissing)
  const removeUser = item => missingIdsList.indexOf(item.userId) > -1

  return options.data.filter(removeUser)
}
