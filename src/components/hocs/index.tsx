import React from 'react';

export const SimpleHoc = <ComponentProps extends {}>(
    params: {}
) => (
    Component: React.FC<ComponentProps> | React.ComponentClass<ComponentProps>
) => function MyHoc (props: ComponentProps) {
    React.useEffect(() => console.log('component rendered', params), []);
    return <Component {...props} />;
}
