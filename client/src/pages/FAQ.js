import React from 'react';

import { SearchBar } from '../styles';
import { Container } from './styles';
import api from '../utils/api';

export const FAQ = () => {
  const [faqs, setFaqs] = React.useState([]);
  const [links, setLinks] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');
  const [question, setQuestion] = React.useState('');

  const getLinks = React.useCallback(() => {
    api
      .get('links/all/')
      .then(res => setLinks(res.data))
      .catch(err => console.log(err));
  }, []);

  const getFaqs = React.useCallback(() => {
    api
      .get('faqs/all/')
      .then(res => {
        setFaqs(res.data);
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  React.useEffect(() => {
    getFaqs();
    getLinks();
  }, [getFaqs, getLinks]);

  React.useEffect(() => {
    setData(faqs.filter(faq => faq.question.toLowerCase().includes(searchText.toLowerCase())));
  }, [faqs, searchText]);

  const handleAskQuestion = () => {
    api
      .post('questions/create/', { text: question })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
      .finally(() => setQuestion(''));
  };

  return (
    <Container>
      <SearchBar
        placeholder={'Search for a question'}
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <div className="body">
        <div className="faq">
          {data.map(faq => (
            <div className="qa" key={faq.id}>
              <div className="question">{faq.question}</div>
              <div className="answer">
                <pre>{faq.answer}</pre>
              </div>
            </div>
          ))}
        </div>
        <ul className="useful-links">
          <h3>Useful Links</h3>
          {links.map(link => (
            <li key={link.id} onClick={() => window.open(`https://${link.url}`, '_blank')}>
              {link.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="ask-q">
        <textarea
          rows={10}
          placeholder={'Ask a question, we will try to find an answer to it.'}
          value={question}
          onChange={e => setQuestion(e.target.value)}
        />
        <button onClick={handleAskQuestion}>Submit</button>
      </div>
    </Container>
  );
};
