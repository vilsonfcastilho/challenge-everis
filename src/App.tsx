import { Counter } from './components/Counter';
import { Mirror } from './components/Mirror';

import { CountProvider } from './hooks/useCount';

export function App() {
  return (
    <CountProvider>
      <Counter />
      <Mirror />
    </CountProvider>
  );
}
