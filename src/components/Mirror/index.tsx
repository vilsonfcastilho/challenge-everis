import { useCount } from '../../hooks/useCount';

export function Mirror() {
  const { count } = useCount();

  return (
    <span>
      <b>Mirror: {count}</b>
    </span>
  );
}