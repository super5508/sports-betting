import React, { useCallback, useEffect, useState } from "react";
import {
  Container,
  Card,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
} from "@mui/material";

import { FilterValue, FilterKey, Header, Toolbar, BetCell } from "./components";
import { useBetCache, useGetBetSites, useGetGameData } from "./hooks";
import { initBetValue } from "./utils/bet";

import {
  BetMarketTypeEnumTypeTwo,
  LeagueEnum,
} from "./@generated/graphql/types-and-hooks";

const App: React.FC = () => {
  const [curTime, setCurTime] = useState(Date.now());
  const [league, setLeague] = useState<LeagueEnum>(LeagueEnum.Nba);
  const [betMarketType, setBetMarketType] = useState<BetMarketTypeEnumTypeTwo>(
    BetMarketTypeEnumTypeTwo.MoneyLine
  );
  const [cacheGameIds] = useBetCache(league, betMarketType);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurTime(Date.now());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleChange = useCallback(
    <K extends FilterKey>(key: K, value: FilterValue<K>) => {
      if (key === "league") {
        setLeague(value as LeagueEnum);
      } else if (key === "betMarketType") {
        setBetMarketType(value as BetMarketTypeEnumTypeTwo);
      }
      initBetValue();
    },
    []
  );

  const sites = useGetBetSites();
  const gameData = useGetGameData(cacheGameIds, league);

  return (
    <>
      <Header />
      <Box sx={{ py: 3 }}>
        <Container>
          <Card variant="outlined" sx={{ mb: 2 }}>
            <Toolbar
              league={league}
              betMarketType={betMarketType}
              onChange={handleChange}
            />
          </Card>
          <Card variant="outlined" sx={{ p: 2 }}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Game Id</TableCell>
                    <TableCell>Teams</TableCell>
                    {sites.map((betSite) => (
                      <TableCell key={betSite.id}>
                        <img
                          src={betSite.iconImage}
                          width={40}
                          height={40}
                          alt={betSite.name}
                          title={betSite.name}
                        />
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {gameData.map((game) => (
                    <>
                      <TableRow>
                        <TableCell rowSpan={3}>{game.id}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>{game.homeTeam.name}</TableCell>
                        {sites.map((betSite) => (
                          <BetCell
                            key={betSite.id}
                            curTime={curTime}
                            gameId={game.id}
                            site={betSite}
                            teamId={game.homeTeam.id}
                            betMarketType={betMarketType}
                          />
                        ))}
                      </TableRow>
                      <TableRow>
                        <TableCell>{game.awayTeam.name}</TableCell>
                        {sites.map((betSite) => (
                          <BetCell
                            key={betSite.id}
                            curTime={curTime}
                            gameId={game.id}
                            site={betSite}
                            teamId={game.awayTeam.id}
                            betMarketType={betMarketType}
                          />
                        ))}
                      </TableRow>
                    </>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default App;
