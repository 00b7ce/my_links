import LinkCard from './components/LinkCard';
import './App.css';

function App() {
    const links = [
        { url: 'https://mkb-toolbox.hateblo.jp', title: 'Blog', icon: 'hatenablog-logo.svg' },
        { url: 'https://github.com/00b7ce', title: '00b7ce', icon: 'github-mark-white.svg' },
        { url: 'https://x.com/mkb_rev2', title: '@mkb_rev2', icon: 'X_logo.svg' },
        { url: 'https://bsky.app/profile/bsky.mekabu.io', title: '@bsky.mekabu.io', icon: 'bluesky_media_kit_logo.svg' },
        { url: 'https://bsky.app/profile/bsky.mekabu.io', title: '@mkb@misskey.io', icon: 'misskey.svg' },
        // 他のリンクを追加
    ];

    return (
        <div className="container">
            <h1>mekabu.io</h1>
            {links.map((link) => (
                <LinkCard key={link.url} {...link} />
            ))}
        </div>
    );
}

export default App;