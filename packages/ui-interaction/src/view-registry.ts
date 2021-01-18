export type ConfirmationType = 'error' | 'warning' | 'info' | 'success';
export interface Interaction {
    tag?: string;
    url?: string;
    classifiers?: string;
    headerIcon?: string;
    parentClassifiers?: string;
    parentSettings?:any;
}
const viewRegistry: {[key: string]: Interaction} = {};

export const getViewOptions = (id: string) => viewRegistry[id];

const registryTaskFactory = (task) => (id: string, ...args: any[]) => {
    task(id, ...args);
    return getViewOptions(id);
};

export const registerView: (id: string, interaction: Interaction) => Interaction = registryTaskFactory((id, options) => viewRegistry[id] = {...options});
export const unregisterView: (id: string) => Interaction = registryTaskFactory(id => delete viewRegistry[id]);
