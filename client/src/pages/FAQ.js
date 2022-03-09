import React from "react";
import { SearchBar } from "../styles";
import { Container } from "./styles";
import api from "../utils/api";
import { USEFUL_LINKS } from "../consts/data";

export const FAQ = () => {
  const [faqs, setFaqs] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");

  React.useEffect(() => {
    api.get("faq/all/").then((res) => {
      setFaqs(res.data);
      setData(res.data);
    });
  }, []);

  React.useEffect(() => {
    setData(
      faqs.filter((faq) =>
        faq.question.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  return (
    <Container>
      <SearchBar
        placeholder={"Search for a question"}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="body">
        <div className="faq">
          {data.map((faq) => (
            <div className="qa">
              <div className="question">{faq.question}</div>
              <div className="answer">{faq.answer}</div>
            </div>
          ))}
        </div>
        <ul className="useful-links">
          <h3>Useful Links</h3>
          {USEFUL_LINKS.map((link) => (
            <li key={link}>{link}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
