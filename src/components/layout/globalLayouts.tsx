import styled from "styled-components";

export const GBody = styled.div`
  display: flex;
  padding: 260px 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
  align-self: stretch;

  @media (min-width: 748px) and (max-width: 1400px) {
    padding: 130px 40px;
    gap: 75px;
  }

  @media (max-width: 748px) {
    padding: 130px 10px;
    gap: 70px;
  }
`