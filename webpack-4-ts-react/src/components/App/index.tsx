import * as React from 'react';

export interface AppProps {
  message: string;
}

export const App = (props: AppProps) => <h1>{props.message}!</h1>;
