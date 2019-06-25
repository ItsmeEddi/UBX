export interface Filter {
    prop: string;
    name: string;
}

const filterConfig: Filter[] = [
    {
        prop: 'cases',
        name: 'Cases'
    },
    {
        prop: 'impulse',
        name: 'Impulse'
    },
    {
        prop: 'howto',
        name: 'How to',
    },
    {
        prop: 'intervention',
        name: 'Intervention'
    }
]

export default filterConfig;