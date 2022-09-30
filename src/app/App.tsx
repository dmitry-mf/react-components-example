import { SimpleHoc } from "@components/hocs";
import { ClassComponentExample } from '@components/classComponents';
import {
    SimpleContainerComponent,
    SimpleContainerComponentV2,
    ModifiedChildsContainerComponent
} from '@components/containers'
import React from "react";

const Component = SimpleHoc<{ test: 1 }>({})(() => <></>);

export const App = () => {
    return (
        <>
            <SimpleContainerComponent>
                <input name="name" />
                <input name="age" />
                <input name="birthDate" />
            </SimpleContainerComponent>

            <ModifiedChildsContainerComponent>
                <input name="name" />
                <input name="age" />
                <input name="birthDate" />
            </ModifiedChildsContainerComponent>

            <SimpleContainerComponentV2>
                {
                    (props) => (
                        <>
                        <input name="name" {...props} />
                        <input name="age"  {...props} />
                        <input name="birthDate"  {...props} />
                        </>
                    )
                }
            </SimpleContainerComponentV2>

            <Component test={1}/>

            <ClassComponentExample>
                <ClassComponentExample.List />
                <ClassComponentExample.List />
                <ClassComponentExample.List />
            </ClassComponentExample>
        </>
    )
};
