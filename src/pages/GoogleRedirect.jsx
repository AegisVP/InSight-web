import { Navigate } from 'react-router';
import { constants } from 'constants';

const GoogleRedirect = () => {
  const url = `${constants.apiServerAddress}/user/google`;

  console.log({ url });

  return <Navigate to={url} />;
};

export default GoogleRedirect;
