import React from "react";
import { StyledDevCard } from "./StyledDevCard"

interface iDevProps {
    dev: {
        name: string;
        img: string;
        part: string;
        github: string;
        linkedin: string;
        id: number;
    }
}

export function DevCard ({ dev }: iDevProps) {
    return (
        <StyledDevCard>
            <figure>
                <img src={dev.img} alt={dev.name} />
            </figure>
            <div>
                <h4>{dev.name}</h4>
                <span>{dev.part}</span>
                <span>
                    <a target="_blank" href={dev.github}>Github </a>
                    |
                    <a target="_blank" href={dev.linkedin}> Linkedin</a>
                </span>
            </div>
        </StyledDevCard>
    )
}
