import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>12 de junho de 2021</time>
                        <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quas reiciendis quibusdam suscipit voluptatum. Illum commodi iusto magni inventore cum reprehenderit voluptatum sed rem saepe. Quis architecto eum magnam eaque?</p>
                    </a>
                    <a href="#">
                        <time>12 de junho de 2021</time>
                        <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quas reiciendis quibusdam suscipit voluptatum. Illum commodi iusto magni inventore cum reprehenderit voluptatum sed rem saepe. Quis architecto eum magnam eaque?</p>
                    </a>
                    <a href="#">
                        <time>12 de junho de 2021</time>
                        <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quas reiciendis quibusdam suscipit voluptatum. Illum commodi iusto magni inventore cum reprehenderit voluptatum sed rem saepe. Quis architecto eum magnam eaque?</p>
                    </a>
                </div>
            </main>
        </>
    );
}