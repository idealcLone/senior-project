import React from 'react';

import styles from './FAQ.module.scss';
import { SearchBar } from '../components/SearchBar';
import { IFAQ } from '../types';

const data: IFAQ[] = [
  {
    id: 1,
    question: 'What is VA?',
    answer: 'VK public',
  },
  {
    id: 2,
    question: 'How to play DotA in dormitory?',
    answer: 'Install VPN',
  },
  {
    id: 3,
    question: 'How to play DotA in dormitory?',
    answer: 'Install VPN',
  },
  {
    id: 4,
    question: 'How to play DotA in dormitory?',
    answer: 'Install VPN',
  },
  {
    id: 5,
    question: 'How to play DotA in dormitory?',
    answer: 'Install VPN',
  },
];

export const FAQ: React.FC = () => {
  const [faqs, setFaqs] = React.useState<IFAQ[]>([]);
  const [filtered, setFiltered] = React.useState<IFAQ[]>([]);

  const getFaqs = React.useCallback(() => {
    setFaqs(data);
    setFiltered(data);
  }, []);

  React.useEffect(() => {
    document.title = 'FAQ';
    getFaqs();
  }, []);

  return (
    <div className={styles.container}>
      {faqs.length > 0 && <SearchBar data={faqs} setData={setFiltered} fields={['question']} />}
      <ul>
        {filtered.map(faq => (
          <li key={faq.id}>
            <div className={styles.question}>{faq.question}</div>
            <div className={styles.answer}>{faq.answer}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
