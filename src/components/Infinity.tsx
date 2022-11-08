import React, { PropsWithChildren, useEffect, useRef, useState } from "react";

export interface InfinityProps extends PropsWithChildren {
  onEnd?: (event?: MouseEvent) => void;
  bottomOffset?: number;
}

export const Infinity: React.FC<InfinityProps> = ({
  children,
  onEnd,
  bottomOffset = 30,
}) => {
  const ref = useRef(null);
  const [end, setEnd] = useState(false);

  const childs = React.Children.toArray(children) as React.ReactElement[];
  if (childs.length !== 1) {
    throw Error("only one child alllowed");
  }

  const newChild = React.cloneElement(childs[0], { ref });

  useEffect(() => {
    if (end) {
      onEnd && onEnd();
    }
  }, [end]);

  useEffect(() => {
    let parent: HTMLElement | null;
    const scrollListener = () => {
      const res =
        parent!.scrollHeight -
        parent!.scrollTop -
        parent!.clientHeight -
        bottomOffset;
      if (res < 0) {
        setEnd(true);
      } else {
        setEnd(false);
      }
    };
    if (ref.current) {
      parent = getScrollParent(ref.current);
      if (parent) {
        parent.addEventListener("scroll", scrollListener);
      }
    }
    return () => {
      if (parent) {
        parent.removeEventListener("scroll", scrollListener);
      }
    };
  }, [bottomOffset, onEnd]);

  return <>{newChild}</>;
};

function getScrollParent(element: HTMLElement | null): HTMLElement | null {
  if (element == null) {
    return null;
  }

  if (element.scrollHeight > element.clientHeight) {
    return element;
  } else {
    return getScrollParent(element.parentElement);
  }
}
