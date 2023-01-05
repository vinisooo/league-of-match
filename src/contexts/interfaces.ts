import React from "react";

export interface iContextChildrenProps {
  children: React.ReactNode;
}

export interface iUserProviderValue {
  login: (data: iUserLogin) => Promise<void>;
  players: iPlayers[];
  user: iPlayers | undefined;
  setUser: React.Dispatch<React.SetStateAction<iPlayers | undefined>>;
  loadUser: () => void;
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
  id: number;
  main?: string;
  bio?: string;
  profileIcon?: string;
  discord?: string;
}


