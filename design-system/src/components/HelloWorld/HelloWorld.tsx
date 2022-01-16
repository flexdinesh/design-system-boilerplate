import React from 'react';
import type { FC } from 'react';
import * as styles from './HelloWorld.styles';

type HelloWorldProps = {
  name: string;
};

const HelloWorld: FC<HelloWorldProps> = ({ name }) => {
  return <div css={styles.container}>Hello World, {name}!</div>;
};

if (process.env.NODE_ENV !== 'production') {
  HelloWorld.displayName = 'HelloWorld';
}

export default HelloWorld;
