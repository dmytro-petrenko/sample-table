import { FC } from 'react';

const InCompleteIcon: FC = () => {
  return (
    <svg style={{ width: '20px', height: '20px' }} viewBox="0 0 42 42">
      <circle fill="#FFF6F5" cx="21" cy="21" r="20" />
      <path
        fill="#ff9933"
        d="M21,1C9.954,1,1,9.954,1,21c0,11.045,8.954,20,20,20c11.045,0,20-8.955,20-20C41,9.954,32.045,1,21,1L21,1z
	"
      />
      {/* M21,5c9.378,0,16,6.633,16,16c0,9.366-6.622,16-16,16c-9.377,0-16-6.634-16-16 C5,11.633,11.623,5,21,5 
      #DB3A3E*/}
      <path
        fill="#fff"
        d="M27,23c0,0.553-0.447,1-1,1H16c-0.552,0-1-0.447-1-1v-4c0-0.552,0.448-1,1-1h10c0.553,0,1,0.448,1,1V23z"
      />
    </svg>
  );
};
export default InCompleteIcon;
