import { FC } from 'react';
import data from '../../data/dataset.json';
import styles from './table.module.scss';
import clsx from 'clsx';
import CompleteIcon from '../icons/CompleteIcon';
import InCompleteIcon from '../icons/InCompleteIcon';
import ErrorIcon from '../icons/ErrorIcon';
import { v4 as uuidv4 } from 'uuid';

interface ITable {
  statusComplete: boolean;
  statusIncomplete: boolean;
  statusError: boolean;
}

const Table: FC<ITable> = ({
  statusComplete,
  statusIncomplete,
  statusError,
}) => {
  const filteredData = data.filter(
    (item) =>
      (statusComplete && item.status === 'COMPLETE') ||
      (statusIncomplete && item.status === 'ERROR') ||
      (statusError && item.status === 'INCOMPLETE')
  );

  return (
    <div className={styles.tableContainer}>
      {filteredData.map((elem, index) => (
        <ul key={uuidv4()} className={styles.row}>
          <li className={styles.rowElement}>{elem.firstName}</li>
          <li className={styles.rowElement}>{elem.lastName}</li>
          <li className={styles.rowElement}>{elem.carrier}</li>
          <li className={clsx(styles.rowElement, styles.cell)}>
            {elem.status.toLowerCase() === 'complete' ? (
              <CompleteIcon />
            ) : elem.status.toLowerCase() === 'incomplete' ? (
              <InCompleteIcon />
            ) : (
              <ErrorIcon />
            )}
          </li>
          <li className={clsx(styles.rowElement, styles.cell)}>
            {elem.eventDate}
          </li>
        </ul>
      ))}
      <div></div>
    </div>
  );
};
export default Table;
