import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { charId } = useParams();
  const [details, setDetails] = useState([]); //
  console.log(details)

  useEffect(() => {
    (async () => {
      const res = await (
        await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${charId}`)
      ).json();
      setDetails(res.data.results);
    })();
  }, [charId]);
  return (
    <>
      {/* {details.map(detail=>(<h1>{detail.name}</h1>))} */}
      <h2>gdgd</h2>
    </>
  );
}

export default Detail;
