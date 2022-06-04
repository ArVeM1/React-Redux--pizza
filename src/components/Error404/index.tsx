import React from 'react';
import styles from './Error404.module.scss';

export const Error404: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>К сожалени данная страница отсутствует в нашем интернет-магазине</p>
    </div>
  );
};
