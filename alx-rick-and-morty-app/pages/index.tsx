import { useQuery, gql } from '@apollo/client';

const GET_EPISODES = gql`
  query {
    episodes(page: 1) {
      results {
        id
        name
      }
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_EPISODES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Rick and Morty Episodes</h1>
      <ul>
        {data.episodes.results.map((ep) => (
          <li key={ep.id}>{ep.name}</li>
        ))}
      </ul>
    </div>
  );
}
