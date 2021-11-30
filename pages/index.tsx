import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';

import Widget from '../src/components/Widget';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Footer from '../src/components/Footer';
import GihubCorner from '../src/components/GithubCorner';
import QuizBackground from '../src/components/QuizBackground';

const Home: React.FC = () => {
  const router = useRouter();

  const [name, setName] = useState('');

  const handleChangeInput = useCallback(e => {
    const { value } = e.target;
    setName(value);
  }, []);

  const handleFormSubmit = useCallback(
    e => {
      e.preventDefault();
      router.push(`/quiz?name=${name}`);
    },
    [name, router],
  );

  return (
    <QuizBackground>
      <Widget title={db.title}>
        <p>{db.description}</p>

        <form onSubmit={handleFormSubmit}>
          <Input
            name="user"
            type="text"
            value={name}
            placeholder="Diz aí seu nome para jogar :)"
            handleChangeInput={handleChangeInput}
          />

          <Button type="submit" disabled={!name}>
            JOGAR
          </Button>
        </form>
      </Widget>

      <Footer />

      <GihubCorner projectUrl="https://github.com/gabriel-nt" />
    </QuizBackground>
  );
};

export default Home;
