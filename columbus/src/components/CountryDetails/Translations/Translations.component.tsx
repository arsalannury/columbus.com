import Form from "react-bootstrap/Form";
import "./translations.css";

const TranslationsComponent = ({ translations }: any) => {
  const translationsToArray = Object.values(translations);

  return (
    <>
      <Form.Select size="sm" className="custom-select">
        <option className="custom-option" selected disabled>Translation</option>
        {translationsToArray !== undefined &&
          translationsToArray.map((object: any, index: number) => (
            <option className="custom-option" disabled>{object.official}</option>
          ))}
      </Form.Select>
    </>
  );
};

export default TranslationsComponent;
