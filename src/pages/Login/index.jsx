import React from 'react';
import { useDispatch } from 'react-redux';

import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyles';

import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
  }
  return (
    <Container>
      <Title isRed={false}>Login</Title>

      <small>sdadas</small>
      <Paragraph isRed>Lorem ipsum dolor sit amet consectetur </Paragraph>

      <button type="submit" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
