import Function from '../redux/api/api';

describe('Test functions', () => {
  test('Get the right country and continent names', () => {
    const { ContinentName, CountryName } = Function.getContinentCountryName('NG');
    expect(ContinentName).toBe('Africa');
    expect(CountryName).toBe('Nigeria');
  });

  test('Display the right formatted time in city time zone', () => {
    const localTime = Function.getLocalTime(1665149696, 3600, 'ccc, dd LL yyyy\' | Local time: \'hh:mm a');
    expect(localTime).toBe('Mon, 10 10 2022 | Local time: 01:34 AM');
  });

  test('Display the right formatted time in city time zone', () => {
    const sunriseTime = Function.getLocalTime(1665120715, 3600);
    expect(sunriseTime).toBe('05:31 PM');
  });
});
