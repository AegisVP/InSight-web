import { Navigate, useParams } from 'react-router';
import { useAuth } from 'hooks/useAuth';
import { DairyForm } from 'components/DiaryForm/DairyForm';
import { todayDate } from 'utils/todayDate';

export const DairyPage = () => {
  // setSearchParams(e.target.value === '' ? {} : { title: e.target.value })
  const day = useParams().day || todayDate();

  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <DairyForm day={day} /> : <Navigate to="/login" />;
};

export default DairyPage;
