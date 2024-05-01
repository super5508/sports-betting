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

import { FilterValue, FilterKey, Header, Toolbar } from "./components";
import { useGetBetSites, useGetGameData } from "./hooks";

import {
  BetMarketTypeEnumTypeTwo,
  LeagueEnum,
  useBetCacheSubscription,
} from "./@generated/graphql/types-and-hooks";

const App: React.FC = () => {
  const [league, setLeague] = useState<LeagueEnum>(LeagueEnum.Nba);
  const [betMarketType, setBetMarketType] = useState<BetMarketTypeEnumTypeTwo>(
    BetMarketTypeEnumTypeTwo.MoneyLine
  );
  const [gameIds, setGameIds] = useState<string[]>([]);

  const { data: subscriptionData } = useBetCacheSubscription({
    variables: {
      request: {
        league: league,
        betMarketType: betMarketType,
      },
    },
  });

  useEffect(() => {
    const newIds: string[] = [];
    subscriptionData?.betCache?.forEach((cache) => {
      if (cache?.gameId) {
        newIds.push(cache.gameId);
      }
    });
    setGameIds(Array.from(new Set(newIds)));
  }, [subscriptionData]);

  const handleChange = useCallback(
    <K extends FilterKey>(key: K, value: FilterValue<K>) => {
      setGameIds([]);
      if (key === "league") {
        setLeague(value as LeagueEnum);
      } else if (key === "betMarketType") {
        setBetMarketType(value as BetMarketTypeEnumTypeTwo);
      }
    },
    []
  );

  const sites = useGetBetSites();
  const gameData = useGetGameData(gameIds, league);

  const getBetValue = useCallback(
    (gameId: string, teamId: number, siteId: number) => {
      let result = "";
      subscriptionData?.betCache?.forEach((cache) => {
        if (
          cache?.gameId === gameId &&
          (cache?.conditions ?? []).length > 0 &&
          (cache?.listings ?? []).length > 0
        ) {
          cache.conditions?.forEach((condition, index) => {
            if (
              condition?.teamId === teamId &&
              cache.listings?.[index]?.site?.id === siteId
            ) {
              if (condition.betValue) {
                result = `${condition.betValue}`;
              }
            }
          });
        }
      });
      return result;
    },
    [subscriptionData]
  );

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
                      <TableCell key={betSite?.id}>
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
                          <TableCell key={betSite.id}>
                            {getBetValue(game.id, game.homeTeam.id, betSite.id)}
                          </TableCell>
                        ))}
                      </TableRow>
                      <TableRow>
                        <TableCell>{game.awayTeam.name}</TableCell>
                        {sites.map((betSite) => (
                          <TableCell key={betSite.id}>
                            {getBetValue(game.id, game.awayTeam.id, betSite.id)}
                          </TableCell>
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
