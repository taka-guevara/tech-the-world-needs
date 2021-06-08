import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Kentaro Takata'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0 inner">

          <a href="/home" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">Tech The World Needs</a><br />
          <span className="text-xs text-grey-dark">世界を変える技術がここに</span>

        </div>

        <div className="sm:mb-0 self-center">
            <a href="#" className="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">Link1</a>
            <a href="#" className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">Link2</a>
            <a href="#" className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">Link3</a>
        </div>
      </nav>
      <main>{children}</main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}