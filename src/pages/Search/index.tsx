import React, {useState, useEffect, useCallback} from 'react';
import { Container, SearchHeader, SearchInput, SubmitButton, Filters, Results } from './styles';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Pagination from '@material-ui/lab/Pagination';
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

interface Event {}
interface Props {}

const Search: React.FC = () => {

  const [books, setBooks] = useState<Livro[]>([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const [page, setPage] = React.useState(1);
  const [searchString, setSearchString] = useState(() => {
    const storageSearchString = localStorage.getItem('@SuperaBooks:searchString');
    if(storageSearchString) {
      return JSON.parse(storageSearchString);
    }else{
        return '';
    }
  });
  const [startYear, setStartYear] = useState(() => {
    const startYearString = localStorage.getItem('@SuperaBooks:startYear');
    if(startYearString) {
      return JSON.parse(startYearString);
    }else{
        return '1970';
    }
  });
  const [endYear, setEndYear] = useState(() => {
    const endYearString = localStorage.getItem('@SuperaBooks:endYear');
    if(endYearString) {
      return JSON.parse(endYearString);
    }else{
        return '2020';
    }
  });

  useEffect(() => {
    localStorage.setItem('@SuperaBooks:searchString', JSON.stringify(searchString));
  }, [searchString]);

  useEffect(() => {
    localStorage.setItem('@SuperaBooks:startYear', JSON.stringify(startYear));
  }, [startYear]);

  useEffect(() => {
    localStorage.setItem('@SuperaBooks:endYear', JSON.stringify(endYear));
  }, [endYear]);

  useEffect(() => {
    handleSearch();
  }, []);
  
  useEffect(() => {
    handleSearch();
  }, [page]);

  async function handleSearch() {
    if(searchString.length !== 0) {

      const skipCount = (page === 1 ? 0 : (page -1) * 10);
      const queryParams = `/api/Livros?Busca=${searchString}&AnoInicial=${startYear}&AnoFinal=${endYear}&MaxResultCount=10&SkipCount=${skipCount}`

      const response = await api.get<LivroPayload>(queryParams);
      const {items, totalCount } = response.data;
      setBooks(items);
      setTotal(totalCount);

      const totalPages = Math.round(totalCount / 10);
      if(page > totalPages) {
        const totalSetPage = ( totalPages === 0 ? 1 : totalPages);
        setPage(totalSetPage);
      }
      setTotalPages(totalPages);
    }else{
      setBooks([]);
    }
  }

  const handleChangePage = useCallback((event:Event, value:number) => {
    setPage(value);
  }, []);

  return (
    <Container>
      <SearchHeader>
        <img src={LogoSupero} alt="Supero" />
        <SearchInput placeholder="Busca" value={searchString} onChange={(e) => setSearchString(e.target.value)} />
        <SubmitButton onClick={handleSearch}>Buscar</SubmitButton>
      </SearchHeader>
      <Filters>
        <div>
          Filtrar ano de publicação:
  <input type="text" value={startYear} min="1970" max="2020" onChange={(e) =>  setStartYear(e.target.value)} name="from" />
          <FiCalendar size={20} />
          <span>até</span> 
          <input type="text" value={endYear} min="1970" max="2020" onChange={(e) => setEndYear(e.target.value)} name="to" />
          <FiCalendar size={20} />
        </div>
        <div>{total} resultados encontrados</div>
      </Filters>
      <Results>
          {books.length > 0 && 
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell> Livro </TableCell>
                    <TableCell> Autor </TableCell>
                    <TableCell> Editora </TableCell>
                    <TableCell> Ano </TableCell>
                    <TableCell> Ações </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  { books && books.map((book) => (
                      <TableRow key={book.id}>
                        <TableCell> {book.titulo} </TableCell>
                        <TableCell> {book.autor} </TableCell>
                        <TableCell> {book.editora} </TableCell>
                        <TableCell> {book.ano} </TableCell>
                        <TableCell>
                            <Link to={`/detail/${book.id}`}> Detalhes</Link>
                        </TableCell>
                      </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div>
                <Pagination shape="rounded" count={totalPages} page={page} onChange={handleChangePage} />
              </div>              
            </TableContainer>
          }
          {books.length === 0 &&
            <div>Nenhum registro</div>
          }          
      </Results>
    </Container>
  );
};

export default Search;