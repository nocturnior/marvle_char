import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

const Home = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        'https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"'
      );
      const json = await res.json();
      setChars(json.data.results);
    })();
  }, []);

  return (
    <>
      <h2 style={{ fontSize: '30px', fontWeight: '700', marginBottom: '12px' }}>캐릭터</h2>
      <Wrapper>
        {chars.map((char) => (
          <Link to={{ pathname: `character/${char.id}` }} key={char.id} state={{ name: char.name }}>
            <CharWapper>
              <ImgWrap>
                <CharImg src={`${char.thumbnail.path}.${char.thumbnail.extension}`} />
              </ImgWrap>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ marginBottom: '8px', color: '#ccc' }}>Name</span>
                <CharName>{char.name}</CharName>
              </div>
              {/* {char.series.items.map((item) => (
                <CharDesc key={item.id}>{item.item}</CharDesc>
              ))} */}
            </CharWapper>
          </Link>
        ))}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: min-content;
  overflow: scroll;
  margin-bottom: 30px;
  border-radius: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CharWapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 600px;
  height: 200px;
  padding: 10px 30px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(3px);
  border-radius: 20px;
`;

const ImgWrap = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  width: 180px;
  height: 180px;
  border: 0px;
  margin-right: 20px;
  padding: 0px;
`;

const CharImg = styled.img`
  box-sizing: border-box;
  display: flex;
  width: 200px;
  height: 200px;
  padding: 0px;
  border: none;
  margin: auto;
  object-fit: cover;
  transition: all 0.3s ease-in-out 0s;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out 0s;
  }
`;

const CharName = styled.h3`
  font-size: 24px;
  font-weight: 700;
`;

const CharDesc = styled.p`
  font-size: 18px;
  color: #ddd;
`;

export default Home;
