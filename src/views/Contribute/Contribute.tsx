import React from 'react';
import CardContribute from 'components/CardContribute/CardContribute';
import FormContribute from 'components/FormContribute/FormContribute';
import { ICardContribute } from 'components/FormContribute/FormContribute.types';
import { useAppSelector } from 'store/store';
import './Contribute.scss';
import { formDataSelector } from 'store/selectors/selectors';

function Contribute() {
  const formData = useAppSelector(formDataSelector);
  return (
    <main className="page page-contribute">
      <h3 className="page__title">Contribute</h3>
      <section className="page-contribute-content">
        <FormContribute />
        <div className="cards-contribute-container">
          {formData.map((el: ICardContribute) => (
            <CardContribute
              key={el.imgUrl}
              name={el.name}
              country={el.country}
              imgUrl={el.imgUrl}
              date={el.date}
              filter={el.filter}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Contribute;
