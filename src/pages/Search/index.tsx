import React, {useState} from 'react';
import { Container, SearchHeader, SearchInput, SubmitButton, Filters, Results } from './styles';
import LogoSupero from '../../assets/img/supero_cor.svg';
import { FiCalendar } from 'react-icons/fi';

function Search() {

    const [startYear, setStartYear] = useState(1970);
    const [endYear, setEndYear] = useState(2020);

    return (
      <Container>
        <SearchHeader>
          <img src={LogoSupero} alt="Supero" />
          <SearchInput />
          <SubmitButton>Buscar</SubmitButton>
        </SearchHeader>
        <Filters>
            Filtrar ano de publicação:
            <input type="text" value={startYear} name="from" />
            <FiCalendar size={20} />
            <span>até</span> 
            <input type="text" value={endYear} name="to" />
            <FiCalendar size={20} />
            <div>100 resultados encontrados</div>
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
  }
  
  export default Search;