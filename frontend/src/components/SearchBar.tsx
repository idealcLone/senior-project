import React from 'react';

import styles from './SearchBar.module.scss';

type PropsType = {
  data: any[];
  setData: (data: any[]) => void;
  fields: string[];
};

export const SearchBar: React.FC<PropsType> = ({ data, setData, fields }) => {
  const [searchText, setSearchText] = React.useState<string>('');
  const [initialData, setInitialData] = React.useState<any[]>(data);

  React.useEffect(() => {
    searchText
      ? setData(
          initialData.filter(faq =>
            fields.some(field => faq[field].toLowerCase().includes(searchText.toLowerCase()))
          )
        )
      : setData(initialData);
  }, [searchText]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchText(value);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Search for a question"
      />
    </div>
  );
};
