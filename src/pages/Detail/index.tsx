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

          <table>
            <tr>
              <td>ISBN</td>
              <td> <strong>{book.isbn}</strong> </td>
            </tr>
            <tr>
              <td>Editora</td>
              <td> <strong>{book.editora}</strong> </td>
            </tr>            
            <tr>
              <td>Ano</td>
              <td> <strong>{book.ano}</strong> </td>
            </tr>    
            <tr>
              <td>Idioma</td>
              <td> <strong>{book.idioma}</strong> </td>
            </tr>              
            <tr>
              <td>Peso</td>
              <td> <strong>{book.peso}g</strong> </td>
            </tr>            
            <tr>
              <td>Dimensões (C x L x A):</td>
              <td> <strong>{book.comprimento}cm</strong> x  <strong>{book.largura}cm</strong> x <strong>{book.altura}cm</strong></td>
            </tr>                                          
          </table>

          <Link to="/"> <FiChevronLeft size={20} /> Voltar</Link>

        </BookInfo>
      )}
    </Container>
  );
}

export default Detail;