"use client";

import * as React from "react";
const whatsappLink = "https://wa.me/919024557490";

export function ConsultationModal({ children }: { children: React.ReactElement }) {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    children.props.onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    window.open(whatsappLink, "_blank");
  };

  return React.cloneElement(children, {
    onClick: handleClick,
  });
}
