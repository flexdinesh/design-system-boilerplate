import React from 'react';
import type { FC } from 'react';
import Box from 'components/Box';
import * as styles from './HelloWorld.styles';

type HelloWorldProps = {
  name: string;
};

const HelloWorld: FC<HelloWorldProps> = ({ name }) => {
  return <Box>Hello World, {name}!</Box>;
};

if (process.env.NODE_ENV !== 'production') {
  HelloWorld.displayName = 'HelloWorld';
}

export default HelloWorld;
