import {
  _getUsers,
  _getChirps,
  _saveLikeToggle,
  _saveChirp,
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getChirps(),
  ]).then(([users, chirps]) => ({
    users,
    chirps,
  }))
}

export function saveLikeToggle (info) {
  return _saveLikeToggle(info)
}

export function saveChirp (info) {
  return _saveChirp(info)
}
