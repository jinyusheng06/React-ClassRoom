import {get,post} from './index'
export function getSliders() {
    return get('/api/sliders')
}