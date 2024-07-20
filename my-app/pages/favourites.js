import { useAtom } from 'jotai';
import { favouritesAtom } from '@/store';
import { Row, Col, Card } from 'react-bootstrap';
import ArtworkCard from '@/components/ArtworkCard';

const Favourites = () => {
  const [favouritesList] = useAtom(favouritesAtom);

  return (
    <>
      <Row className="gy-4">
        {favouritesList.length > 0 ? (
          favouritesList.map((objectID) => (
            <Col lg={3} key={objectID}>
              <ArtworkCard objectID={objectID} />
            </Col>
          ))
        ) : (
          <Card>
            <h4>Nothing Here</h4>
            <p>Try adding some new artwork to the list.</p>
          </Card>
        )}
      </Row>
    </>
  );
};

export default Favourites;
