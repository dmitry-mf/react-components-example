import React from 'react';

const Elem = () => <>Elem</>;

export class ClassComponentExample extends React.Component {
    static List = Elem;

    render(): React.ReactNode {
        return <>Container</>;
    }
}
