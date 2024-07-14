import React from 'react'
import IcomoonReact from "icomoon-react";
import iconSet from "../../asset/icomoon/selection.json";

interface IIconProps{
    color?: string,
    size?: string | number,
    icon: string,
    className?: string
}

export const Icon = (props: IIconProps) => {
    const { color = 'white', size = "15", icon, className = "" } = props;

    return (
        <IcomoonReact
            className={className}
            iconSet={iconSet}
            color={color}
            size={size}
            icon={icon}
        />
    )
}
