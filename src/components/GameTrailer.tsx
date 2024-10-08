import useTrailers from "../Hooks/useTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  if (data?.results.length === 0) return <p>No trailers available.</p>;

  const first = data?.results[0];

  return first ? (
    <video
      src={first.data[480]}
      poster={first.preview}
      controls
    />
  ) : null;
};

export default GameTrailer;
