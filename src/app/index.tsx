import { FC, Suspense, useEffect } from 'react';

import { ConfigProvider } from 'antd';

import nlNL from 'antd/es/locale/nl_NL';
import { Provider } from 'jotai';
import { ErrorBoundary } from 'shared/components';
import { AppRouter } from 'routes';

import styleVariables from 'styles/export.module.scss';

import { ApolloClient, ApolloProvider, createHttpLink, HttpLink, InMemoryCache } from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

import { InitWrapper } from './initWrapper';

ConfigProvider.config({
  theme: {
    primaryColor: styleVariables.primaryColor,
  },
});

const App: FC = () => {
  const authLink = setContext(async (_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = '12';

    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const httpLink = createHttpLink({
    uri: 'https://open-jaybird-63.hasura.app/v1/graphql',
  });

  const client = new ApolloClient({
    uri: '',
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });

  return (
    <ApolloProvider client={client}>
      <Suspense fallback={<p>loading</p>}>
        <Provider>
          <InitWrapper>
            <ConfigProvider locale={nlNL}>
              <ErrorBoundary>
                <AppRouter />
              </ErrorBoundary>
            </ConfigProvider>
          </InitWrapper>
        </Provider>
      </Suspense>
    </ApolloProvider>
  );
};

export const AuthenticatedApp = ({ children }: React.PropsWithChildren): JSX.Element => {
  return <App />;
};
