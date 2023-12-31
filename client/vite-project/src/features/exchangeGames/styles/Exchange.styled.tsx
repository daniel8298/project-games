import styled from "styled-components";
type Image = {
  radius?: string;
  wid?: string;
  hei?: string;
};

export const Select = styled.select`
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 17px;
  height: 30px;
  width: 120px;
`;
export const Image = styled.img<Image>`
  border-radius: ${({ radius }) => radius};
  width: ${({ wid }) => wid};
  height: ${({ hei }) => hei};
  object-fit: cover;
  object-position: center;
  display: block;
`;
export const Checkbox = styled.input`
  margin: 0 10px 0 30px;
`;

export const FlexButtons = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
`;
export const FlexSelectAndButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;
