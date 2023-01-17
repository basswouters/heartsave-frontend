import { Button, Card, Col, Row, Skeleton } from 'antd';
import { Suspense, useEffect, useState } from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const BaseLayout: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div style={{ width: '100%', maxWidth: 1200, margin: '0 auto', padding: '0 1rem' }}>
      <Row justify="space-between" align="middle">
        <Col xs={18}>
          <Link to="/">
            <h1>Heartsave</h1>
          </Link>
        </Col>
      </Row>
      <Suspense fallback={<Skeleton active loading />}>{children}</Suspense>
    </div>
  );
};
