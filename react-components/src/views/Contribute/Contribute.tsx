import React from 'react';
import CardContribute from 'components/CardContribute/CardContribute';
import FormContribute from 'components/FormContribute/FormContribute';
import { ICardContribute } from 'components/FormContribute/FormContribute.types';

import './Contribute.scss';

interface IState {
  inputCards: ICardContribute[];
}

type Props = Record<string, never>;

class Contribute extends React.Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputCards: [],
    };
    this.handleCardsUpdate = this.handleCardsUpdate.bind(this);
  }

  handleCardsUpdate(data: ICardContribute) {
    this.state.inputCards.push(data);
    this.setState((state: IState) => ({
      inputCards: state.inputCards,
    }));
  }

  render() {
    return (
      <main className="page page-contribute">
        <h3 className="page__title">Contribute</h3>
        <section className="page-contribute-content">
          <FormContribute handleCardsUpdate={this.handleCardsUpdate} />
          <div className="cards-contribute-container">
            {this.state.inputCards.map((el) => (
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
}

export default Contribute;
