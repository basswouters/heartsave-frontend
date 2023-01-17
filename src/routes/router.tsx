import { Skeleton } from 'antd';
import { FC } from 'react';
import { BrowserRouter, Route, RouteObject, Routes, useRoutes } from 'react-router-dom';
import { BaseLayout } from 'shared/components';

export const AppRouter: FC = () => {
  return (
    <Skeleton loading={false}>
      <BrowserRouter>
        <BaseLayout>
          <AppRoutes />
        </BaseLayout>
      </BrowserRouter>
    </Skeleton>
  );
};

export const AppRoutes: FC = () => {
  const element = useRoutes([
    {
      path: '/',
    },
  ] as RouteObject[]);

  return element;
};
