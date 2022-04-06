import React from 'react';
import Card from 'components/Card/Card';
import Loader from 'components/Loader/Loader';
import SearchBar from 'components/SearchBar/SearchBar';
import { getSearchResults } from 'api/Api';
import { PropsMainPage, StateMainPage } from './Main.types';
import './Main.scss';

class MainPage extends React.Component<PropsMainPage, StateMainPage> {
  query = React.createRef<HTMLInputElement>();
  constructor(props: PropsMainPage) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async handleInputChange() {
    if (this.query.current) {
      const value = this.query.current.value.trim();
      if (value) {
        this.setState({ isLoading: true });
        console.log(this.query.current.value);
        const data = await getSearchResults(this.query.current.value);
        this.setState({ isLoading: false });
        this.setState({ data: data.results });
      }
    }
  }

  render() {
    return (
      <main className="page page-main">
        <h3 className="page__title">Search for images</h3>
        <SearchBar handleInputChange={this.handleInputChange} reference={this.query} />
        <div className="cards-container">
          {this.state.isLoading ? <Loader /> : null}
          {this.state.data.map((data) => (
            <Card
              key={data.id}
              imgUrl={data.urls.regular}
              author={data.user.name}
              id={data.id}
              description={data.alt_description}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default MainPage;
