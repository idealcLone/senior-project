import React from 'react';
import { AdminContext } from '../context';
import { Button, ButtonGroup, Form } from './styles';
import api from '../../../utils/api';
import { Spinner } from '../../../components/Spinner';

export const QuestionDialog = ({ questionId, setOpen }) => {
  const [data, setData] = React.useContext(AdminContext);

  const [faqInfo, setFaqInfo] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (Number.isInteger(questionId)) {
      setLoading(true);
      api.get(`/questions/${questionId}`).then(res => {
        setLoading(false);
        setFaqInfo({ id: res.data.id, question: res.data.text });
      });
    }
  }, [questionId]);

  if (loading) {
    return <Spinner />;
  }

  const handleInputChange = e => {
    const { name, value } = e.target;

    setFaqInfo({
      ...faqInfo,
      [name]: value,
    });
  };

  const handleDeleteButton = e => {
    e.preventDefault();

    api.delete(`/questions/${faqInfo.id}`).then(() => {
      setOpen(false);
      setData(data.filter(item => item.id !== questionId));
    });
  };

  const handleSaveButton = e => {
    e.preventDefault();
    api.post(`/questions/answer/`, { ...faqInfo }).then(res => {
      setOpen(false);
      setData(data.filter(faq => faq.id !== questionId));
    });
  };

  return (
    <Form>
      <p className={'dialog-header'}>FAQ</p>
      <div className={'dialog-body'}>
        <div className="form-data">
          <div className="field">
            <label htmlFor="question">Question</label>
            <textarea
              id={'question'}
              name={'question'}
              cols={40}
              rows={5}
              value={faqInfo.question || ''}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label htmlFor="answer">Answer</label>
            <textarea
              id={'answer'}
              name={'answer'}
              cols={40}
              rows={5}
              value={faqInfo.answer || ''}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <ButtonGroup className={'dialog-footer'}>
        <Button save onClick={handleSaveButton}>
          Save
        </Button>
        {Number.isInteger(questionId) && (
          <Button delete onClick={handleDeleteButton}>
            Delete
          </Button>
        )}
      </ButtonGroup>
    </Form>
  );
};
