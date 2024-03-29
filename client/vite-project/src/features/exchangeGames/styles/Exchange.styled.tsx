import styled from "styled-components";
type Image = {
  radius?: string;
  wid?: string;
  hei?: string;
  margin?: string;
};

export const Select = styled.select`
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 17px;
  height: 58px;
  width: 159px;
  padding: 2px;
`;
export const Image = styled.img<Image>`
  border-radius: ${({ radius }) => radius};
  width: ${({ wid }) => wid};
  height: ${({ hei }) => hei};
  object-fit: cover;
  object-position: center;
  display: block;
  margin: ${({ margin }) => margin};
`;
export const ImageCard = styled.img`
  border-radius: 15px 15px 0 0;
  width: 100%;
  /* height: 100%; */
  object-fit: cover;
  object-position: center;
`;

export const ImageContainer = styled.div`
  height: 30%;
  overflow: hidden;
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

export const StyledOption = styled.option`
  font-size: 22px;
`;
