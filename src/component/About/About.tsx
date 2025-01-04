import React from "react";
import { getImageUrl } from '../../utils';

export const About = () => {
    return (
        <section>
            <h2>About</h2>
            <div>
                <img src={getImageUrl("about/aboutImage.png")} alt="Me"/>
                <ul>
                    <li>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                    </li>
                </ul>
            </div>
        </section>
    );
}