import {AsynStorage} from 'react-native';
import {CALENDAR_STORAGE_KEY} from './_calendar';

export function submitEntry({entry, key}) {
  return AsynStorage.mergeItem(
    CALENDAR_STORAGE_KEY,
    JSON.stringify({
      [key]: entry,
    }),
  );
}

export function removeEntry(key) {
  return AsynStorage.getItem(CALENDAR_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    data[key] = undefined;
    delete data[key];
    AsynStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data));
  });
}
