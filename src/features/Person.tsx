import Link from "next/link";
import { Person } from "app/types";

type PersonProps = {
  person: Person;
};

export default function PersonComponent({ person }: PersonProps) {
  return (
    <li>
      <Link href="/person/[id]" as={`/person/${person.id}`}>        
        <div className="w-full text-violet-900">{person.name}</div>
      </Link>
    </li>
  );
}
