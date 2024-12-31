// EmptyState.tsx
import React from 'react';
import styles from './empty-state.module.scss';

interface EmptyStateProps {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
  children?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No Data Found',
  message = 'There are no items to display at the moment.',
  icon,
  action,
  children
}) => {
  return (
    <div className={styles.emptyState}>
      <div className={styles.content}>
        {icon ? (
          <div className={styles.icon}>{icon}</div>
        ) : (
          <div className={styles.defaultIcon}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
        )}
        
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.message}>{message}</p>
        
        {children && <div className={styles.customContent}>{children}</div>}
        
        {action && (
          <button 
            className={styles.actionButton}
            onClick={action.onClick}
          >
            {action.label}
          </button>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
