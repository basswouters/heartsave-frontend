import { Skeleton } from 'antd';
import { useGetDevicesQuery } from 'generated/graphql';
import { FC, ReactElement, ReactNode, useEffect, useState } from 'react';

interface IInitWrapper extends React.PropsWithChildren {
  test?: string;
}

export const InitWrapper: FC<IInitWrapper> = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const { data } = useGetDevicesQuery();
  useEffect(() => {
    const init = async () => {
      setLoading(false);
    };
    init();
  }, []);

  return <Skeleton loading={isLoading}>{children}</Skeleton>;
};
