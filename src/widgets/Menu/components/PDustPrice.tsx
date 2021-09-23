import React from "react";
import styled from "styled-components";
import { WingsIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  PDustPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const PDustPrice: React.FC<Props> = ({ PDustPriceUsd }) => {
  return PDustPriceUsd ? (
    <PriceLink href="https://polygonscan.com/address/0x5ce9680bddc91d955a51b959f5cabaf466b0be5a" target="_blank">
      <WingsIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${PDustPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(PDustPrice);
