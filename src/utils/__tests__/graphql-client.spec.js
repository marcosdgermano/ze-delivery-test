import { gql } from '@apollo/client';
import fetch from 'cross-fetch';
// import fetch from 'cross-fetch';
import { client } from '../graphql-client';

jest.mock('cross-fetch', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockResolvedValueOnce({
      text: jest.fn().mockResolvedValue(
        JSON.stringify({
          data: { poc: { id: '1' } },
          loading: false,
          networkStatus: 7,
          stale: false,
        })
      ),
    })
    .mockResolvedValueOnce({
      text: jest.fn().mockResolvedValue(
        JSON.stringify({
          data: { product: null },
          errors: [
            {
              message: 'network timeout',
              path: ['product'],
            },
          ],
          loading: false,
          networkStatus: 7,
          stale: false,
        })
      ),
    }),
}));

describe('Graphql ', () => {
  it('valida request com sucesso', async () => {
    const result = await client.query({
      query: gql`
        {
          poc(pocId: "1") {
            id
          }
        }
      `,
    });

    expect(result.data.poc.id).toBe('1');
  });

  it('valida request com erro', async () => {
    try {
      await client.query({
        query: gql`
          {
            poc {
              id
            }
          }
        `,
      });
    } catch (e) {
      expect(fetch.mock.calls).toHaveLength(2);
    }
  });
});
