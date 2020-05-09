/// <reference path="../modules/global.d.tsx" />

export default () => {
    if(global.srcCSSTransitionCleanID)
        global.srcCSSTransitionCleanID()
    
    if(global.srcSlideTransitionCleanID)
        global.srcSlideTransitionCleanID()

    if(global.srcWaveEffectCleanID)
        global.srcWaveEffectCleanID()
}