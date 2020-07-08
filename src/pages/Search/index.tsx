import React, {useState, useEffect, MouseEvent} from 'react';
import { Container, SearchHeader, SearchInput, SubmitButton, Filters, Results } from './styles';
import { Link } from 'react-router-dom';
import { Pagination } from '@material-ui/lab';
import TablePagination from '@material-ui/core/TablePagination';
import LogoSupero from '../../assets/img/supero_cor.svg';
import { FiCalendar } from 'react-icons/fi';
import api from '../../services/api';

interface LivroPayload {
  totalCount: number;
  items: []
}

interface Livro {
    id: string;
    ano: string;
    titulo: string;
    isbn: string;
    autor: string;
    editora: string;
}

const Search: React.FC = () => {

  const [startYear, setStartYear] = useState('1970');
  const [endYear, setEndYear] = useState('2020');
  const [books, setBooks] = useState<Livro[]>([]);
  const [total, setTotal] = useState(0);

  const [page, setPage] = React.useState(1);
  const [searchString, setSearchString] = useState(() => {
    const storageSearchString = localStorage.getItem('@SuperaBooks:searchString');
    if(storageSearchString) {
      return JSON.parse(storageSearchString);
    }else{
        return '';
    }
  });

  useEffect(() => {
    localStorage.setItem('@SuperaBooks:searchString', JSON.stringify(searchString));
    handleSearch();
  }, [searchString]);

  async function handleSearch() {
    if(searchString.length !== 0) {
      const response = await api.get<LivroPayload>(`/api/Livros?Busca=${searchString}`);
      const {items, totalCount } = response.data;
    
      // const books = items.map<Livro>( (book:Livro) => {
      //   if( book.ano >= startYear && book.ano <= endYear) {
      //     return book;
      //   }
      // });

      setBooks(items);
      setTotal(totalCount);
    }
  }

  function handleChangePage(event: MouseEvent<HTMLButtonElement>) {

    console.log(event);

    setPage(1);
  }

  return (
    <Container>
      <SearchHeader>
        <img src={LogoSupero} alt="Supero" />
        <SearchInput value={searchString} onChange={(e) => setSearchString(e.target.value)} />
        <SubmitButton onClick={handleSearch}>Buscar</SubmitButton>
      </SearchHeader>
      <Filters>
        <div>
          Filtrar ano de publicação:
          <input type="text" value={startYear} onChange={(e) => setStartYear(e.target.value)} name="from" />
          <FiCalendar size={20} />
          <span>até</span> 
          <input type="text" value={endYear}  onChange={(e) => setEndYear(e.target.value)} name="to" />
          <FiCalendar size={20} />

        </div>
        <div>{total} resultados encontrados</div>
      </Filters>
      <Results>
          {books.length > 0 && 
            <>
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
                  { books && books.map((book) => (
                      <tr key={book.id}>
                        <td> {book.titulo} </td>
                        <td> {book.autor} </td>
                        <td> {book.editora} </td>
                        <td> {book.ano} </td>
                        <td>
                          <Link to={`/detail/${book.id}`}>Detalhes</Link>
                        </td>
                      </tr>
                  ))}
                </tbody>
              </table>
              <TablePagination
                component="div"
                count={total}
                page={page}
                onChangePage={() => handleChangePage}
                rowsPerPage={10}
                rowsPerPageOptions={[10]}
              />              
            </>
          }
        {page}
      </Results>
    </Container>
  );
};

  
export default Search;