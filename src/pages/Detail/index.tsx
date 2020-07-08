import React, {useState, useEffect} from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import LogoSupero from '../../assets/img/supero_cor.svg';
import { FiChevronLeft } from 'react-icons/fi';

import api from '../../services/api';

import { Container, SearchHeader, BookInfo } from './styles';

interface BookParams  {
  book: string;
}

interface Book {
    id: string;
    titulo: string;
    ano: string;
    idioma: string;
    peso: string;
    comprimento: string;
    largura: string;
    altura: string;
    isbn: string;
    autor: string;
    editora: string;
}

const Detail: React.FC = () => {

  const [book, setBook] = useState<Book | null>(null);

  const { params } = useRouteMatch<BookParams>();

  useEffect(() => {

    api.get(`/api/Livros/${params.book}`).then(response => {
        setBook(response.data);
    });

  },[params.book]);  
  

  return (
    <Container>
      <SearchHeader>
        <img src={LogoSupero} alt="Supero" />
      </SearchHeader>

      { book && (
        <BookInfo>
          <h1>{book.titulo}</h1>
          <strong>Autor: {book.autor}</strong>

          <p>Informações do Livro:</p>

          <table>
            <tr>
              <td>ISBN</td>
              <td> {book.isbn} </td>
            </tr>
            <tr>
              <td>Editora</td>
              <td> {book.editora} </td>
            </tr>            
            <tr>
              <td>Ano</td>
              <td> {book.ano} </td>
            </tr>    
            <tr>
              <td>Idioma</td>
              <td> {book.idioma} </td>
            </tr>              
            <tr>
              <td>Peso</td>
              <td> {book.peso} </td>
            </tr>            
            <tr>
              <td>Dimensões:</td>
              <td> {book.comprimento} x  {book.largura} x {book.altura}</td>
            </tr>                                          
          </table>

          <Link to="/"> <FiChevronLeft size={20} /> Voltar</Link>

        </BookInfo>
      )}
    </Container>
  );
}

export default Detail;