import "./translations.css";

const TranslationsComponent = ({ translations }: any) => {
  const translationsToArray = translations && Object.values(translations);

  return (
    <>
      <div className="my-3 my-md-0 my-lg-0 my-xl-0 select-wrapper w-100 d-flex align-items-center justify-content-center position-relative">
        <i
          className={`icon-select bi bi-caret-down-fill text-black position-absolute`}
        ></i>
        <select className="custom-select">
          <option selected disabled>
            Translation
          </option>
          {translationsToArray !== undefined &&
            translationsToArray.map((object: any, index: number) => (
              <option key={index} disabled>
                {object.official}
              </option>
            ))}
        </select>
      </div>
    </>
  );
};

export default TranslationsComponent;
