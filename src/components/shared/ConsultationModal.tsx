"use client";

import * as React from "react";
const whatsappLink = "https://wa.me/919024557490";

type ConsultationTriggerProps = {
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export function ConsultationModal({ children }: { children: React.ReactElement<ConsultationTriggerProps> }) {
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
