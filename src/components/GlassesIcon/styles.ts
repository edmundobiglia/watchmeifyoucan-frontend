import { opacify } from "polished";
import styled from "styled-components";

export const Svg = styled.svg`
  fill: ${({ theme }) => theme.foreground};

  transition: fill 200ms linear;
`;
