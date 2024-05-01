import React from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  Box,
} from "@mui/material";

import {
  LeagueEnum,
  BetMarketTypeEnumTypeTwo,
} from "../@generated/graphql/types-and-hooks";

type Filter = {
  league: LeagueEnum;
  betMarketType: BetMarketTypeEnumTypeTwo;
};

export type FilterKey = keyof Filter;
export type FilterValue<T extends FilterKey> = Filter[T];

interface ToolbarProps {
  league: LeagueEnum;
  betMarketType: BetMarketTypeEnumTypeTwo;
  onChange: <K extends FilterKey>(key: K, value: FilterValue<K>) => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  league,
  betMarketType,
  onChange,
}) => {
  const handleLeagueChange = (event: SelectChangeEvent) => {
    const newLeague = event.target.value as LeagueEnum;
    onChange("league", newLeague);
  };

  const handleBetMarketTypeChange = (event: SelectChangeEvent) => {
    const newBetMarketType = event.target.value as BetMarketTypeEnumTypeTwo;
    onChange("betMarketType", newBetMarketType);
  };

  return (
    <Box display="flex" sx={{ gap: 2, p: 2 }}>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Game</InputLabel>
        <Select value={league} label="Game" onChange={handleLeagueChange}>
          <MenuItem value={LeagueEnum.Nba}>NBA</MenuItem>
          <MenuItem value={LeagueEnum.Nfl}>NFL</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Bet Market Type</InputLabel>
        <Select
          value={betMarketType}
          label="Bet Market Type"
          onChange={handleBetMarketTypeChange}
        >
          <MenuItem value={BetMarketTypeEnumTypeTwo.MoneyLine}>
            MoneyLine
          </MenuItem>
          <MenuItem value={BetMarketTypeEnumTypeTwo.Spread}>Spread</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
