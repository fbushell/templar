import dom from "./dom";


import template from "properjs-template";


const $_jsCanvases = dom.body.find( ".js-painter-canvas" ).detach();


/**
 *
 * @public
 * @module painter
 * @description Handles templating like WHAT!!??.
 *
 */
const painter = {
    /**
     *
     * @public
     * @member canvases
     * @memberof painter
     * @description Holds the templates.
     *
     */
    canvases: {},


    /**
     *
     * @public
     * @method init
     * @memberof painter
     * @description Initialize the artist, load the canvases.
     *
     */
    init () {
        let i = $_jsCanvases.length;
        let $canvas = null;

        for ( i; i--; ) {
            $canvas = $_jsCanvases.eq( i );

            this.canvases[ $canvas[ 0 ].id ] = $canvas[ 0 ].innerHTML;
        }

        console.log( "painter initialized" );
    },


    /**
     *
     * @public
     * @method brushGridItem
     * @param {object} item The data
     * @memberof painter
     * @description Render the DOM for a grid item.
     * @returns {string}
     *
     */
    brushGridItem ( item ) {
        return template( this.canvases.gridItem, item );
    },


    /**
     *
     * @public
     * @method brushVideoItem
     * @param {object} item The data
     * @memberof painter
     * @description Render the DOM for a video item.
     * @returns {string}
     *
     */
    brushVideoItem ( item ) {
        return template( this.canvases.videoItem, item );
    }
};



/******************************************************************************
 * Export
*******************************************************************************/
export default painter;