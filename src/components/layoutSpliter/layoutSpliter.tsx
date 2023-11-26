import styled from "styled-components/native";

/*  Componente formado por duas divs, em que se pode adicionar outros componentes dentro dele*/
const divLS = styled.View<{cor: string}>`
  width: 100vw;
  background-color: ${(p) => p.cor};
`;