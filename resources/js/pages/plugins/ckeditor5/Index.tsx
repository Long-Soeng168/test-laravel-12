import AppLayout from '@/layouts/app-layout';
import { useState } from 'react';
import MyCkeditor5 from './my-ckeditor5';

export default function Page() {
    const [data, setData] = useState(sampleData);
    return (
        <AppLayout>
            <div className="mx-auto flex h-full max-w-6xl items-center justify-center py-2">
                <MyCkeditor5 data={data} setData={setData} />
            </div>
        </AppLayout>
    );
}

const sampleData = `<h2 class="document-title" id="ee5902976f4e49a36d08e025ae4a6206a">
    Handheld emperor
</h2>
<p>
    Nintendo, a Japanese electronics company, started as a <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Hanafuda"><i>hanafuda</i> cards</a> manufacturer in 1889. In the mid-1970s, they entered the early video games market and became famous for their home video and handheld game consoles. Nintendo introduced consoles like the <strong>NES</strong>, <strong>SNES</strong>, and <strong>Wii</strong>. But the most revolutionary was for sure the <strong>Game Boy</strong>.
</p>
<h3 class="document-subtitle" id="e4e3f661f4eb7ac23958829a3415654d5">
    A countdown of Nintendo handhelds
</h3>
<figure class="image image_resized image-style-align-right" style="width:17.33%;">
    <img src="https://ckeditor.com/docs/ckeditor5/latest/assets/img/game_boy.jpg" width="384" sizes="100vw">
    <figcaption>
        The Nintendo "flagship" - handheld Game Boy
    </figcaption>
</figure>
<ol>
    <li>
        <span style="color:hsl(0,75%,60%);"><strong>Game &amp; Watch</strong></span> was Nintendo's first product offering out-of-home gaming. From 1980 to 1991, over a hundred games were released, gaining great popularity.
    </li>
    <li>
        In 1989, &nbsp;the original <span style="color:hsl(0,75%,60%);"><strong>Game Boy</strong></span> was released. The amazing new machine utilized a cartridge system, allowing the users to play a multitude of games of all kinds. This was <mark class="marker-yellow">a historical game-changer</mark>. &nbsp;
        <ol>
            <li>
                It was followed by a number of versions, such as Game Boy Color or Game Boy Advance.
            </li>
        </ol>
    </li>
    <li>
        In 2004, Nintendo introduced a new console family called the <span style="color:hsl(0,75%,60%);"><strong>Nintendo DS</strong></span>. It sported a dual LCD screen in a folded shell, with the lower one being a touchscreen.
        <ol>
            <li>
                The most prominent development was Nintendo 3DS, which offered a 3D display.
            </li>
        </ol>
    </li>
    <li>
        2017 brought the hybrid experience for both couch-preferring gamers and handheld enthusiasts with the release of the <span style="color:hsl(0,75%,60%);"><strong>Nintendo Switch</strong></span>. It offers both a TV mode with high-definition graphics and a handheld mode using the built-in 6.2" display.&nbsp;
    </li>
</ol>
<h3 class="document-subtitle" id="edabaaf383ba61aeb11c42c4872731db0">
    Handheld consoles' popularity
</h3>
<p>
    While the most recent Switch is a prevalent choice nowadays, the 2DS and 3DS consoles are still popular. The king, however, is none other than the original wonder — the Game Boy.
</p>
<figure class="table">
    <table>
        <tbody>
            <tr>
                <td style="background-color:hsl(0, 0%, 60%);">
                    <span style="color:hsl(60,75%,60%);">Console</span>
                </td>
                <td style="background-color:hsl(0, 0%, 60%);">
                    <span style="color:hsl(60,75%,60%);">Production dates</span>
                </td>
                <td style="background-color:hsl(0, 0%, 60%);">
                    <span style="color:hsl(60,75%,60%);">Pieces sold (2021)</span>
                </td>
            </tr>
            <tr>
                <td style="background-color:hsl(0, 0%, 90%);">
                    Game &amp; Watch
                </td>
                <td style="background-color:hsl(0, 0%, 90%);">
                    1980-1991, 2020-2021
                </td>
                <td style="background-color:hsl(0, 0%, 90%);">
                    44 million
                </td>
            </tr>
            <tr>
                <td>
                    Game Boy
                </td>
                <td>
                    1989-2010
                </td>
                <td>
                    <span style="color:hsl(0,75%,60%);">201 million</span> <sup>1</sup>
                </td>
            </tr>
            <tr>
                <td style="background-color:hsl(0, 0%, 90%);">
                    Nintendo DS
                </td>
                <td style="background-color:hsl(0, 0%, 90%);">
                    2011-2020
                </td>
                <td style="background-color:hsl(0, 0%, 90%);">
                    76 million <sup>2</sup>
                </td>
            </tr>
            <tr>
                <td>
                    Switch
                </td>
                <td>
                    since 2017
                </td>
                <td>
                    140 million <sup>3</sup>
                </td>
            </tr>
            <tr>
                <td style="background-color:hsl(0, 0%, 90%);" colspan="3">
                    <span style="font-size:10px;"><sup>1 </sup>119 million Game Boy and Game Boy Color variants, 82 million Game Boy Advance variants.</span><br>
                    <span style="font-size:10px;"><sup>2</sup> Including all versions: DS, DSi, 2DS, 3DS, and New 2DS/3DS variants.</span><br>
                    <span style="font-size:10px;"><sup>3</sup> As of early 2024.</span>
                </td>
            </tr>
        </tbody>
    </table>
</figure>
<h3 class="document-subtitle" id="e2c6b50a4a25cb5d92e0ad0b0b6f6a1a5">
    Handheld gaming experience
</h3>
<blockquote class="side-quote">
    <p style="text-align:right;">
        It's dangerous to go alone! Take this.&nbsp;<br>
        <span style="font-size:18px;"><i>The Legend of Zelda, 1986</i></span>
    </p>
</blockquote>
<p>
    Games offered by Nintendo include multiple genres, out of which the famous platformer arcade <i>Super Mario</i> <img class="image_resized" style="width:2.3%;" src="https://ckeditor.com/docs/ckeditor5/latest/assets/img/mario.png"> and the adventure role-play <i>Legend of Zelda</i> <img class="image_resized" style="width:2.3%;" src="https://ckeditor.com/docs/ckeditor5/latest/assets/img/link.png"> series are probably the most iconic.
</p>
<hr>
<p>
    Games that can be played on the handheld family include (examples of games listed):
</p>
<ul>
    <li>
        Action &amp; adventure games
        <ul>
            <li>
                The <i>Legend of Zelda</i> series
            </li>
            <li>
                <i>Chrono Trigger</i>
            </li>
        </ul>
    </li>
    <li>
        First-person action games
        <ul>
            <li>
                <i>Splatoon</i>
            </li>
        </ul>
    </li>
    <li>
        Role-playing games (RPG)
        <ul>
            <li>
                The <i>Pokémon</i> series
            </li>
            <li>
                The <i>Final Fantasy</i> series
            </li>
        </ul>
    </li>
</ul>`;
