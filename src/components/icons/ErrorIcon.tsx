import { FC } from 'react';

const ErrorIcon: FC = () => {
  return (
    <svg style={{ height: '20px', width: '20px' }} viewBox="0 0 32 32">
      <circle cx="16" cy="16" id="BG" r="16" fill="#D72828" />
      <path
        d="M14.5,25h3v-3h-3V25z M14.5,6v13h3V6H14.5z"
        id="Exclamatory_x5F_Sign"
        fill="#E6E6E6"
      />
    </svg>
  );
};
export default ErrorIcon;
