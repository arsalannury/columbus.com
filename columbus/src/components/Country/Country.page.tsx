import {useParams} from 'react-router-dom';
import { useCountryData } from '../../hooks/fetchCountryData';

const CountryPage: React.FC = () => {
    const {id} = useParams();
    const {data,isLoading,isError,error} = useCountryData(id);
    console.log(data);
    
    
  return (
    <>
    
    </>
  )
}

export default CountryPage;