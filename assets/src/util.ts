import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(utc);
dayjs.extend(relativeTime);

const colors = [
  'blue',
  'yellow',
  'green',
  'pink',
  'purple',
  'teal',
  'gray',
  'red',
  'indigo',
  'orange',
];

export const formatDateAgo = (value: number) => {
  return dayjs().to(dayjs.utc(value));
};

export const formatDate = (value: number) => {
  return dayjs.utc(value).format('MMMM DD, YYYY');
};

export const getColorByOrder = (order: number) => {
  return colors[order % colors.length];
};

// Return [firstErrorMessage, { field: errorMessage }]
export const parseResponseErrors = (err: any) => {
  const errors = err.response?.body?.error?.errors;

  if (errors) {
    const parsedErrors = Object.entries(errors)
      .map(([k, v]) => ({[k]: Array.isArray(v) ? v[0] : v}))
      .reduce((a, b) => ({...a, ...b}), {});
    const [firstField, firstError] = Object.entries(parsedErrors)[0];
    const firstErrorMessage = `${firstField} ${firstError}`;
    return [firstErrorMessage, parsedErrors];
  }
  return [err.response?.body?.error?.message || 'Server error', null];
};

const adjs = [
  'Autumn',
  'Hidden',
  'Bitter',
  'Misty',
  'Silent',
  'Empty',
  'Dry',
  'Dark',
  'Summer',
  'Icy',
  'Delicate',
  'Quiet',
  'White',
  'Cool',
  'Spring',
  'Winter',
  'Patient',
  'Twilight',
  'Dawn',
  'Crimson',
  'Wispy',
  'Weathered',
  'Blue',
  'Billowing',
  'Broken',
  'Cold',
  'Damp',
  'Falling',
  'Frosty',
  'Green',
  'Long',
  'Late',
  'Lingering',
  'Bold',
  'Little',
  'Morning',
  'Muddy',
  'Old',
  'Red',
  'Rough',
  'Still',
  'Small',
  'Sparkling',
  'Wobbling',
  'Shy',
  'Wandering',
  'Withered',
  'Wild',
  'Black',
  'Young',
  'Holy',
  'Solitary',
  'Fragrant',
  'Aged',
  'Snowy',
  'Proud',
  'Floral',
  'Restless',
  'Divine',
  'Polished',
  'Ancient',
  'Purple',
  'Lively',
  'Nameless',
];

const nouns = [
  'Waterfall',
  'River',
  'Breeze',
  'Moon',
  'Rain',
  'Wind',
  'Sea',
  'Morning',
  'Snow',
  'Lake',
  'Sunset',
  'Pine',
  'Shadow',
  'Leaf',
  'Dawn',
  'Glitter',
  'Forest',
  'Hill',
  'Cloud',
  'Meadow',
  'Sun',
  'Glade',
  'Bird',
  'Brook',
  'Butterfly',
  'Bush',
  'Dew',
  'Dust',
  'Field',
  'Fire',
  'Flower',
  'Firefly',
  'Feather',
  'Grass',
  'Haze',
  'Mountain',
  'Night',
  'Pond',
  'Darkness',
  'Snowflake',
  'Silence',
  'Sound',
  'Sky',
  'Shape',
  'Surf',
  'Thunder',
  'Violet',
  'Water',
  'Wildflower',
  'Wave',
  'Water',
  'Resonance',
  'Sun',
  'Wood',
  'Dream',
  'Cherry',
  'Tree',
  'Fog',
  'Frost',
  'Voice',
  'Paper',
  'Frog',
  'Smoke',
  'Star',
];

const random = (high: number) => Math.floor(Math.random() * high);

export const haiku = (withNumber: boolean = false, seperator: string = ' ') => {
  const adj = adjs[random(adjs.length)];
  const noun = nouns[random(nouns.length)];
  const num = random(1000) + 1;

  if (withNumber) {
    return `${adj}${seperator}${noun}${seperator}${num}`;
  }
  return `${adj}${seperator}${noun}`;
};
