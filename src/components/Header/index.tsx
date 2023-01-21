import { FC } from 'react';
import Dropdown from '../DropdownMenu';
import styles from './header.module.scss';
import clsx from 'clsx';
import { TStatus } from '../../App';

interface IHeader {
  statusComplete: boolean;
  statusIncomplete: boolean;
  statusError: boolean;
  statusCompleteHandler: (val: boolean) => void;
  statusIncompleteHandler: (val: boolean) => void;
  statusErrorHandler: (val: boolean) => void;
}

const Header: FC<IHeader> = ({
  statusComplete,
  statusIncomplete,
  statusError,
  statusCompleteHandler,
  statusIncompleteHandler,
  statusErrorHandler,
}) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerItem}>First Name</div>
      <div className={styles.headerItem}>Last Name</div>
      <div className={styles.headerItem}>Carrier</div>
      <Dropdown
        statusComplete={statusComplete}
        statusIncomplete={statusIncomplete}
        statusError={statusError}
        selectCompleteHandler={statusCompleteHandler}
        selectIncompleteHandler={statusIncompleteHandler}
        selectErrorHandler={statusErrorHandler}
      />
      <div className={clsx(styles.headerItem, styles.dateItem)}>Date</div>
    </div>
  );
};
export default Header;
