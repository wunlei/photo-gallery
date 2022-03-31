import React from 'react';
import FromContribute from 'components/FormContribute/FormContribute';

class Contribute extends React.Component {
  render() {
    return (
      <main className="page page-contribute">
        <h3 className="page__title">Contribute</h3>
        <FromContribute />
      </main>
    );
  }
}

export default Contribute;
