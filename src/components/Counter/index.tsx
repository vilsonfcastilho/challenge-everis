import { useCount } from '../../hooks/useCount';

export function Counter() {
  const { count, setCount } = useCount();

   return (
     <div>
       <span>
         Count: <b /> {count}
       </span>

       <br />

      <button type="button" onClick={() => setCount(count + 1)}>Increase</button>
     </div>
   )
}