import React, { Dispatch, SetStateAction } from "react";

export interface iContextChildrenProps {
  children: React.ReactNode;
}

export interface iUserProviderValue {
  login: (data: iUserLogin) => Promise<void>;
  registerUser: (data: iUserRegister) => Promise<void>;
  players: iPlayers[];
  user: iPlayers;
  getAllPlayers: () => void;
  loading: boolean;
  setUser: Dispatch<SetStateAction<iPlayers>>;
  getRouteIcon: (route:string)=> string | undefined;
}

export interface iUserLogin {
  email: string;
  password: string;
}

export interface iPlayers {
  email: string;
  nickname: string;
  elo: string;
  route: string;
  id: number | string;
  main?: {
    id: number;
    name: string;
    icon: string;
    splashart: string;
    skin_splashart: string;
    card: string;
    skin_card: string;
  };
  bio?: string;
  profileIcon?: string;
  discord?: string;
}

export interface iUserRegister {
  email: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  elo: string;
  route: string;
}
