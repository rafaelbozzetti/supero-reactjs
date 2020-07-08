import React, {useState} from 'react';
import { Container, SearchHeader, SearchInput, SubmitButton, Filters, Results } from './styles';
import LogoSupero from '../../assets/img/supero_cor.svg';
import { FiCalendar } from 'react-icons/fi';
import api from '../../services/api';

interface Livro {
  totalCount: number;
  items: [{
    id: string;
    titulo: string;
    isbn: string;
    autor: string;
    editora: string;
  }]
}

const Search: React.FC = () => {

  const [startYear, setStartYear] = useState(1970);
  const [endYear, setEndYear] = useState(2020);
  const [searchString, setSearchString] = useState('');
  const [result, setResult] = useState([]);
  const [total, setTotal] = useState(0);

  async function handleSearch() {
    if(searchString.length != 0) {
      console.log(` Searching for ${searchString}`);

      const response = await api.get<Livro>('/api/Livros');
      const {items, totalCount } = response.data;
     
      console.log(items);

      //setResult([...result, items]);
      setTotal(totalCount);

    }
  }

  function handleSearchString() { 
    console.log('save refe');
  }

  return (
    <Container>
      <SearchHeader>
        <img src={LogoSupero} alt="Supero" />
        <SearchInput value={searchString} onChange={(e) => setSearchString(e.target.value)} />
        <SubmitButton onClick={handleSearch}>Buscar</SubmitButton>
      </SearchHeader>
      <Filters>
          Filtrar ano de publicação:
          <input type="text" value={startYear} name="from" />
          <FiCalendar size={20} />
          <span>até</span> 
          <input type="text" value={endYear} name="to" />
          <FiCalendar size={20} />
          <div>{total} resultados encontrados</div>
      </Filters>
      <Results>
          <table>
            <thead>
              <tr>
                <td>Livro</td>
                <td>Autor</td>
                <td>Editora</td>
                <td>Ano</td>
                <td>Ações</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pequeno principe</td>
                <td>SS</td>
                <td>ss</td>
                <td>123123</td>
                <td>
                  <a href="">Detalhes</a>
                </td>
              </tr>
            </tbody>
          </table>
      </Results>
    </Container>
  );
};

  
export default Search;