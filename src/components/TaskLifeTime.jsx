import { formatDistance } from 'date-fns';
import { es } from 'date-fns/locale';
import { useEffect, useState, useRef } from 'react';

const TaskLifeTime = ({ creationDate }) => {
  console.log(creationDate)
  const [lifeTime, setLifeTime] = useState(null);
  const intervalId = useRef();

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log('control de tiempo', creationDate);
      setLifeTime(formatDistance(creationDate, new Date(), { locale: es }));
    }, 10000);
    return () => {
      console.log('desmontado');
      clearInterval(intervalId.current);
    };
  }, []);

  useEffect(() => {
    console.log('refresco de tiempo de vida de tarea');
  }, [lifeTime]);

  return <span>{lifeTime ?? 'Nueva'}</span>;
};

export default TaskLifeTime;
