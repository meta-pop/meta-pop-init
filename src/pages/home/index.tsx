import { t } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import PersonComponent from "app/features/Person";
import { Person } from "app/types";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Index() {
  const { i18n } = useLingui();
  const { data, error } = useSWR("/api/people", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div>当前多语言:{i18n._(t`test`)}</div>
      <ul>
        {data.map((p: Person) => (
          <PersonComponent key={p.id} person={p} />
        ))}
      </ul>
    </>
  );
}
