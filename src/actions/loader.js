export const START_LOADER = 'START_LOADER';
export const STOP_LOADER = 'STOP_LOADER';

export function startLoader() {
    return {
        type: START_LOADER
    };
}
export function stopLoader() {
    return {
        type: STOP_LOADER
    };
}
