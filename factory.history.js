export const HISTORY = [];

export function logCreation(token) {
  HISTORY.push({ time: Date.now(), token });
}
