import React from 'react';
import { AdminContext } from '../context';
import { Button, ButtonGroup, Form } from './styles';
import api from '../../../utils/api';
import { Spinner } from '../../../components/Spinner';

export const FAQDialog = ({ faqId, setOpen }) => {
  const [data, setData] = React.useContext(AdminContext);

  const [faqInfo, setFaqInfo] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (Number.isInteger(faqId)) {
      setLoading(true);
      api.get(`/faq/${faqId}`).then((res) => {
        setLoading(false);
        setFaqInfo({ ...res.data });
      });
    }
  }, [faqId]);

  if (loading) {
    return <Spinner />;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFaqInfo({
      ...faqInfo,
      [name]: value
    });
  };

  const handleDeleteButton = (e) => {
    e.preventDefault();

    api.delete(`/faq/${faqInfo.id}`).then(() => {
      setOpen(false);
      setData(data.filter((item) => item.id !== faqId));
    });
  };

  const handleSaveButton = (e) => {
    e.preventDefault();

    if (Number.isInteger(faqId)) {
      api.put(`/faq/update/${faqInfo.id}/`, { ...faqInfo }).then((res) => {
        setOpen(false);
        const index = data.findIndex((item) => item.id === faqId);
        setData([...data.slice(0, index), res.data, ...data.slice(index + 1)]);
      });
    } else {
      api.post(`/faq/create/`, { ...faqInfo }).then((res) => {
        setFaqInfo({});
        setData([...data, res.data]);
      });
    }
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
        {Number.isInteger(faqId) && (
          <Button delete onClick={handleDeleteButton}>
            Delete
          </Button>
        )}
      </ButtonGroup>
    </Form>
  );
};
