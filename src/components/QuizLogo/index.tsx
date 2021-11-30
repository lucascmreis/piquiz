import React from 'react';
import styled from 'styled-components';

interface ILogoProps {
  className?: string;
}

const Logo: React.FC<ILogoProps> = ({ className }) => {
  return <img className={className} src="./logo.png" />;
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;

  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
