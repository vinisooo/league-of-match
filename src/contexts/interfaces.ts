import React, { Dispatch, FormEvent, SetStateAction } from "react";

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
  getRouteIcon: (route: string) => string | undefined;
  previousPage: string;
  setPreviousPage: Dispatch<SetStateAction<string>>;
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

export interface iCharacter {
  icon: "string";
  name: "string";
}

export interface iProfileProviderValue {
  changeProfileIcon: (img: string) => Promise<void>;
  updateSearchValue: (event: FormEvent<HTMLFormElement>) => void;
  setInputValue: Dispatch<SetStateAction<string>>;
  changeMain: (character: iCharacter) => Promise<void>;
  changeRoute: (selectValue: string) => Promise<void>;
  filterCharacters: iCharacter[];
}
