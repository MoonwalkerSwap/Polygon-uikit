import React from "react";
import styled from "styled-components";
import { WingsIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  dustPriceUsd?: number;
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

const DustPrice: React.FC<Props> = ({ dustPriceUsd }) => {
  return dustPriceUsd ? (
    <PriceLink href="https://bscscan.com/address/0xb2a1be154c0416209805395e736aa638eaefd22e" target="_blank">
      <WingsIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${dustPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(DustPrice);
