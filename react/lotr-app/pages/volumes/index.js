import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";


function volumesPage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <ul>
      {volumes.map((vol) => (
          <li key={vol.slug}>
            <Link href={`/volumes/${vol.slug}`}>
              <Image src={vol.cover} alt={vol.title} width={140} height={230} />
              <h4>{vol.title}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default volumesPage;
