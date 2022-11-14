import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples';

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data && data[0]; //Si la data tiene un valor(!!data), entonces (&&) toma la data de la posicion cero (data[0])
    console.log({data, isLoading, hasError});

  return (
    <>
        <h1>Breaking Bad quotes</h1>
        <hr/>

        {
            isLoading 
                ? <LoadingQuote/>
                : <Quote author={author} quote={quote}/>

        }

        <button className='btn btn-primary' 
            onClick={() => increment()}
            disabled={isLoading}> 
            Next quote 
        </button>

    </>   
  )
}
