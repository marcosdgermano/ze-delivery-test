import { getGeoLocation } from '../location';

jest.mock('cross-fetch', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockResolvedValueOnce({
      status: 200,
      json: () => ({
        results: [
          {
            geometry: {
              location: {
                lat: '-1',
                lng: '1',
              },
            },
          },
        ],
      }),
    })
    .mockRejectedValue(new Error('Error')),
}));

describe('getGeoLocation', () => {
  it('Success', async () => {
    const location = {
      lat: '-1',
      lng: '1',
    };
    const result = await getGeoLocation('Rua Américo Brasiliense, São Paulo');
    expect(result).toEqual(location);
  });

  it('Error', async () => {
    try {
      await getGeoLocation();
    } catch (e) {
      expect(e.message).toBe('Error: Error');
    }
  });
});
