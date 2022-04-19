import React, { useContext, useState } from 'react';
import Card from 'components/Card/Card';
import Loader from 'components/Loader/Loader';
import SearchBar from 'components/SearchBar/SearchBar';
import { getSearchResults } from 'api/Api';
import { AppContext } from 'contexts/AppContext';
import './Main.scss';

function MainPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { searchData, updateSearchData } = useContext(AppContext);

  async function handleInputChange(value: string) {
    if (value) {
      const trimmedValue = value.trim();
      if (trimmedValue) {
        setIsLoading(true);
        const data = await getSearchResults(trimmedValue);
        setIsLoading(false);
        updateSearchData(data.results);
      }
    }
  }

  return (
    <main className="page page-main">
      <h3 className="page__title">Search for images</h3>
      <SearchBar handleInputChange={handleInputChange} />
      <div className="cards-container">
        {isLoading ? <Loader /> : null}
        {searchData.map((data) => (
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
