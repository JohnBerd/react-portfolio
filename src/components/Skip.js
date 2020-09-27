import { Listener } from "@stickyroll/stickyroll";
import { assert, scrollTo } from "@stickyroll/utils";
import React from "react";

export const SkipBase = props => {
    const handleClick = e => {
        e.preventDefault();
       scrollTo(`${props.prefix}/${props.index}`, e.target, {
        noFocus: true, 
        noHash: true,
        behavior: 'smooth',
    });
    window.scrollBy(0, 10)
    };

    return (
        <div
            href={`#${props.prefix}/2`}
            onClick={handleClick}>
            {props.children}
        </div>
    );
};

const Skip = props => {
    if (props.useContext) {
        return (
            <Listener>
                {context => (
                    <SkipBase prefix={context.anchors} />
                )}
            </Listener>
        );
    }
    assert(props.prefix, "string");
    return <SkipBase {...props} />;
};

export default Skip;