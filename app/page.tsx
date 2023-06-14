import Link from 'next/link';
import { getBlogViews } from 'lib/metrics';
import { name, about } from 'lib/info';

export const revalidate = 60;

export default async function HomePage() {
  return (
    <section>
      <h1 className="font-serif text-2xl font-bold">{name}</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200 text-xs">
        {about()}
      </p>
    </section>
  );
}
