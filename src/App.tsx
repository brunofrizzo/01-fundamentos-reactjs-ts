import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "https://github.com/brunofrizzo.png",
            name: "Bruno frizzo",
            role: "cto Verden"
        },
        content: [
            { type: 'paragraph', content: "Ola mundo" },
            { type: 'paragraph', content: "vou postar meus projetos do ignite aqui" },
            { type: 'link', content: "acesse aqui" },
        ],
        publishedAt: new Date('2022-10-05 10:00:00'),
    },
    {
        id: 2,
        author: {
            avatarUrl: "https://github.com/felipecechin.png",
            name: "Felipe Cechin",
            role: "cto EasyAuth"
        },
        content: [
            { type: 'paragraph', content: "Ola krip" },
            { type: 'paragraph', content: "Esses sao os projetos do krip" },
            { type: 'link', content: "acesse aqui" },
        ],
        publishedAt: new Date('2022-10-08 10:00:00'),
    },
];

export function App() {
    return (
        <div>
            <Header/>
            
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    { posts.map(post => {
                        return (
                            <Post
                                key={post.id} 
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt}
                            />
                        )
                    }) }
                </main>
            </div>
        </div>
    )
}