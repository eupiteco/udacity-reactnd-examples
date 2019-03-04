export const RECEIVE_CHIRPS = "RECEIVE_CHIRPS"

export function receiveChirps(chirps) {
	return {
		type: RECEIVE_CHIRPS,
		chirps,
	}
}
