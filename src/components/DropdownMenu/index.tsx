import { FC, useState, useRef } from 'react';
import styles from './dropdown_menu.module.scss';
import DropdownIcon from '../icons/DropdownIcon';
import useClickOutside from '../../hooks/useClickOutside';

interface IDropdown {
  statusComplete: boolean;
  statusIncomplete: boolean;
  statusError: boolean;
  selectCompleteHandler: (val: boolean) => void;
  selectIncompleteHandler: (val: boolean) => void;
  selectErrorHandler: (val: boolean) => void;
}

const Dropdown: FC<IDropdown> = ({
  statusComplete,
  statusIncomplete,
  statusError,
  selectCompleteHandler,
  selectIncompleteHandler,
  selectErrorHandler,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const drobdownRef = useRef(null);

  useClickOutside(drobdownRef, () => setIsOpen(false));

  const checkboxHandler = (status: string): void => {
    if (status.toLowerCase() === 'complete') {
      selectCompleteHandler(!statusComplete);
    } else if (status.toLowerCase() === 'incomplete') {
      selectIncompleteHandler(!statusIncomplete);
    } else {
      selectErrorHandler(!statusError);
    }
  };

  return (
    <div ref={drobdownRef} className={styles.block}>
      <div className={styles.tabContainer} onClick={() => setIsOpen(!isOpen)}>
        <p>Status</p>
        <DropdownIcon />
      </div>

      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {['Complete', 'Incomplete', 'Errored'].map((item, index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => checkboxHandler(item)}
                  checked={
                    item.toLowerCase() === 'complete'
                      ? statusComplete
                      : item.toLowerCase() === 'incomplete'
                      ? statusIncomplete
                      : statusError
                  }
                />
                {item}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Dropdown;
