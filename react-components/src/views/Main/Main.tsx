import React, { useState } from 'react';
import Card from 'components/Card/Card';
import Loader from 'components/Loader/Loader';
import SearchBar from 'components/SearchBar/SearchBar';
import { getSearchResults } from 'api/Api';
import { ApiSearchData } from 'api/Api.types';
import './Main.scss';

function MainPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<ApiSearchData[]>([]);

  async function handleInputChange(value: string) {
    if (value) {
      const trimmedValue = value.trim();
      if (trimmedValue) {
        setIsLoading(true);

        const data = await getSearchResults(trimmedValue);

        setIsLoading(false);
        setData(data.results);
      }
    }
  }

  return (
    <main className="page page-main">
      <h3 className="page__title">Search for images</h3>
      <SearchBar handleInputChange={handleInputChange} />
      <div className="cards-container">
        {isLoading ? <Loader /> : null}
        {data.map((data) => (
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

export default MainPage;
