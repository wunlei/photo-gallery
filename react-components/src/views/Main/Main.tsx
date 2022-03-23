import Card from 'components/Card/Card';
import CardsData from 'components/Card/CardsData';
import SearchBar from 'components/SearchBar/SearchBar';
import './Main.scss';

function MainPage() {
  return (
    <main className="page page-main">
      <SearchBar />
      <div className="cards-container">
        {CardsData.map((data) => (
          <Card
            key={data.id}
            imgUrl={data.urls.regular}
            description={data.alt_description}
            likes={data.likes}
            views={data.views}
            downloads={data.downloads}
            author={data.user.name}
          />
        ))}
      </div>
    </main>
  );
}

export default MainPage;
