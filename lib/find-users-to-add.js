'use strict'

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

  const masterIdsList = options.masterdata.map(item => item.personalIdNumber)
  const userIdsList = options.data.map(item => item.personalIdNumber)
  const isMissing = id => userIdsList.indexOf(id) === -1
  const missingIdsList = masterIdsList.filter(isMissing)
  const addUser = item => missingIdsList.indexOf(item.personalIdNumber) > -1

  return options.masterdata.filter(addUser)
}
