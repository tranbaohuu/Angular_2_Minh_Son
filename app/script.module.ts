declare var Parallax: any;

import './Scripts/parallax.min';
export class ScriptComponent {
    createMemGauge() {
        new Parallax();  //drawGauge() is a function inside d3gauge.js
    }
}