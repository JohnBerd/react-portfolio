import React from 'react'
import './css/set1.css'
import './css/demo.css'
import './css/normalize.css'

import { makeStyles } from '@material-ui/core';

export default function ImageHover(props) {
    return (
        <div class="grid" >
            <figure class={`effect-${props.name}`}>
                <div>
                    <img
                        src={props.image}
                        alt="img12"
                    />
                </div>
                <figcaption>
                    <div>
                        <h2>{props.title}</h2>
                        <p>{props.description}</p>
                    </div>
                </figcaption>
            </figure>
        </div>
    )
}