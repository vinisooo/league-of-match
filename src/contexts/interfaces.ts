import React from "react";

export interface iContextChildrenProps {
    children: React.ReactNode;
}

export interface iUserProviderValue {
    login: (data: iUserLogin) => Promise<void>;
}

export interface iUserLogin{
    email: string;
    password: string;
}4