import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'My name is Matthew Hongmin Park and my profession is the Founder and developer of Spatio Labs',
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-serif text-3xl font-bold">About Me</h1>
      <p className="my-5 text-sm text-neutral-800 dark:text-neutral-200">
        My name is Matthew Hongmin Park, I am a devout Christian, and I enjoy building software.
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          I find myself captivated by the boundless potential of technology and its capacity to propel humanity to new frontiers. This interest of mine has found a home at Spatio Labs, a company devoted to enhancing how we engage with technology through artificial intelligence and the next computing interface, spatial computing.
        </p>
        <hr />
        <p>
          Through Spatio Labs, I am committed to creating a future where technology is seamlessly integrated into our daily lives, empowering us to achieve more than we ever thought possible. With a focus on innovation and collaboration, we are tackling some of the world's most pressing challenges and driving progress towards a brighter future for all.
        </p>
      </div>
    </section>
  );
}
