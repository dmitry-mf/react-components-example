import React from 'react';

export const SimpleContainerComponent: React.FC = (props) => {
    // implement some logic here
    return <>{props.children}</>
}

export const ModifiedChildsContainerComponent: React.FC = ({ children }) => {
    // additional child props
    const styles = { style: {color: 'red', padding: '10px'} };
    // implement some logic here
    return (
        <form>
            {React.Children.map(children, (child: any) => {
                return React.cloneElement(child, styles, null)
            })}
        </form>
    )
}

export const SimpleContainerComponentV2: React.FC<{children: React.FC<React.StyleHTMLAttributes<HTMLInputElement>>}> = ({ children }) => {
    // additional child props
    const styles = { style: {color: 'red', padding: '10px'} };
    // implement some logic here
    return <>{children && children(styles)}</>
}