import { useRouter } from "next/router";
import Link from "next/link";
import { volumes } from "../../lib/data";
import Image from "next/image";

function OneVolume() {
  const router = useRouter();
  const { slug } = router.query;

  const volume = volumes.find((v) => v.slug === slug);
  const currentVolumeIndex = volumes.indexOf(volume);
  const previousVolumeIndex = currentVolumeIndex - 1;
  const nextVolumeIndex = currentVolumeIndex + 1;

  if (!volume) {
    return <h1>Loading ...</h1>;
  }

  return (  
    <div>
      <Link href="/volumes">Back to All Volumes</Link>
      <h1>{volume.title}</h1>

      {volume.cover && (
        <Image src={volume.cover} alt={volume.title} width={140} height={230} />
      )}
      <p>{volume.description}</p>

      <ul>
        {volume.books?.map(book => (
          <li key={book.title}>{book.ordinal} - {book.title}</li>
        ))}
      </ul>

      <div> 
        {previousVolumeIndex >= 0 && (
          <Link href={`/volumes/${volumes[previousVolumeIndex].slug}`} style={{ margin: "20px", color: "grey" }}>
            Previous - {volumes[previousVolumeIndex].title}
          </Link>
        )}
        {nextVolumeIndex < volumes.length && (
          <Link href={`/volumes/${volumes[nextVolumeIndex].slug}`} style={{ margin: "20px", color: "green" }}>
            Next - {volumes[nextVolumeIndex].title}
          </Link>
        )}
      </div>
    </div>
  );
}

export default OneVolume;
